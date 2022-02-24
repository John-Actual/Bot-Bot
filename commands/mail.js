const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mail')
        .setDescription('Sends user a Dm')
        .addUserOption(option => option.setName('user').setDescription('input user').setRequired(true))
        .addStringOption(option => option.setName('msg').setDescription('message to ping').setRequired(true)),
    async execute(interaction) {
        const user = interaction.options.getUser('user');
        const msg = interaction.options.getString('msg');

        user.send(`**${interaction.member.displayName}** wanted to send you this message from **${interaction.guild.name}: \n${msg}**`);
        await interaction.reply({ content: 'ok, message sent.', ephemeral: true });
    }
}