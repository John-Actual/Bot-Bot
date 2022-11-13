module.exports = {
    name: 'ready',
    execute(client) {
        var activity = {name: 'THE BUTTON', type: 'PLAYING', url: 'https://www.youtube.com/watch?v=xYHRlc2b06U'}
	    client.user.setPresence({ activities: [{name: activity.name, type: activity.type, url: activity.url}] })
    }
}