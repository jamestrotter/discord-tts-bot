/* eslint-disable max-statements */
const logger = require('@greencoast/logger');
const { cleanMessage } = require('../../utils/mentions');
const { getCantConnectToChannelReason } = require('../../utils/channel');
const TTSPlayer = require('./TTSPlayer');

class TTSChannelHandler {
  constructor(client) {
    this.client = client;
  }

  initialize() {
    this.client.on('messageCreate', this.handleMessage.bind(this));
  }

  async handleMessage(message) {
    if (message.author.bot || !message.guild) {
      return;
    }

    const channelSettings = await this.client.ttsSettings.get(message.channel);
    if (!channelSettings || !channelSettings.provider) {
      return;
    }

    return this.handleSay(message, channelSettings);
  }

  async handleSay(message, channelSettings) {
    const localizer = this.client.localizer.getLocalizer(message.guild);
    const ttsPlayer = this.client.getTTSPlayer(message.guild);
    const connection = ttsPlayer.voice.getConnection();

    const extras = channelSettings[channelSettings.provider] || TTSPlayer.DEFAULT_SETTINGS[channelSettings.provider];

    const { me: { voice: myVoice }, name: guildName, members, channels, roles, emojis } = message.guild;
    const { channel: memberChannel } = message.member.voice;
    const myChannel = myVoice?.channel;
    const textToSay = cleanMessage(message.content, {
      members: members.cache,
      channels: channels.cache,
      roles: roles.cache,
      emojis: emojis.cache
    });

    if (!memberChannel) {
      return message.reply(localizer.t('command.say.no_channel'));
    }

    if (connection) {
      if (myChannel !== memberChannel) {
        return message.reply(localizer.t('command.say.different_channel'));
      }

      return ttsPlayer.say(textToSay, channelSettings.provider, extras);
    }

    const cantConnectReason = getCantConnectToChannelReason(memberChannel);
    if (cantConnectReason) {
      return message.reply(localizer.t(cantConnectReason));
    }

    await ttsPlayer.voice.connect(memberChannel);
    logger.info(`Joined ${memberChannel.name} in ${guildName}.`);
    await message.reply(localizer.t('command.say.joined', { channel: memberChannel.toString() }));
    return ttsPlayer.say(textToSay, channelSettings.provider, extras);
  }
}

module.exports = TTSChannelHandler;