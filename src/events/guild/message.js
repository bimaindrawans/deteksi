const { Command } = require('../../types/command');
const { RunFunction } = require('../../types/event');
const { Message } = require('discord.js');

const name = 'message';
const run = async (client, message) => {
  if (message.author.bot || !message.guild) return;
  if (!message.content.startsWith(client.Config.prefix)) return;
  const args = message.content.slice(client.Config.prefix.length).trim().split(/ +/g);
  const cmd = args.shift();

  const command = client.commands.get(cmd) || client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
  if (!command) return;

  if (!message.guild.me.permissions.has(command.permissionBot)) {
    return message.reply("Bot doesn't have permission to execute the command");
  }

  if (!message.member.permissions.has(command.permissionUser)) {
    return message.reply("You don't have permission for this command");
  }

  command.run(client, message, args).catch((reason) =>
    message.channel.send(client.embed({ description: String(reason), title: 'Error occurred' }))
  );
};

module.exports = { name, run };