const mongoose = require(mongoose)
const Schema = mongoose.Schema

const pantrySchema = new Schema({
  name: { type: String, required: true },
  joinDate: { type: Date, default: Date.now },
  location: { type: String, default: }
})

module.exports = mongoose.model('Pantries', pantrySchema)
