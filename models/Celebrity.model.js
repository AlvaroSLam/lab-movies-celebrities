const mongoose =  require('mongoose')

let CelebSchema =  new mongoose.Schema({
    name: String,
    occupation: String,
    catchPhrase: String
})

let CelebModel = mongoose.model('celebritie', CelebSchema)

module.exports = CelebModel