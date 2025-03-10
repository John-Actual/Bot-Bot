const fs = require('fs');
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const { Player } = require("discord-player");



// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildScheduledEvents, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.MessageContent] });

client.config = require('./audioConfig.js');
client.player = new Player(client, client.config.opt.discordPlayer);
const player = client.player

//find and store command files
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}


//find and execute event files
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}

//audio player events - they just don't fit in the event handler :|
player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    queue.metadata.send(`🎵 Music started playing: **${track.title}** -> Channel: **${queue.connection.channel.name}** --> Requested by: **<@${track.requestedBy.id}>**`);
});

player.on('error', (queue, error) => {
    queue.metadata.send(`There was a problem with the song queue :/`);
	console.log(error.message);
});

player.on('connectionError', (queue, error) => {
	queue.metadata.send('I\'m having trouble connecting :/')
    console.log(`${error.message}`);
});

player.on('channelEmpty', (queue) => {
    queue.destroy();
});


// Login to Discord with your client's token
client.login(token);