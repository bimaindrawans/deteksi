// commands.js
const { Bot } = require('../client');
const { Message } = require('discord.js');

/**
 * @param {Bot} client
 * @param {Message} message
 * @param {any[]} args
 * @returns {Promise<any>}
 */
const run = async (client, message, args) => {
  // Implement your command logic here
};

/**
 * @type {import("../types").RunFunction}
 */
module.exports = {
  name: 'example',
  category: 'Example',
  aliases: ['ex'],
  permissionUser: [], // Define your permissionUser array
  permissionBot: [], // Define your permissionBot array
  description: 'An example command',
  run,
};