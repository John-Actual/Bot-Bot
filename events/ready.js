const mongoose = require('mongoose');
const { database } = require('../config.json')
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);

		/*if (!database) return;
		mongoose.connect(database, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		}).then(() => {
			console.log('Connected to MongoDB!')
		}).catch(err => {
			console.log(err)
		})*/
	},
};