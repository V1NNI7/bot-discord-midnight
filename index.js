const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { token, guildId } = require('./config.json');

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.data.name, command);
}

client.once('ready', () => {
  console.log('Aplicação pronta!');
});


// Cargo por reação
client.on('messageReactionAdd', async (reaction, user) => {
  if (reaction.partial) {
    try {
      await reaction.fetch()
    } catch (error) {
      console.error('Alguma coisa está errada quando tento puxara a reação!')
      return
    }
  }

  const msgID = '929164101635178577';
  const role = '778281616761552966';

  const member = reaction.message.guild.members.cache.get(user.id)

  if (reaction.message.id !== msgID) return
  else {
    if (reaction.emoji.name === "✅") {
      if (member.roles.cache.has()) return
      else {
        member.roles.add(role)
      }
    }
  }

});

// Interações
client.on('interactionCreate', async interaction => {

  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    return interaction.reply({ content: 'Ocorreu um erro ao executar este comando!', ephemeral: true });
  }
});

client.on('guildMemberAdd', member => {

  console.log('Um novo usuário entrou no servidor');

  const channel = member.guild.channels.cache.find(channel => channel.id === "624673218283831318")
  if (!channel) return;

  const joinembed = new Discord.MessageEmbed()
    .setTitle(`A new member just arrived!`)
    .setDescription(`Welcome ${member} we hope you enjoy your stay here!`)
    .setColor("#FF0000")

  channel.send(joinembed)
});

client.login(token);