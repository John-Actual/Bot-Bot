module.exports = {
    name: 'ready',
    execute(client) {
        var activity = {name: 'Charles Fossil House Camera', type: 'STREAMING', url: 'https://www.youtube.com/watch?v=xYHRlc2b06U'}
	    client.user.setPresence({ activities: [{name: activity.name, type: activity.type, url: activity.url}] })
    }
}