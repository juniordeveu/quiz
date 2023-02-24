const express = require( 'express' )
const { homePage , getQuestion, postAnswers, getTipFriend } = require( '../controller/myapp' )
const route = express.Router()
 

route.get('/question', getQuestion)
route.get('/help/friend', getTipFriend)
route.post( '/answer/:index', postAnswers )
route.get( '/', homePage )


module.exports = route