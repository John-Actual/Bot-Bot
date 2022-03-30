const { SlashCommandBuilder } = require("@discordjs/builders");
const { Permissions } = require('discord.js');
const database = require("../database");
const l = database.lmaoModel

module.exports = {
    data: new SlashCommandBuilder()
        .setName('toggle')
        .setDescription('Currently only used for toggling Bot Bot lmao moments, more functionality coming soon :)')
        .addBooleanOption(option => option.setName('boolean').setDescription('boolean').setRequired(true)),
    async execute(interaction) {
        const boolean = interaction.options.getBoolean('boolean')

        if (interaction.member.permissions.has(Permissions.FLAGS.MANAGE_GUILD)) {
            
            l.find({key: interaction.guild.id}, async function(err, data) {

                if (!data.length) {
                    const doc = new l({
                        key: interaction.guild.id,
                        value: boolean
                    });

                    await doc.save()
                    interaction.reply({content: 'done.', ephemeral: true})
                }else {
                    await l.updateOne({key: interaction.guild.id}, {
                        value: boolean
                    })

                    interaction.reply({content: 'done.', ephemeral: true});
                }


            })
                  
        }else {
            interaction.reply({content: 'Sorry, only people with the [Permissions.FLAGS.MANAGE_GUILD] permission can use this command :/', ephemeral: true});
        }
    }
}