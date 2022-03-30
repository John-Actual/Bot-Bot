const mongoose = require('mongoose')
const {databaseURL} = require('../config.json')
module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);

		if (!databaseURL) return;
        await mongoose.connect(databaseURL, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		}).then(() => {
			console.log('Connected to MongoDB!')
		}).catch(err => {
			console.log(err)
		})
	},
};