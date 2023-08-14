import Base from "../base";

export default class Video extends Base {
  constructor(start: {
    apiKey: string;
    captchaKey: string;
    options: {
      stream: boolean;
    };
  }) {
    super(start);
  }
  async zelescope(data: { prompt: string; duration?: number }) {
    return await this.fetch("https://api.turing.sh/video/zelescope", data);
  }
}
