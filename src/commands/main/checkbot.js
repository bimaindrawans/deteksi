const { RunFunction } = require('../../types/command');

const name = 'checkbot';
const description = 'Check available music bot';
const category = 'Utility';
const aliases = ['cb'];
const run = async (client, message) => {
  const configcollection = client.db.get('config');
  try {
    const docs = await configcollection.find({ guildId: message.guild.id });
    if (docs.length === 0) return message.reply('Please set up the bot first');

    const musicbot = message.guild.members.cache.filter(
      (a) => a.user.bot && a.roles.cache.has(String(docs[0].roleId))
    );

    const embed = client.embed({
      title: 'Available bot:',
      description: String(
        musicbot.map((e) => `${e.voice.channelId ? '❌' : '✅'} <@${e.id}>`).join('\n')
      ),
    });

    message.channel.send(embed);
  } catch (err) {
    message.reply('Failed to load data from the database');
    console.error(err);
  }
};

module.exports = { name, description, run, category, aliases };