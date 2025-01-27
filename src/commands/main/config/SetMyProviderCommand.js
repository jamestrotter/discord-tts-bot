const { SlashCommand } = require('@greencoast/discord.js-extended');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageFlags } = require('discord.js');
const logger = require('@greencoast/logger');
const ProviderManager = require('../../../classes/tts/providers/ProviderManager');
const { oldChoiceListToNew } = require('../../../utils/upgrade-utils');

class SetMyProviderCommand extends SlashCommand {
  constructor(client) {
    super(client, {
      name: 'set_my_provider',
      description: 'Sets the provider to be used by the say command for yourself.',
      emoji: ':pencil2:',
      group: 'config',
      guildOnly: true,
      dataBuilder: new SlashCommandBuilder()
        .addStringOption((input) => {
          return input
            .setName('provider')
            .setDescription('The provider to use from now on.')
            .setRequired(true)
            .addChoices(...oldChoiceListToNew(ProviderManager.SUPPORTED_PROVIDERS.map((p) => [p.FRIENDLY_NAME, p.NAME])));
        })
    });
  }

  async run(interaction) {
    const localizer = this.client.localizer.getLocalizer(interaction.guild);
    const providerName = interaction.options.getString('provider');
    const providerFriendlyName = ProviderManager.PROVIDER_FRIENDLY_NAMES[providerName];

    await this.client.ttsSettings.set(interaction.member, { provider: providerName });

    logger.info(`User ${interaction.member.displayName} in ${interaction.guild.name} has changed their provider to ${providerName}.`);
    return interaction.reply({ content: localizer.t('command.set.my.provider.success', { name: providerFriendlyName }), flags: MessageFlags.Ephemeral }
);
  }
}

module.exports = SetMyProviderCommand;
