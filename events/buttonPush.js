module.exports = {
    name: 'interactionCreate',
    execute(interaction) {

        if (!interaction.isButton()) return;

        if (interaction.customId == 'ghostPing') {
            interaction.deferUpdate();
            interaction.member.send(`Uhh ummm.... \nYou were ghost pinged.`);
        }
    
    }
}