const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Mostra informações sobre o servidor'),
	async execute(interaction) {
		return interaction.reply(`Nome do servidor: ${interaction.guild.name}\nTotal de Membros: ${interaction.guild.memberCount}`);
	},
};