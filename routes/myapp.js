const express = require( 'express' )
const { homePage , getQuestion } = require( '../controller/myapp' )
const route = express.Router()
 

route.get('/question', getQuestion)
route.get( '/', homePage )


module.exports = route