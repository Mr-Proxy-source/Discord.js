bot.on('ready', () => { 
    console.log('You bot is now online.');
    bot.user.setActivity('𝗛𝗘𝗥𝗘 𝗬𝗢𝗨𝗥 𝗦𝗧𝗔𝗧𝗨𝗦', { type: "Playing"})
    .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
    .catch(console.error);
    bot.user.setStatus('dnd')
    .then(console.log)
    .catch(console.error);
})
