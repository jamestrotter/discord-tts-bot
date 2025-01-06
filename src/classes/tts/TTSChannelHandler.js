/* eslint-disable max-statements */
const logger = require('@greencoast/logger');
const { cleanMessage } = require('../../utils/mentions');
const { getCantConnectToChannelReason } = require('../../utils/channel');
const merge = require('deepmerge');

class TTSChannelHandler {
  constructor(client) {
    this.client = client;
    this.lastAnnounced = null;
  }

  initialize() {
    this.client.on('messageCreate', this.handleMessage.bind(this));
  }

  async handleMessage(message) {
    try {
      if (message.author.bot || !message.guild || message.content?.length < 1) {
        return;
      }

      const channelSettings = await this.client.ttsSettings.get(message.channel);
      if (!channelSettings || !channelSettings.provider) {
        return;
      }

      return await this.handleSay(message, channelSettings);
    } catch (error) {
      logger.error(`Something happened when handling the TTS channel ${message.channel.name} with message from ${message.member.displayName}`);
      logger.error(error);
    }
  }

  async handleSay(message, channelSettings) {
    const localizer = this.client.localizer.getLocalizer(message.guild);
    const ttsPlayer = this.client.getTTSPlayer(message.guild);
    const connection = ttsPlayer.voice.getConnection();

    const ttsSettingsPromise =  this.client.ttsSettings.getCurrentForChannel(message.channel);

    //check to see if the user has their own voice set
    
    const messageAuthorMember = message.member
    const memberSettingsPromise = this.client.ttsSettings.get(messageAuthorMember);

    const ttsSettings = await ttsSettingsPromise;
    const memberSettings = await memberSettingsPromise;
    
    let extras = ttsSettings[channelSettings.provider];
    if(memberSettings[channelSettings.provider]){
      extras = merge(ttsSettings[channelSettings.provider], memberSettings[channelSettings.provider]);
    }

    const { members: { me: { voice: myVoice } }, name: guildName, members, channels, roles } = message.guild;
    const { channel: memberChannel } = message.member.voice;
    const myChannel = myVoice?.channel;

    let messageIntro = '';
    if(this.client.config.get('ENABLE_WHO_SAID')){this.lastAnnounced 
      //check to see if we last announced this person, if we did don't re-announce
      var senderId = messageAuthorMember.id;
      if(this.lastAnnounced != senderId){
        messageIntro = `${message.member.displayName} said `
        this.lastAnnounced = senderId;
      }
      
    }

    const textToSay = cleanMessage(`${messageIntro}${message.content}`, {
      members: members.cache,
      channels: channels.cache,
      roles: roles.cache
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
