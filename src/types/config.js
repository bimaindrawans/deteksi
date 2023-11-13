// config.js
/**
 * @typedef {Object} Config
 * @property {string} token - Discord Bot Token
 * @property {string} prefix - Bot Command Prefix
 * @property {string} mongoURI - MongoDB Connection URI
 */

/**
 * @type {Config}
 */
module.exports = {
    token: process.env.DISCORD_TOKEN || 'your-default-discord-token',
    prefix: process.env.BOT_PREFIX || 'your-default-bot-prefix',
    mongoURI: process.env.MONGO_URI || 'your-default-mongo-uri',
  };