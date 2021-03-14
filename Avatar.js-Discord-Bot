module.exports = {
    name: 'avatar',
    description: 'Provides user with ceratin avatar as requested.',
    execute(message, args) {
        if (args[0]) {
            const user = message.mentions.user.first();
            if (!user) return message.reply('Please mention a user to acces their profile picture.');

            const otherIconEmbed = new Didcord.RichEmbed()
                .setTitle(`${user.username}'s Avatar!`)
                .setImage(user.displayAvatarURL);

            message.channel.send(otherIconEmbed).catch(err => console.log(err));            
            }

            const myIconEmbed = new Discord.RichEmbed()
            .setTitle(`${message.author.username}'s Avatar!`)
            .setImage(message.author.discplayAvatarURL);

        message.channel.send(myIconEmbed).catch(err => console.log(err));
    }
}
