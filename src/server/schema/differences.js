const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');
const differencesSchema = new Schema({}, {strict: false})

differencesSchema.plugin(mongoosePaginate)

module.exports = differencesSchema
