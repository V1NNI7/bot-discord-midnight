const { SlashCommandBuilder, channelMention } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Exibe informações sobre você'),
	async execute(interaction) {
		const messageEmbed = new MessageEmbed()
			.setColor('#f531c2')
			.setTitle('Suas informações')
			.setDescription(`Tag: ${interaction.user.tag}\nID: ${interaction.user.id}\nCriado em: ${interaction.user.createdAt}\nApenas você visualiza essa mensagem!`)
		return interaction.reply({ fetchReply: true, embeds: [messageEmbed], ephemeral: true });
	},
};