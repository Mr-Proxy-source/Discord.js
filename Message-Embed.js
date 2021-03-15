    if(command === 'ping') {
        const testEmbed = new Discord.RichEmbed()
        .setColor(0x2eb2c7)
        .setTitle('Pong')
        .setDescription('pong')
        .setAuthor(message.author.username)
        .setThumbnail(message.author.avatarURL)
        .setFooter('© Developer: pong#0001 ')
        .setTimestamp()
        try{
            message.author.sendEmbed(testEmbed);
        } catch {
            message.reply(`Sorry <@${message.author.username}> I cannot message you, make sure your dms are turned to public.`)
        }
    }
