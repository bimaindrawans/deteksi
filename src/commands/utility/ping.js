const { RunFunction } = require('../../types/command');

const name = 'ping';
const description = 'Return ping value to the bot';
const category = 'Utility';
const aliases = ['p'];
const run = async (client, message) => {
  return message.channel.send('Pinging...').then((sent) => {
    sent.edit(
      client.embed({
        title: `✅ Roundtrip latency: ${sent.createdTimestamp - message.createdTimestamp}ms\n✅ WebSocket: ${client.ws.ping}ms`,
      })
    );
  });
};

module.exports = { name, description, run, category, aliases };