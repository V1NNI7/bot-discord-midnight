const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user-info')
		.setDescription('Exibe informações sobre você'),
	async execute(interaction) {
		return interaction.reply(`Seu nome de usuário: ${interaction.user.username}\nSeu ID: ${interaction.user.id}`);
	},
};