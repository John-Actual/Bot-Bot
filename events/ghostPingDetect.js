const { MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: 'messageDelete',
    execute(message) {
		
        if (message.content.includes('@everyone') || message.content.includes('@here')) {
            const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('ghostPing')
					.setLabel('Info')
					.setStyle('SUCCESS'),
			);

            message.channel.send({content: `<@${message.author.id}> has some information for you:`, components: [row]})
        }
    
    }

}  