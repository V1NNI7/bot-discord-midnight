const {SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('leo')
        .setDescription('Xingue o leo só pelo meme'),
    async execute(interaction) {
        return interaction.reply('Vai tomar no cu <@!292345661825875978>!')
    }
}