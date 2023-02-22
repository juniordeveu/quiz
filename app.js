const port = process.env.port || 7777
const express = require( 'express' )
const path = require( 'path' )

/* import route */
const homePage = require( './routes/myapp.js' )
const getQuestion = require( './routes/myapp.js' )
/* end */


const app = express();

app.set( 'view engine', 'ejs' )
app.set( 'views', 'views' )
app.set ('port', port)

app.use( express.static( path.join(__dirname , 'public') ) )

app.use( homePage )
app.use( getQuestion )




app.listen( app.get('port') )