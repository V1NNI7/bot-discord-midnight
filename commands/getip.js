const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('meuip')
        .setDescription('Pegar seu IP!'),
    async execute(interaction) {

        var os = require('os');
        var ifaces = os.networkInterfaces();

        Object.keys(ifaces).forEach(function (ifname) {
            var alias = 0;
            ifaces[ifname].forEach(function (iface) {
                if ('IPv4' !== iface.family || iface.internal !== false) {
                    // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
                    return;
                }

                if (alias >= 1) {
                    // this single interface has multiple ipv4 addresses
                    return interaction.reply({ content: `Seu IP local é ${ifname + ':' + alias, iface.address}`, ephemeral: true })
                } else {
                    // this interface has only one ipv4 adress
                    return interaction.reply({ content: `Seu IP local é ${ifname, iface.address}`, ephemeral: true })
                }
                ++alias;
            });
        });
    }
}