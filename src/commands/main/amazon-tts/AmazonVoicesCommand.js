const { SlashCommand } = require('@greencoast/discord.js-extended');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
const AmazonProvider = require('../../../classes/tts/providers/AmazonProvider');
const { MESSAGE_EMBED } = require('../../../common/constants');
const languageData = require('../../../../provider-data/ttstool_amazon_languages.json');

class AmazonVoicesCommand extends SlashCommand {
  constructor(client) {
    super(client, {
      name: 'amazon_voices',
      description: 'Display a list of the voices for any language supported by the Amazon provider.',
      emoji: ':speaking_head:',
      group: 'amazon-tts',
      guildOnly: true,
      dataBuilder: new SlashCommandBuilder()
        .addStringOption((input) => {
          return input
            .setName('language')
            .setDescription('The language to check the voices for. Omit this to see the voices for your language.')
            .setRequired(false);
        })
    });
  }

  createEmbed(localizer, language) {
    const languageInfo = languageData[language];

    const embed = new EmbedBuilder()
      .setTitle(localizer.t('command.amazon.voices.embed.title', { language: languageInfo.name }))
      .setColor(MESSAGE_EMBED.color)
      .setDescription(localizer.t('command.amazon.voices.embed.description', { language: languageInfo.name }))
      .setThumbnail(MESSAGE_EMBED.langThumbnail)
      .setURL(MESSAGE_EMBED.amazonLangURL);

    const content = languageInfo.voices.reduce((text, voice) => {
      return text.concat(`${voice.emoji} ${voice.name} - **/amazon_set_my voice ${voice.name}**\n`);
    }, '');

    embed.addFields({ name: `${languageInfo.emoji} ${languageInfo.name}`, value: content });

    return embed;
  }

  sendAvailableVoices(interaction, localizer, language) {
    const embed = this.createEmbed(localizer, language);
    return interaction.reply({ embeds: [embed] });
  }

  async run(interaction) {
    const localizer = this.client.localizer.getLocalizer(interaction.guild);
    const language = interaction.options.getString('language');

    if (language) {
      if (!Object.keys(languageData).includes(language)) {
        return interaction.reply({ content: localizer.t('command.amazon.voices.error.unsupported', { language }) });
      }

      return this.sendAvailableVoices(interaction, localizer, language);
    }


    const settings = await this.client.ttsSettings.getCurrent(interaction);
    const { language: userLanguage } = settings[AmazonProvider.NAME];

    return this.sendAvailableVoices(interaction, localizer, userLanguage);
  }
}

module.exports = AmazonVoicesCommand;
