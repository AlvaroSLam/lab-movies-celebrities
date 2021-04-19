const express = require("express");
const router = express.Router();
const CelebModel = require('../models/Celebrity.model')
const MovieModel = require('../models/Movie.model')

/* GET home page */
router.get("/movies/new", (req, res, next) => {
    CelebModel.find()
        .then((result) =>{
            res.render('movies/new-movie', {celeb: result})
        })
        .catch(err => console.log(err))
    
});

router.post('/movies/create', (req, res) =>{
    console.log(req.body)
})

module.exports = router;