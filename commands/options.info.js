const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('options-info')
		.setDescription('Informações sobre as opções fornecidas.')
		.addStringOption(option => option.setName('input').setDescription('Retorno da entrada')),
	async execute(interaction) {
		const value = interaction.options.getString('input');
		if (value) return interaction.reply(`As opções são: \`${value}\``);
		return interaction.reply('Nenhuma opção foi fornecida!');
	},
};