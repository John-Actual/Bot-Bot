const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder, Message } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('queue')
    .setDescription('Returns queue of music playing, if any'),
    async execute(interaction) {
        const client = interaction.client;
        const queue = client.player.getQueue(interaction.guild.id);

        if (!queue || !queue.playing) return interaction.reply({content: 'There is no queue for me to display', ephemeral: true});

        const tracks = queue.tracks.map((track, i) => `**${i + 1}** - ${track.title} | ${track.author} (Requested by <@${track.requestedBy.id}>)`);

        const songs = queue.tracks.length;
        const nextSongs = songs > 5 ? `And **${songs - 5}** Other Song...` : `There are **${songs}** Songs in the List.`;

        const embed = new EmbedBuilder()
        .setColor('#ff0000')
        .setThumbnail(interaction.guild.iconURL({ size: 2048, dynamic: true }))
        .setTitle('Server Music List 😎')
        .setDescription(`Currently Playing: \`${queue.current.title}\`\n\n${tracks.slice(0, 5).join('\n')}\n\n${nextSongs }`)
        .setTimestamp();

        interaction.reply({ embeds: [embed], ephemeral: true });

        




    }
}