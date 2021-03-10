const orm = require('../config/orm.js');
//const { selectAll, insertOne, updateOne } =

//code that will call the ORM functions
// SelectAll, insertOne, updateOne
class Burger{ 
    constructor(id, name, devour) {
        this.id = id,
        this.name = name,
        this.devour = devour
    }

    getAll() {
        return orm.selectAll();
    }
}

module.exports = new Burger();



// app.get( '/api/burger', async function( req, res ){
//     const burgerList = await orm.selectAll()
//     console.log( `[GET /api/burger] burgerList`)
//     res.render('index', burgerList)
// })

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