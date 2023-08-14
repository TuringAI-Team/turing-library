import Base from "../base";

export default class Text extends Base {
  constructor(start: {
    apiKey: string;
    captchaKey: string;
    options: {
      stream: boolean;
    };
  }) {
    super(start);
  }
  async alan(data: {
    userName: string;
    messages: any[];
    searchEngine?: string;
    image?: string;
    imageDescription?: string;
    imageGenerator?: string;
    nsfw?: boolean;
    audioGenerator?: string;
    imageModificator?: string;
    max_tokens?: number;
  }) {
    return await this.fetch("https://api.turing.sh/text/alan", data);
  }
  async anthropic(data: {
    messages: any[];
    model?: string;
    max_tokens?: number;
    temperature?: number;
    stream?: boolean;
  }) {
    return await this.fetch("https://api.turing.sh/text/anthropic", data);
  }
  async filter(data: { text: string; filters: any[]; stream?: boolean }) {
    return await this.fetch("https://api.turing.sh/text/filter", data);
  }
  async google(data: {
    messages: any[];
    model?: string;
    max_tokens?: number;
    temperature?: number;
  }) {
    return await this.fetch("https://api.turing.sh/text/google", data);
  }
  async gpt(data: {
    messages: any[];
    model: string;
    max_tokens?: number;
    temperature?: number;
    plugins?: any[];
  }) {
    return await this.fetch("https://api.turing.sh/text/gpt-new", data);
  }
  async huggingface(data: {
    messages?: any[];
    prompt?: string;
    chat?: boolean;
    model: string;
    stop?: string;
  }) {
    return await this.fetch("https://api.turing.sh/text/huggingface", data);
  }
  async openchat(data: {
    messages: any[];
    model?: string;
    max_tokens?: number;
    temperature?: number;
  }) {
    return await this.fetch("https://api.turing.sh/text/openchat", data);
  }
}
