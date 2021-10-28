const mongoose = require(mongoose)
const Schema = mongoose.Schema

const postSchema = new Schema({
  author: { type: String, required: true },
  pantry: { type: String, required: true },
  body: { type: String, required: true },
  date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Posts', postSchema)
