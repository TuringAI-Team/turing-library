import axios from "axios";
import fs from "node:fs";
import * as prettier from "prettier";

// This code generates types for all AI modules based on https://api.turing.sh/list
(async () => {
  let res = await axios.get("https://api.turing.sh/list");
  let data = res.data.types;
  let modules = Object.keys(data);
  let models = [];
  modules.forEach((module) => {
    let modelsFromType = data[module];
    modelsFromType.forEach((model) => {
      models.push({
        ...model,
        module: module,
      });
    });
  });
  await generateFiles(modules, models);
})();

async function generateFiles(modules: any[], modelsList) {
  if (!fs.existsSync("./src/modules")) fs.mkdirSync("./src/modules");
  modules.forEach(async (module) => {
    let models = modelsList.map((model) => {
      if (model.module == module) {
        return model;
      } else {
        return {};
      }
    });
    models = models.filter((model) => model.name);
    await writeFileSync(
      `./src/modules/${module}.ts`,
      `import Base from "../base";
      
      export default class ${
        module.charAt(0).toUpperCase() + module.slice(1)
      } extends Base {
        constructor(start: {
            apiKey: string;
            captchaKey: string;
            options: {
              stream: boolean;
            };
        }) {
            super(start);
        }
        ${models
          .map((model) => {
            let nameFn = model.name.split("-")[0];
            let params = Object.keys(model.parameters);
            let type = params
              .map((param) => {
                let parameter = model.parameters[param];
                let t = parameter.type;
                if (t == "array") t = "any[]";
                return `${param}${parameter.required ? "" : "?"}: ${t};`;
              })
              .join("\n");
            return `async ${nameFn}(data: {
                ${type}
            }){
             return await this.fetch("https://api.turing.sh/${module}/${model.name}", data);
           }`;
          })
          .join("\n")}
      }`
    );
  });
  await writeFileSync(
    `./src/index.ts`,
    `${modules
      .map(
        (module) =>
          `import ${
            module.charAt(0).toUpperCase() + module.slice(1)
          } from "./modules/${module}";`
      )
      .join("\n")}

  export {
    ${modules.map((module) => module.charAt(0).toUpperCase() + module.slice(1))}
  }`
  );
}

async function writeFileSync(path, text) {
  fs.writeFileSync(path, await prettier.format(text, { parser: "typescript" }));
}
