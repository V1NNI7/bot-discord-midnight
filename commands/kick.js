const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('Selecione um membro e chute-o (mas não realmente).')
		.addUserOption(option => option.setName('target').setDescription('Membro a ser kickado')),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
		return interaction.reply({ content: `O ${interaction.user.username} tentou te expulsar <@!${user.id}>`, ephemeral: false });
	},
};