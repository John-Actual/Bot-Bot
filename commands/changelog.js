const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const changelogEmbed = new MessageEmbed()
    .setColor('#7b1fc2')
    .setTitle('Bot Bot Changelog')
    .setDescription('version 1.0.0')
    .addFields(
		{ name: 'New clean look', value: 'Revamped with some future plans prepared' },
		{ name: 'More to come', value: 'Not every command is in yet, use /help to see every implemented command' },
        {name: 'Music commands', value: 'another music update, should be working good now.'},
        { name: 'Return of lmao moment??!!??', value: 'soon.' },
        { name: 'Probability of you reading this: 1', value: 'Ratio + cope + mald you can\'t un read it lmO' },
        {name: 'Want to suggest a feature', value: 'Send a message to John Actual#3198'}
    )
    .setTimestamp();

module.exports = {
    data: new SlashCommandBuilder()
            .setName('changelog')
            .setDescription('Provides changelog info about Bot Bot'),
    async execute(interaction) {
        if (interaction.member.id === '558086170983268353') {
            interaction.reply({embeds: [changelogEmbed]});
        }else {
            interaction.reply({embeds: [changelogEmbed], ephemeral: true})
        }
    }
}
