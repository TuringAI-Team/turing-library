import Base from "../base";

export default class Image extends Base {
  constructor(start: {
    apiKey: string;
    captchaKey: string;
    options: {
      stream: boolean;
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
  }) {
    return await this.fetch("https://api.turing.sh/image/anything", data);
  }
  async controlnet(data: {
    prompt: string;
    model: string;
    image: string;
    stream?: boolean;
  }) {
    return await this.fetch("https://api.turing.sh/image/controlnet", data);
  }
  async dall(data: {
    prompt?: string;
    number: number;
    size?: string;
    image?: string;
    stream?: boolean;
  }) {
    return await this.fetch("https://api.turing.sh/image/dall-e", data);
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
  }) {
    return await this.fetch("https://api.turing.sh/image/kandinsky", data);
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
  }) {
    return await this.fetch("https://api.turing.sh/image/sh", data);
  }
  async upscale(data: { upscaler?: string; image: string }) {
    return await this.fetch("https://api.turing.sh/image/upscale", data);
  }
  async vision(data: { model: any[]; image: string }) {
    return await this.fetch("https://api.turing.sh/image/vision", data);
  }
}
