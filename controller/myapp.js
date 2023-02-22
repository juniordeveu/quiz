const MyApp = require( '../models/myapp' )

let homePage = ( req, res ) => {
    res.render( 'index.ejs' )
    res.end();
} 


let getQuestion = ( req, res ) => {
    let dataGame = new  MyApp
 
    if ( dataGame.goodAnswer === dataGame.questions.length ) {
        res.json( 
            { 
                winner: true 
            } 
        )
    } else {
        const nextQuestion = dataGame.questions[dataGame.goodAnswer]
        const { question , answers } = nextQuestion
        res.json(
            {
                question , answers
            }
        )
    }
    res.end()
} 


module.exports = {
    homePage,
    getQuestion
}