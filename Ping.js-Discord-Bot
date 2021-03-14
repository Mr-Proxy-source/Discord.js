module.exports = {
    name: 'myping',
    description: 'Shows user the bots ping!',
    execute(message, args) {
        message.channel.send('Finding bots ping...').then(msg => {
            const ping = msg.createdTimestamp - message.createdTimestamp;
            msg.edit(`My ping is ${ping}ms`);
        })
    }
}
