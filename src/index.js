const { Bot } = require('./client');
const { config } = require('dotenv');
config();

const { token, prefix } = process.env;

const startBot = async () => {
  const bot = new Bot();
  await bot.start({ token, prefix });
};

startBot();