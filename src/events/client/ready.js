const { RunFunction } = require('../../types/event');

const name = 'ready';
const run = async (client) => {
  client.logger.success(`Logged in as ${client.user.tag}`);
};

module.exports = { name, run };