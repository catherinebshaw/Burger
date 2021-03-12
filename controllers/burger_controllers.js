const express = require('express');
const orm = require('../config/orm');
const router = express.Router();

// bring in reference to our MODEL (and ORM)
const burger = require('../models/burger'); 

// create routs and set up logic

//RETRIEVE existing burgers in the database and post on index 
router.get('/', async function(req, res) {
    const allBurgers = await burger.getAll();
    console.log(allBurgers)
    res.render("index", { allBurgers: allBurgers});
});
   
// CREATE a new burger in the database
router.post( '/api/burgers', async function( req, res){
    // let allBurgers = await burger.getAll();
    console.log( ` [POST /api/burgers]`, req.body)
    
    const newBurger = {

        name: req.body.name,
        devoured: 0
    }
    console.log(`[submit button pushed] is this working?`, newBurger.name, newBurger.devoured)

    //adding new burger to list of all burgers
    // allBurgers.push( newBurger ) 
    orm.insertOne(newBurger.name, newBurger.devoured)
    // location.reload()
    // res.redirect( 'main')
    res.render('index')

})

router.put('/api/burgers/:id',async function(req,res){
    const id = parseInt(req.params.id)
    const newDevoured = 
        {
            id: id,
            devoured: 1
        }
    console.log(newDevoured)

    //if devour button clicked change devour to "true"
    orm.updateOne(newDevoured)

})


module.exports = router;
