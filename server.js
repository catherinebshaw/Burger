const express = require('express');
var exphbs = require('express-handlebars');

const app = express()

const PORT = process.env.PORT || 3000


app.engine('handlebars', exphbs())
// do I need to set the handlbars default layout to main
//app.enging('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars')


//share any static html with brower
app.use( express.static('public'))

//accept incoming post requests
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.use('/', require('./controllers/burger_controllers'))


//Listener============================================
app.listen(PORT, function(){
    console.log(`Serving content on http://localhost:${PORT}`)
})