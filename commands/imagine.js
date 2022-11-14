const { SlashCommandBuilder } = require("@discordjs/builders");
const { Client } = require("craiyon");
const { AttachmentBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('imagine')
    .setDescription('generate images based on a prompt')
    .addStringOption(option => option.setName('prompt').setDescription('anything that can be imagined can become real').setRequired(true)),
    async execute(interaction) {
        const crayion = new Client;
        const prompt = interaction.options.getString('prompt');

        interaction.deferReply();
        const result = await crayion.generate({
            prompt: prompt,
        });
        let buffer = result.images[0].asBuffer();
        let attachment = new AttachmentBuilder(buffer, {name: `${prompt}.png`});
    
        interaction.editReply({
            content: `Generated images based on this prompt: **${prompt}** -> <@!${interaction.member.id}>`,
            files: [attachment]
        })
        

    }
}


