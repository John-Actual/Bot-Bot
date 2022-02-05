const { SlashCommandBuilder } = require("@discordjs/builders");
const fs = require('fs');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('All Possible commands and descriptions in a list'),
    async execute(interaction) {
        var commands = []
        const commandFiles = fs.readdirSync('commands').filter(file => file.endsWith('.js'));

        for (const file of commandFiles) {
	        const command = require(`../commands/${file}`);
	        // Set a new item in the Collection
	        // With the key as the command name and the value as the exported module
	        commands.push({
                name: '/' + `${command.data.name}`,
                value: `${command.data.description}`
            })
        }
        
        var helpEmbed = {
            color: 0xD4E100,
            title: 'Bot Bot Help',
            description: 'All commands and their descriptions for Bot Bot',
            fields: commands,
            timestamp: new Date()

        };

        interaction.reply({ embeds: [helpEmbed], ephemeral: true })
    }
    
}