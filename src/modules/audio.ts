import Base from "../base";

export default class Audio extends Base {
  constructor(start: {
    apiKey: string;
    captchaKey: string;
    options: {
      stream: boolean;
    };
  }) {
    super(start);
  }
  async music(data: {
    prompt: string;
    model?: string;
    duration?: number;
    stream?: boolean;
  }) {
    return await this.fetch("https://api.turing.sh/audio/music", data);
  }
  async stt(data: {
    model?: string;
    audio: string;
    diarization?: boolean;
    type?: string;
    stream?: boolean;
  }) {
    return await this.fetch("https://api.turing.sh/audio/stt", data);
  }
  async tts(data: {
    model: string;
    voice: string;
    text: string;
    language: string;
    slow?: boolean;
    stream?: boolean;
  }) {
    return await this.fetch("https://api.turing.sh/audio/tts", data);
  }
}
