const express = require('express');
const orm = require('../config/orm');
const router = express.Router();

// bring in reference to our MODEL (and ORM)
const Burger = require('../models/burger'); 

// create routs and set up logic

//RETRIEVE existing burgers in the database and post on index 
router.get('/', async function(req, res) {
    const allBurgers = await Burger.getAll();
    console.log(allBurgers)
    res.render("index", { allBurgers: allBurgers});
});

// CREATE a new burger in the database
router.post( '/burgers', async function( req, res){
    console.log( ` [POST /api/burgers]`, req.body)
    
    const newBurger = {
        name: req.body,
    }
    console.log(`[submit button pushed] Now ${allBurgers.length} burgers, andding`, newBurger)
    //adding new burger to list of all burgers
    allBurgers.push( newBurger ) 
    const result = await orm.insertOne(newBurger.name)
    res.send(result)
    res.render('index')

})

router.put('/burgers/:id',async function(req,res){

    //if devour button clicked change devour to "true"
    const result = await orm.updateOne(id)

})


module.exports = router;
