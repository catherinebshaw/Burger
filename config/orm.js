const dbConnect = require('./connection')('burger_db', 'rootroot')


function selectAll(){
    return dbConnect.query('SELECT * FROM burgers WHERE devoured = false') 
}

function insertOne(name ){
    return dbConnect.query( `INSERT INTO burgers (name, devoured) VALUES (${name}, false);`) 
}


function updateOne(){
    return dbConnect.query( 'UPDATE burgers SET devoured = true ; ' ) 
}





module.exports= {selectAll, insertOne, updateOne}

