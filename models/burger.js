const orm = require('../config/orm.js');

var burger={
    getAll:async function(){
        return await orm.selectAll()
    },
    getAdd: async function(name){
        return await orm.insertOne(name)
    },
    getDevoured: async function(name){
        return await orm.updateOne(name)
    }
}

module.exports =  burger;





// app.post( '/api/burger', async function( req, res ){
//     const burgerInfo = req.body
//     let name = burgerInfo.name
//     const result = await orm.insertOne( name )
//     console.log( `[POST /api/quotes] burgerInfo.result`, burgerInfo, result )
    
//     // if we are using RESTful javascript call we can send JSON data back
//     // res.send( { message: "Quote sent!"} )
//     // if we are doing a FORM POST direclty, we need to redirect to the index page.
//     res.redirect( '/index.html' )
// })

// app.post( '/api/burger/devoured', async function (req, res){
//     //onClick moves boolean from false to true and moves burger to devoured

// }