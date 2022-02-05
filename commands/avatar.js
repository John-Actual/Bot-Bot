const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Sends user avatar information')
        .addUserOption(option => option.setName('target').setDescription('You can put in a target to get avatar').setRequired(true)),
	async execute(interaction) {
		const user = interaction.options.getUser('target') 
        await interaction.reply(user.displayAvatarURL())
	},
};