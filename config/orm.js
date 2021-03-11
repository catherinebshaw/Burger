const dbConnect = require('./connection')('burger_db', 'rootroot')


function selectAll(){
    return dbConnect.query('SELECT * FROM burgers') 
}

function insertOne(name){
    return dbConnect.query( `INSERT INTO burgers (name, devoured) VALUES (${name}, false);`) 
}


function updateOne(id ){
    return dbConnect.query( `UPDATE burgers SET devoured = true WHERE id= ${id};`  ) 
}





module.exports= {selectAll, insertOne, updateOne}

