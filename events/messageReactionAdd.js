module.exports = {
    name: 'messageReactionAdd',
    async execute(reaction, user) {
        if (reaction.partial) {
            try {
                await reaction.fetch()
            } catch (error) {
                console.error('Alguma coisa está errada quando tento puxar a reação!')
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
    }
}