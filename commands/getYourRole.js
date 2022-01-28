const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cargos')
        .setDescription('Exibe todos os cargos disponiveis'),
    async execute(interaction) {
        const messageEmbed = new MessageEmbed()
            .setColor('#f531c2')
            .setTitle('Cargos disponíveis')
            .setAuthor({ name: 'Midnight Bot', iconURL: 'https://cdn.discordapp.com/avatars/928614314405945345/2fe085710d17888d7656410b9075bbf9.png?size=64' })
            .setDescription('Selecione abaixo nas reações os cargos!\n\nAlguns canais te irá te liberar acessos para salas especifícas!')
            .addField('Cargos disponíveis', ':magic_wand:  - Cargo 1\n:electric_plug: - Cargo 2\n⛵ - Cargo 3')
        const message = await interaction.reply({ fetchReply: true, embeds: [messageEmbed] })
            message.react('⛵')
            message.react('🏎')
        return message.react('🔫')
    }
}

