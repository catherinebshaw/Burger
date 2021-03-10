const express = require('express');
const router = express.Router();

// bring in reference to our MODEL (and ORM)
const Burger = require('../models/burger'); 
// Every Route to this file is prefaced with /api
router.get('/', async function(req, res) {
    const allBurgers = await Burger.getAll();
    res.render("index", { allBurgers: allBurgers});
});
//Routes===================================
router.get( '/burgers', async function( req, res){
    const burgerList = await 
    res.send(burgerList)
})

router.post( '/burgers', function( req, res){
    const burgerList = req.body
    burgerList.id = burgerList.length
    console.log( ` [POST /api/burgers] burgerList`, burgerList)
    burgerList.push( burgers) 
})


module.exports = router;
