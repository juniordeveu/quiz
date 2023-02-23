const express = require( 'express' )
const { homePage , getQuestion, postAnswers } = require( '../controller/myapp' )
const route = express.Router()
 

route.get('/question', getQuestion)
route.post( '/answer/:index', postAnswers )
route.get( '/', homePage )


module.exports = route