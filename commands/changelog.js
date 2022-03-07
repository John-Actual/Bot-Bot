const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
var randomColor = function () {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`
}

var changelogEmbed = new MessageEmbed()
    .setColor(randomColor())
    .setTitle('Bot Bot Changelog')
    .setDescription('version 1.1.2')
    .addFields(
		{ name: 'Bug Fix' , value: 'Fixed feature where if no one is in vc Bot Bot continues to play music' },
        { name: 'Added ghost ping detection' , value: 'If message that mentions @everyone or @here is deleted, they are called out lmao' },
        { name: 'Hello Tyler' , value: 'You will read this (probably)' }
    )
    .setTimestamp();

module.exports = {
    data: new SlashCommandBuilder()
            .setName('changelog')
            .setDescription('Provides changelog info about Bot Bot'),
    async execute(interaction) {
        const channel = interaction.client.channels.cache.get('808443135881248838')
        if (interaction.member.id === '558086170983268353') {
            channel.send({embeds: [changelogEmbed]})
            interaction.reply({embeds: [changelogEmbed], ephemeral: true})
        }else {
            interaction.reply({embeds: [changelogEmbed], ephemeral: true})
        }
    }
}

//{ name: '' , value: '' },
