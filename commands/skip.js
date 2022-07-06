const { SlashCommandBuilder } = require("@discordjs/builders");
module.exports = {
    data: new SlashCommandBuilder()
    .setName('skip')
    .setDescription('Skips music to next song'),
    async execute(interaction) {
        const client = interaction.client;
        const queue = client.player.getQueue(interaction.guild.id);
 
        if (!queue || !queue.playing) return interaction.reply({content:`There is no music currently playing!. ❌`, ephemeral: true});

        if (!queue.tracks[0]) return interaction.reply({ content: "I cannot skip to the next song when there is no song to skip to!. ❌", ephemeral: true });

        const success = queue.skip();

        return interaction.reply(success ? `Skipped song.` : {content:`Something went wrong ❌`, ephemeral: true});
        

    }
}