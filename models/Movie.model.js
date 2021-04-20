const mongoose =  require('mongoose')

const MovieSchema =  new mongoose.Schema({
    title: String,
    genre: String,
    plot: String,
    cast: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'celebritie'
    }],
})

let MovieModel =  mongoose.model('movie', MovieSchema)

module.exports = MovieModel;