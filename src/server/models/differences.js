const mongoose = require('../plugins/mongoose')
const differencesSchema = require('../schema/differences.js')
const Differences = mongoose.model('Source', differencesSchema)

module.exports = Differences
