const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('comandos')
        .setDescription('Exibe todos os comandos'),
    async execute(interaction) {
        const embed = new MessageEmbed()

            .setColor('#0099ff')
            .setTitle('Comandos disponíveis')
            .setDescription('/avatar - Exibe seu avatar\n/kick - Kicka um usuário do servidor\n/leo - Xinga o Leo gratuitamente\n/limpar - Limpa de 1 a 99 mensagens\n/server - Exibe informações do servidor\n/user-info - Exibe suas informações de usuário (Visivel apenas para você)');

        return interaction.reply({ embeds: [embed]});
    }
}
