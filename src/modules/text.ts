import Base from "../base.js";
import { EventEmitter } from "events";

export default class Text extends Base {
  constructor(start: {
    apiKey: string;
    captchaKey: string;
    options?: {
      stream?: boolean;
      host?: string;
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
  }): Promise<EventEmitter | any> {
    return await this.fetch(`${this.options.host}/text/alan`, data);
  }
  async anthropic(data: {
    messages: any[];
    model?: string;
    max_tokens?: number;
    temperature?: number;
    stream?: boolean;
  }): Promise<EventEmitter | any> {
    return await this.fetch(`${this.options.host}/text/anthropic`, data);
  }
  async filter(data: {
    text: string;
    filters: any[];
    stream?: boolean;
  }): Promise<EventEmitter | any> {
    return await this.fetch(`${this.options.host}/text/filter`, data);
  }
  async google(data: {
    messages: any[];
    model?: string;
    max_tokens?: number;
    temperature?: number;
    id?: string;
  }): Promise<EventEmitter | any> {
    return await this.fetch(`${this.options.host}/text/google`, data);
  }
  async gpt(data: {
    messages: any[];
    model: string;
    max_tokens?: number;
    temperature?: number;
    plugins?: any[];
    id?: string;
  }): Promise<EventEmitter | any> {
    return await this.fetch(`${this.options.host}/text/gpt-new`, data);
  }
  async openchat(data: {
    messages: any[];
    model?: string;
    max_tokens?: number;
    temperature?: number;
    id?: string;
    autoSystemMessage?: boolean;
  }): Promise<EventEmitter | any> {
    return await this.fetch(`${this.options.host}/text/openchat`, data);
  }
  async pawan(data: {
    messages: any[];
    model?: string;
    max_tokens?: number;
    temperature?: number;
    id?: string;
    autoSystemMessage?: boolean;
  }): Promise<EventEmitter | any> {
    return await this.fetch(`${this.options.host}/text/pawan`, data);
  }
}
