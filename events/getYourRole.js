module.exports = {
    name: 'messageReactionAdd',
    async execute(reaction, user){
        if(reaction.partial){
            try {
                await reaction.fetch()
            } catch (error) {
                console.error('Alguma coisa está errada quando tento puxar a reação!')
                return
            }
        }

        const msgID = '930148328354770954'
        const role = '930147337538506824'
        const role2 = '930147446821097552'
        const role3 = '930147504899633162'

        const member = reaction.message.guild.members.cache.get(user.id)

        if(reaction.message.id !== msgID) return
        else {
            if(reaction.emoji.name === "") {
                
            }
        }
    }
}