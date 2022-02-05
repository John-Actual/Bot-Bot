const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('stop')
    .setDescription('Stops playing music and clears queue'),
    async execute(interaction) {
        const client = interaction.client;
        const queue = client.player.getQueue(interaction.guild.id);

        if (!queue || !queue.playing) return interaction.reply({content:`There is no music currently playing!. ❌`, ephemeral: true});

        queue.destroy();

        interaction.reply(`Stopped!`);
    }
}