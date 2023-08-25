import requests
import os

def generate_files(modules, models_list):
    if not os.path.exists("./src/modules"):
        os.makedirs("./src/modules")

    for module in modules:
        models = [model for model in models_list if model['module'] == module]
        models = [model for model in models if model['name']]

        with open(f"./src/modules/{module}.py", "w") as file:
            file.write(f"import Base\n")
            file.write(f"from events import EventEmitter\n")
            file.write(f"\nclass {module.capitalize()}(Base):\n")
            file.write(f"    def __init__(self, start):\n")
            file.write(f"        super().__init__(start)\n")
            for model in models:
                name_fn = model['name'].split("-")[0]
                params = model['parameters']
                response_params = model['response']
                file.write(f"\n    async def {name_fn}(self, data):\n")
                file.write(f"        response = await self.fetch('{module}/{model['name']}', data)\n")
                file.write(f"        return response\n")

def main():
    response = requests.get("https://api.turing.sh/list")
    data = response.json()
    modules = list(data['types'].keys())
    models_list = []
    for module, models_from_type in data['types'].items():
        for model in models_from_type:
            models_list.append({
                **model,
                'module': module
            })

    generate_files(modules, models_list)

    with open("./src/index.py", "w") as index_file:
        index_file.write("\n".join([
            f"from modules.{module} import {module.capitalize()}"
            for module in modules
        ]))
        index_file.write(f"\n\n__all__ = [{', '.join(modules)}]")

if __name__ == "__main__":
    main()
