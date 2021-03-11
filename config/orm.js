const dbConnect = require('./connection')('burger_db', 'rootroot')


function selectAll(){
    return dbConnect.query('SELECT * FROM burgers') 
}

function insertOne(name, devoured){
    return dbConnect.query( 'INSERT INTO burgers (name, devoured) VALUES (?, ?)', [name, devoured]) 
}


function updateOne(newDevoured){
    console.log("this is from the ORM", newDevoured.id, newDevoured.devoured)
    return dbConnect.query( 'UPDATE burgers SET devoured = ? WHERE id= ?', [newDevoured.devoured, newDevoured.id]) 
}





module.exports= {selectAll, insertOne, updateOne}

