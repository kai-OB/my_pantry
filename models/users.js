const mongoose = require(mongoose)
const Schema = mongoose.Schema

const userSchema = new Schema({
  userName: { type: String, required: true } ,
  firstName: { type: String },
  lastName: { type: String },
  joinDate: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Users', userSchema)
