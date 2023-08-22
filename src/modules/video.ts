import Base from "../base.js";
import { EventEmitter } from "events";

export default class Video extends Base {
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
  async zelescope(data: {
    prompt: string;
    duration?: number;
  }): Promise<EventEmitter | any> {
    return await this.fetch(`${this.options.host}/video/zelescope`, data);
  }
}
