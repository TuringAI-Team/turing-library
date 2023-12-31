import { fetchEventSource } from "@waylaidwanderer/fetch-event-source";
import { EventEmitter } from "events";
import axios from "axios";

export default class Base {
  apiKey: string;
  captchaKey: string;
  superKey: string;
  options: {
    stream?: boolean;
    host?: string;
  };

  constructor(start: {
    apiKey: string;
    captchaKey: string;
    superKey?: string;
    options?: {
      stream?: boolean;
      host?: string;
    };
  }) {
    this.apiKey = start.apiKey;
    this.captchaKey = start.captchaKey;
    if (start.options) {
      this.options = {
        stream: start.options.stream || null,
        host: start.options.host || "https://api.turing.sh",
      };
    }
    if (start.superKey) this.superKey = start.superKey;
  }

  async fetch(url: string, options: any): Promise<EventEmitter | any> {
    let isStream = options.stream;
    if (isStream === undefined) isStream = this.options.stream;
    if (isStream === undefined) isStream = false;
    let headers = {
      "Content-Type": "application/json",
      Authorization: this.apiKey,
      "x-captcha-token": this.captchaKey,
    };
    if (this.superKey) headers["secret"] = this.superKey;
    delete options.stream;
    if (isStream) {
      let event = new EventEmitter();
      fetchEventSource(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
          ...options,
          stream: true,
        }),
        onopen: async () => {},
        onmessage: async (msg: any) => {
          let ev = JSON.parse(msg.data);
          event.emit("data", ev);
        },
      });
      return event;
    } else {
      let res = await axios({
        url: url,
        method: "POST",
        headers: {
          ...headers,
          // change timeout time to 3min
          "x-timeout": "180000",
        },
        timeout: 180000,
        data: JSON.stringify({
          ...options,
          stream: false,
        }),
      });
      return res.data;
    }
  }
  async model(data: { stream: true }): Promise<EventEmitter> {
    return await this.fetch("https://api.turing.sh/", data);
  }
}
