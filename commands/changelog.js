const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const changelogEmbed = new MessageEmbed()
    .setColor('#7b1fc2')
    .setTitle('Bot Bot Changelog')
    .setDescription('version 1.1.1')
    .addFields(
		{ name: '/suggest' , value: 'Suggest a feature' },
        { name: 'Updated Commands' , value: 'I recommend you use /help tbh' },
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
