const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('suggest')
        .setDescription('Suggest a new bot bot feature')
        .addStringOption(option => option.setName('suggestion').setDescription('value to submit').setRequired(true)),
    async execute(interaction) {
        const suggestion = interaction.options.getString('suggestion');
        const channel = interaction.client.channels.cache.get('944667288848723988')
        const embed = new MessageEmbed()
            .setColor(interaction.member.displayHexColor)
            .setTitle(`${interaction.member.user.username}'s Suggestion`)
            .setThumbnail(interaction.member.user.displayAvatarURL())
            .addField(`**${suggestion}**`, '\u200B')
        
        channel.send({embeds: [embed]});
        interaction.reply({content: `Suggestion carefully recorded, you can view it here: \nhttps://discord.gg/WhZXsD8cWW`, ephemeral: true});
    }
    
}