import Base from "../base";
import { EventEmitter } from "events";

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
  }): Promise<EventEmitter | any> {
    return await this.fetch("https://api.turing.sh/text/alan", data);
  }
  async anthropic(data: {
    messages: any[];
    model?: string;
    max_tokens?: number;
    temperature?: number;
    stream?: boolean;
  }): Promise<EventEmitter | { cost?: number; result?: string }> {
    return await this.fetch("https://api.turing.sh/text/anthropic", data);
  }
  async filter(data: {
    text: string;
    filters: any[];
    stream?: boolean;
  }): Promise<
    | EventEmitter
    | {
        nsfw?: boolean;
        youth?: boolean;
        cp?: boolean;
        toxic?: boolean;
        done?: boolean;
      }
  > {
    return await this.fetch("https://api.turing.sh/text/filter", data);
  }
  async google(data: {
    messages: any[];
    model?: string;
    max_tokens?: number;
    temperature?: number;
  }): Promise<
    EventEmitter | { cost?: number; result?: string; done?: boolean }
  > {
    return await this.fetch("https://api.turing.sh/text/google", data);
  }
  async gpt(data: {
    messages: any[];
    model: string;
    max_tokens?: number;
    temperature?: number;
    plugins?: any[];
  }): Promise<
    | EventEmitter
    | {
        result: string;
        done: boolean;
        cost: number;
        tool: object;
        finishReason: string;
      }
  > {
    return await this.fetch("https://api.turing.sh/text/gpt-new", data);
  }
  async huggingface(data: {
    messages?: any[];
    prompt?: string;
    chat?: boolean;
    model: string;
    stop?: string;
  }): Promise<
    EventEmitter | { cost?: number; result?: string; done?: boolean }
  > {
    return await this.fetch("https://api.turing.sh/text/huggingface", data);
  }
  async openchat(data: {
    messages: any[];
    model?: string;
    max_tokens?: number;
    temperature?: number;
  }): Promise<
    | EventEmitter
    | { result: string; done: boolean; cost: number; finishReason: string }
  > {
    return await this.fetch("https://api.turing.sh/text/openchat", data);
  }
  async translate(data: {
    text: string;
    from?: CountryCode;
    to: CountryCode;
    ai: "google" | "microsoft" = "google";
  }): Promise<
    | EventEmitter
    | { status: boolean; translated?: string; time?: number; }
  > {
    return await this.fetch("https://api.turing.sh/text/translate", data);
  }
}

type CountryCode = "af" | "sq" | "am" | "ar" | "hy" | "as" | "ay" | "az" | "bm" | "eu" | "be" | "bn" | "bho" | "bs" | "bg" | "ca" | "ceb" | "zh-CN" | "zh" | "zh-TW" | "co" | "hr" | "cs" | "da" | "dv" | "doi" | "nl" | "en" | "eo" | "et" | "ee" | "fil" | "fi" | "fr" | "fy" | "gl" | "ka" | "de" | "el" | "gn" | "gu" | "ht" | "ha" | "haw" | "he" | "iw" | "hi" | "hmn" | "hu" | "is" | "ig" | "ilo" | "id" | "ga" | "it" | "ja" | "jv" | "jw" | "kn" | "kk" | "km" | "rw" | "gom" | "ko" | "kri" | "ku" | "ckb" | "ky" | "lo" | "la" | "lv" | "ln" | "lt" | "lg" | "lb" | "mk" | "mai" | "mg" | "ms" | "ml" | "mt" | "mi" | "mr" | "mni" | "lus" | "mn" | "my" | "ne" | "no" | "ny" | "or" | "om" | "ps" | "fa" | "pl" | "pt" | "pa" | "qu" | "ro" | "ru" | "sm" | "sa" | "gd" | "nso" | "sr" | "st" | "sn" | "sd" | "si" | "sk" | "sl" | "so" | "es" | "su" | "sw" | "sv" | "tl" | "tg" | "ta" | "tt" | "te" | "th" | "ti" | "ts" | "tr" | "tk" | "ak" | "uk" | "ur" | "ug" | "uz" | "vi" | "cy" | "xh" | "yi" | "yo" | "zu";
