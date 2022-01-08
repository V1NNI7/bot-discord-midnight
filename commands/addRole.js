const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageButton, MessageActionRow, Message } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cargoporreacao')
        .setDescription('Exibir cargos'),
    async execute(interaction) {
        const messageEmbed = new MessageEmbed()
            .setColor('#f531c2')
            .setTitle('Solicitar cargo')
            .setDescription('Reaja abaixo para ser liberado em nosso Discord!')

        const message = await interaction.reply({ fetchReply: true, embeds: [messageEmbed] })
        return message.react('✅');
    }
}