const mongoose = require('mongoose');
const { databaseURL } = require('./config.json')

//all needed models in one place
var lmaoModel = mongoose.model('LmaoMoment', {
    key: {type: String},
    value: {type: Object}
});

//database class
class Database {
    constructor(model) {
        this.model = model
    }

    


    static async connect() {
        if (!databaseURL) return;
        await mongoose.connect(databaseURL, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		}).then(() => {
			console.log('Connected to MongoDB!')
		}).catch(err => {
			console.log(err)
		})
    }

    async save(key, value) {

        const doc = new this.model({
            key: key,
            value: value
        });

        await doc.save();
    }

    find(key, callbackData) {

        this.model.find({key: key}).then(data => {
            callbackData(data)
        });
    }

    async update(key, newValue) {

        await this.model.updateOne({key: key}, {
            value: newValue
        });
    }

    async deleteOne(key) {

        await this.model.deleteOne({key: key})
    }

}

module.exports = {
    Database: Database,
    lmaoModel: lmaoModel
}
