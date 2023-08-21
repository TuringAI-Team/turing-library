import Base from "../base.js";
import { EventEmitter } from "events";

export default class Audio extends Base {
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
  async music(data: {
    prompt: string;
    model?: string;
    duration?: number;
    stream?: boolean;
  }): Promise<EventEmitter | any> {
    return await this.fetch("${this.options.host}/audio/music", data);
  }
  async stt(data: {
    model?: string;
    audio: string;
    diarization?: boolean;
    type?: string;
    stream?: boolean;
  }): Promise<EventEmitter | any> {
    return await this.fetch("${this.options.host}/audio/stt", data);
  }
  async tts(data: {
    model: string;
    voice: string;
    text: string;
    language: string;
    slow?: boolean;
    stream?: boolean;
  }): Promise<EventEmitter | any> {
    return await this.fetch("${this.options.host}/audio/tts", data);
  }
}
