# turing.sh

![Discord](https://img.shields.io/discord/899761438996963349)
![npm](https://img.shields.io/npm/dt/turing.sh)
![npm bundle size](https://img.shields.io/bundlephobia/min/turing.sh)

The official library to interact with TuringAPI using javascript or typescript.

Check our docs at [docs.turing.sh](https://docs.turing.sh)

# How to get an API key

Go to our [discord server](https://discord.gg/turing), then go to the [applications channel](https://discord.com/channels/899761438996963349/1129712544580374571) where you can apply for an API key. Please take the applications seriously, we will not accept applications that are not serious.

## Installation

```bash
npm install turing.sh
```

## Usage

```typescript
import { Text, Image, Audio } from "turing.sh";

const text = new Text({
  apiKey: "YOUR_API_KEY",
  captchaKey: "YOUR_CAPTCHA_KEY",
});

const gptAnswer = await text.gpt({
  messages: [
    {
      role: "user",
      content: "Hello, how are you?",
    },
  ],
});
```
