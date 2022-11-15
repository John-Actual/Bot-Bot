const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = {
    name: 'messageDelete',
    execute(message) {
		
        if (message.content.includes('@everyone') || message.content.includes('@here')) {
            const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('ghostPing')
					.setLabel('Info')
					.setStyle(ButtonStyle.Success),
			);
            var secondsSince = Math.round(((Date.now() - message.createdAt) / 1000) - 20);

            if (secondsSince < 16) {
                message.channel.send({content: `<@${message.author.id}> has some information for you:`, components: [row]})
            };
        }
    
    }

}  