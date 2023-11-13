const { Client, Intents, Collection, MessageEmbed } = require('discord.js');
const { Config } = require('./types/config');
const { Command } = require('./types/command');
const { Event } = require('./types/event');
const monk = require('monk');
const { promisify } = require('util');
const glob = promisify(require('glob'));

class Bot extends Client {
  constructor() {
    super({
      intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES,
      ],
    });

    this.Config = null;
    this.db = monk(process.env.MONGO_URI);
    this.commands = new Collection();
    this.events = new Collection();
  }

  async start(config) {
    await this.db.then(e => console.log('Database connected'));

    this.Config = config;
    await this.login(config.token);

    const commandFiles = await this.globPromise(`${__dirname}/commands/**/*{.js}`);
    commandFiles.map(async (value) => {
      const file = require(value);
      this.commands.set(file.name, file);
      console.log(`Success load command: ${file.name}`);
    });

    const eventFiles = await this.globPromise(`${__dirname}/events/**/*{.js}`);
    eventFiles.map(async (value) => {
      const file = require(value);
      this.events.set(file.name, file);
      this.on(file.name, file.run.bind(null, this));
    });
  }

  async globPromise(pattern) {
    return glob(pattern);
  }

  embed(options) {
    return new MessageEmbed({ ...options, color: 'RANDOM' }).setTimestamp();
  }
}

module.exports = { Bot };
