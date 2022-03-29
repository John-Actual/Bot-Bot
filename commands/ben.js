const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ben')
        .setDescription('Talking Ben'),
    async execute(interaction) {
        const ben = [
            'https://tenor.com/view/dog-saying-no-no-ben-no-phone-call-no-call-no-gif-24938149',
            'https://tenor.com/view/ben-yes-yes-fthememer-phone-call-yes-call-yes-gif-24938145',
            'https://tenor.com/view/ben-laughs-ben-laughing-ben-meme-fthememer-ben-phone-call-gif-24938219',
            'https://tenor.com/view/dog-hang-up-the-call-ben-hang-up-ben-hangsup-ben-call-meme-ben-phone-call-meme-gif-24938152',
            'https://tenor.com/view/ugh-ben-gif-25012261'
        ]
        
        var i = Math.round(Math.random() * ben.length);

        await interaction.reply({content: ben[i]})
    }
    
    
}