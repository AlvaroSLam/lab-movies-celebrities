const express = require("express");
const router = express.Router();
const CelebModel = require('../models/Celebrity.model')
const MovieModel = require('../models/Movie.model')


router.get("/movies/new", (req, res, next) => {
    CelebModel.find()
        .then((result) =>{
            res.render('movies/new-movie', {celeb: result})
        })
        .catch(err => console.log(err))
    
});

router.post('/movies/create', (req, res) =>{
    const {cast, title, genre, plot} = req.body
    let newMovie = {cast, title, genre, plot}

    MovieModel.create(newMovie)
        .then((result)=>{
        console.log('Data inserted correctly', result)
        res.redirect('/movies')
        })
        .catch((error)=>{
        console.log('Something strange happened', error)
        })
        
})

router.get('/movies', (req, res) => {
    MovieModel.find()
        .then((result)=>{
         res.render('movies/movies', {movies: result})
        })
        .catch((error)=>{
        console.log(error)
        })
        
})

router.get('/movies/:id', (req, res) =>{
    let movieId =  req.params.id
    
    MovieModel.findById(movieId)
    .populate('cast')
        .then((result)=>{
        console.log('Este es el resultado --> ', result)
        res.render('movies/movie-details', {movie: result})
        })
        .catch((error)=>{
        console.log(error)
        })
        
})

router.get('/movies/:id/delete', (req, res) =>{
    let movieId =  req.params.id

    MovieModel.findByIdAndDelete(movieId)
        .then((result)=>{
        console.log('Deleted succesfully from the database', result)
        res.redirect('/movies')
        })
        .catch((error)=>{
        console.log(error)
        })
        
})

module.exports = router;