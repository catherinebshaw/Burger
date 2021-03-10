const express = require('express');
var exphbs = require('express-handlebars');

const app = express()

const PORT = process.env.PORT || 3000


app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')


//share any static html with brower
app.use( express.static('html'))

//accept incoming post requests
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.use('/api', require('./controllers/burger_controllers'))


//Listener============================================
app.listen(PORT, function(){
    console.log(`Serving content on http://localhost:${PORT}`)
})