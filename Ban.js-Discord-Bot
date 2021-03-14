if (command === 'ban') {

    if (message.member.hasPermission('BAN_MEMBERS')) {
        const userBan = message.mentions.users.first();

        if (userBan) {
            var member = message.guild.member(userBan);

            if (member) {
                member.ban({
                    reason: ' you broke the rules.'
                }).them(() => {
                    message.reply(`${userBan.tag} was banned from the server.`)
                })
            } else {
                message.reply('that user is not in the server.');
            }
        } else {
            message.reply('you need to state a user to ban.')
        }
    } else {
        message.reply('Hey.. you cannot use that.')
    }
    
}
