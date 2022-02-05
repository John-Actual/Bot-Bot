module.exports = {
    name: 'ready',
    execute(client) {
        var activity = {name: '[SPOTIFY]', type: 'STREAMING', url: 'https://www.youtube.com/watch?v=ofMVDTtZZ5E'}
	    client.user.setPresence({ activities: [{name: activity.name, type: activity.type, url: activity.url}] })
    }
}