const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Sends member avatar information')
        .addUserOption(option => option.setName('target').setDescription('You can put in a target to get avatar').setRequired(true)),
	async execute(interaction) {
		const member = interaction.options.getMember('target') 
		const nickname = member.nickname
        await interaction.reply(`Avatar of member **${nickname ? nickname : member.user.username}**: \n` + member.displayAvatarURL())
	},
};