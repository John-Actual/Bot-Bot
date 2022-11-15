const { SlashCommandBuilder } = require("@discordjs/builders");
const { Client } = require("craiyon");
const { AttachmentBuilder } = require('discord.js');
const sharp = require('sharp');

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
        let rawResult = result.images[1].asBuffer();
        let processedResult = await sharp(rawResult)
        .sharpen({sigma: 20})
        .toBuffer();
        let attachment = new AttachmentBuilder(processedResult, {name: `${prompt}.png`});
    
        interaction.editReply({
            content: `Generated images based on this prompt: **${prompt}** -> <@!${interaction.member.id}>`,
            files: [attachment]
        })
        

    }
}


