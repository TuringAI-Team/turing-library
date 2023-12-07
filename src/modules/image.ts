import Base from "../base.js";
import { EventEmitter } from "events";

export default class Image extends Base {
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
  async anything(data: {
    prompt: string;
    steps?: number;
    number?: number;
    negative_prompt?: string;
    guidance_scale?: number;
    width?: number;
    height?: number;
    cfg_scale?: number;
    stream?: boolean;
  }): Promise<EventEmitter | any> {
    return await this.fetch(`${this.options.host}/image/anything`, data);
  }
  async controlnet(data: {
    prompt: string;
    model: string;
    image: string;
    stream?: boolean;
  }): Promise<EventEmitter | any> {
    return await this.fetch(`${this.options.host}/image/controlnet`, data);
  }
  async dall(data: {
    prompt?: string;
    number: number;
    size?: string;
    image?: string;
    stream?: boolean;
  }): Promise<EventEmitter | any> {
    return await this.fetch(`${this.options.host}/image/dall-e`, data);
  }
  async fast_sdxl(data: {
    prompt: string;
    steps?: number;
    number?: number;
    negative_prompt?: string;
    width?: number;
    height?: number;
    model_version?: string;
    stream?: boolean;
  }): Promise<EventEmitter | any> {
    return await this.fetch(`${this.options.host}/image/fast_sdxl`, data);
  }
  async kandinsky(data: {
    prompt: string;
    steps?: number;
    number?: number;
    negative_prompt?: string;
    guidance_scale?: number;
    width?: number;
    height?: number;
    cfg_scale?: number;
    model_version?: string;
    stream?: boolean;
  }): Promise<EventEmitter | any> {
    return await this.fetch(`${this.options.host}/image/kandinsky`, data);
  }
  async sh(data: {
    prompt: string;
    negative_prompt?: string;
    image?: string;
    width?: number;
    height?: number;
    steps?: number;
    number?: number;
    strength?: number;
    sampler?: string;
    cfg_scale?: number;
    seed?: number;
    model?: string;
    nsfw?: boolean;
    stream?: boolean;
  }): Promise<EventEmitter | any> {
    return await this.fetch(`${this.options.host}/image/sh`, data);
  }
  async upscale(data: {
    upscaler?: string;
    image: string;
  }): Promise<EventEmitter | any> {
    return await this.fetch(`${this.options.host}/image/upscale`, data);
  }
  async vision(data: {
    model: any[];
    image: string;
  }): Promise<EventEmitter | any> {
    return await this.fetch(`${this.options.host}/image/vision`, data);
  }
}
