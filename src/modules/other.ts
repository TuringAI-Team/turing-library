import Base from "../base.js";
import { EventEmitter } from "events";

export default class Other extends Base {
  constructor(start: {
    apiKey: string;
    captchaKey: string;
    superKey?: string;
    options?: {
      stream?: boolean;
      host?: string;
    };
  }) {
    super(start);
  }

  async stats(): Promise<any> {
    return await this.fetch(`${this.options.host}/other/bot`, {
      stream: false,
    });
  }
}
