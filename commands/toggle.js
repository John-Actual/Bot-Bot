const { SlashCommandBuilder } = require("@discordjs/builders");
const { Permissions } = require('discord.js');
const database = require("../database");
const l = new database.Database(database.lmaoModel)

module.exports = {
    data: new SlashCommandBuilder()
        .setName('toggle')
        .setDescription('Currently only used for toggling Bot Bot lmao moments, more functionality coming soon :)')
        .addBooleanOption(option => option.setName('boolean').setDescription('boolean').setRequired(true)),
    execute(interaction) {
        const boolean = interaction.options.getBoolean('boolean')

        if (interaction.member.permissions.has(Permissions.FLAGS.MANAGE_GUILD)) {
            l.find(interaction.guild.id, function (data) {
                if (!data.length) {
                    l.save(interaction.guild.id, boolean);
                    interaction.reply({content: 'done', ephemeral: true})
                }else {
                    l.update(interaction.guild.id, boolean);
                    interaction.reply({content: 'done', ephemeral: true})
                }
            })   
        }else {
            interaction.reply({content: 'Sorry, only people with the [Permissions.FLAGS.MANAGE_GUILD] permission can use this command :/', ephemeral: true});
        }
    }
}