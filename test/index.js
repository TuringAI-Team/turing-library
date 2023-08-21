import { Text } from "../dist/index.js";
import "dotenv/config";

const bot = new Text({
  apiKey: process.env.TURING_API_KEY,
  captchaKey: process.env.TURING_CAPTCHA_KEY,
});
(async () => {
  const event = await bot.gpt({
    messages: [
      {
        role: "user",
        content: "hi",
      },
    ],

    model: "gpt-3.5-turbo",
    stream: true,
  });
  event.on("data", (data) => {
    console.log(data);
  });
})();
