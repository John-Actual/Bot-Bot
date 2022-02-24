const { SlashCommandBuilder } = require("@discordjs/builders");
const { token } = require('../config.json');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('kill')
    .setDescription('kill other players, lol')
    .addUserOption(option => option.setName('user').setDescription('player to be killed')),
    async execute(interaction) {
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        const user = interaction.options.getUser('user');

        const invincibleList = ['939317096943341598', '558086170983268353', '790601419333959692']

        if (!user) {
            if (interaction.member.id !== '558086170983268353') {
                interaction.reply({ content: 'Uh oh, I forgor to kill someone', ephemeral: true })
            }else if (interaction.member.id === '558086170983268353') {
                interaction.reply({content: 'ok.', ephemeral: true});
                await interaction.client.destroy();
                sleep(5000).then(() => {
                    interaction.client.login(token);
                    interaction.editReply('done.')
                })
            }
        }else if (user) {
            if (user.id === interaction.member.id) return interaction.reply('Suicide is bad :(')
            if (invincibleList.includes(user.id)) return interaction.reply('I cannot kill someone who is invulnerable')
            await interaction.reply(`<@!${interaction.member.id}> just killed <@!${user.id}>`)
            

        }
    }
}
        
    

