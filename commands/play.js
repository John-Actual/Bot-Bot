const { SlashCommandBuilder } = require("@discordjs/builders");
const { QueryType } = require('discord-player');
const ytdl = require('ytdl-core');
const ytsr = require('yt-search');
const { Message } = require("discord.js");



module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('Play music over voice channel')
        .addStringOption(option => option.setName('searchterm').setDescription('url or Search term').setRequired(true)),
    async execute(interaction) {
      const searchterm = interaction.options.getString('searchterm');
      const client = interaction.client;
      const res = await client.player.search(searchterm, {
        requestedBy: interaction.member,
        searchEngine: QueryType.AUTO
      });

      if (!res || !res.tracks.length) return interaction.reply({content: 'No results found', ephemeral: true});

      const queue = await client.player.createQueue(interaction.guild, {
        metadata: interaction.channel
      });

      try {
        if (!queue.connection) await queue.connect(interaction.member.voice.channel);
      } catch {
        await client.player.deleteQueue(interaction.guild.id);
        return interaction.reply({content: 'I am unable to join the audio channel', ephemeral: true});
      };

      await interaction.reply({content: `Your ${res.playlist ? 'Playlist': 'Track'} is Loading...`, ephemeral: true});

      res.playlist ? queue.addTracks(res.tracks) : queue.addTrack(res.tracks[0]);

      interaction.editReply({content: `added **${res.playlist ? res.playlist.title : res.tracks[0].title}** to queue`, ephemeral: true});

      if (!queue.playing) await queue.play();
    },
     
}