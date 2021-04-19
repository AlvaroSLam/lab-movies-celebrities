const express = require("express");
const router = express.Router();
const CelebModel =  require('../models/Celebrity.model')

/* GET home page */
router.get("/celebrities/new", (req, res, next) => {
    res.render("celebrities/new-celebrity.hbs")
});

router.post('/celebrities/create', (req, res, next) =>{
    const {name, occupation, catchPhrase} = req.body
    let newCeleb = {name, occupation, catchPhrase}
    CelebModel.create(newCeleb)
        .then((result)=>{
        console.log('Celeb succesfully created', result)
        res.redirect('/celebrities')
        })
        .catch((error)=>{
        console.log('Something went wrong', error)
        res.redirect('/celebrities/new')
        })
        
})

router.get('/celebrities', (req, res) =>{
    CelebModel.find()
        .then((result)=>{
        res.render('celebrities/celebrities', {celeb: result})
        })
        .catch((error)=>{
        console.log(error)
        })
        
})
module.exports = router;