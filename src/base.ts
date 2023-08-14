import { fetchEventSource } from "@waylaidwanderer/fetch-event-source";
import { EventEmitter } from "events";

export default class Base {
  apiKey: string;
  captchaKey: string;
  options: {
    stream: boolean;
  };

  constructor(start: {
    apiKey: string;
    captchaKey: string;
    options: {
      stream: boolean;
    };
  }) {
    this.apiKey = start.apiKey;
    this.captchaKey = start.captchaKey;
    this.options = start.options;
  }

  async fetch(url: string, options: any): Promise<EventEmitter> {
    let event = new EventEmitter();
    fetchEventSource(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.apiKey,
        "x-captcha-token": this.captchaKey,
      },
      body: JSON.stringify(options),
      onmessage: (msg: any) => {
        let ev = JSON.parse(msg.data);
        event.emit("data", ev);
      },
    });
    return event;
  }
  async model(data: { stream: true }): Promise<EventEmitter> {
    return await this.fetch("https://api.turing.sh/", data);
  }
}
