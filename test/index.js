import { Text } from "../dist/index.js";
import "dotenv/config";

const bot = new Text({
  apiKey: process.env.TURING_API_KEY,
  captchaKey: process.env.TURING_CAPTCHA_KEY,
  options: {
    host: "http://localhost:3232",
  },
});
(async () => {
  const event = await bot.gpt({
    messages: [
      {
        role: "user",
        content: "what is your name?",
      },
    ],

    model: "gpt-3.5-turbo",
    stream: true,
  });
  event.on("data", (data) => {
    let ms = Date.now();
    console.log(`[${formatDate(ms)}] ${JSON.stringify(data)}`);
  });
})();

function formatDate(ms) {
  // format to minute:second:millisecond
  const date = new Date(ms);
  return `${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`;
}
