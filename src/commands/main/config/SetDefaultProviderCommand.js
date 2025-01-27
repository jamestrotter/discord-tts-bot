const { SlashCommand } = require('@greencoast/discord.js-extended');
const { PermissionsBitField, SlashCommandBuilder } = require('discord.js');
const logger = require('@greencoast/logger');
const ProviderManager = require('../../../classes/tts/providers/ProviderManager');
const { oldChoiceListToNew } = require('../../../utils/upgrade-utils');


class SetDefaultProviderCommand extends SlashCommand {
  constructor(client) {
    super(client, {
      name: 'set_default_provider',
      description: 'Sets the provider to be used by the say command for the server by default.',
      emoji: ':pencil2:',
      group: 'config',
      guildOnly: true,
      userPermissions: [PermissionsBitField.Flags.ManageGuild],
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

    await this.client.ttsSettings.set(interaction.guild, { provider: providerName });

    logger.info(`${interaction.guild.name} has changed its default provider to ${providerName}.`);
    return interaction.reply({ content: localizer.t('command.set.default.provider.success', { name: providerFriendlyName }) });
  }
}

module.exports = SetDefaultProviderCommand;
