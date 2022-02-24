module.exports = {
    name: 'ready',
    execute(client) {
        var activity = {name: 'E', type: 'STREAMING', url: 'https://www.youtube.com/watch?v=HUmDtLmn9dk'}
	    client.user.setPresence({ activities: [{name: activity.name, type: activity.type, url: activity.url}] })
    }
}