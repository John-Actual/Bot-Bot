const mongoose = require('mongoose');
const { databaseURL } = require('./config.json')

//all needed models in one place
var lmaoModel = mongoose.model('LmaoMoment', {
    key: {type: String},
    value: {type: Boolean}
});

module.exports = {
    lmaoModel: lmaoModel
}
