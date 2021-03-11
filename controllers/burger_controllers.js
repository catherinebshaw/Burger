const express = require('express');
const orm = require('../../utor-tor-fsf-ft-01-2021-u-c/13-MVC/01-Activities/17-CatsApp/Solved/config/orm');
const router = express.Router();

// bring in reference to our MODEL (and ORM)
const Burger = require('../models/burger'); 

// create routs and set up logic
router.get('/', async function(req, res) {
    const allBurgers = await Burger.getAll();
    console.log(allBurgers)
    res.render("index", { allBurgers: allBurgers});
});
//Routes===================================
router.get( '/burgers', async function( req, res){
    const burgerList = await 
    res.send(burgerList)
})

router.post( '/burgers', async function( req, res){
    //refresh array of burgers 
    const allBurgers = await Burger.getAll();
    
    //register new burger info as captured on index page set devour to false as default
    const newBurger = {
        id: allBurgers.length,
        name: req.body,
        devour: false,
    }
    console.log( ` [POST /api/burgers] list of burgers`, allBurgers)
    console.log(`[submit button pushed] Here is the new burger`, newBurger)
    
    //adding new burger to list of all burgers
    allBurgers.push( newBurger) 
    const result = await orm.insertOne( id, name, devour)
    res.send(newBurger)


})

router.put('/burgers/:id',async function(req,res){

})


module.exports = router;
