module.exports = {
    name: 'interactionCreate',
    execute(interaction) {

        if (!interaction.isButton()) return;

        if (interaction.customId == 'ghostPing') {
            interaction.deferUpdate();
            interaction.member.send(`This message was most like a ghost ping, but there are rare occasions where messages are deleted by other users for other reasons.`);
        }
    
    }
}