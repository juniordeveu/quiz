const MyApp = require( '../models/myapp' )


let homePage = ( req, res ) => {
    res.render( 'index.ejs' )
    res.end();
} 
const dataGame = new  MyApp

let getQuestion = ( req, res ) => {

    
    if ( dataGame.goodAnswer === dataGame.questions.length ) {
        res.json( 
            { 
                winner: true 
            } 
        )
        console.log("winerr")
    } else if ( dataGame.isGameOver ) {
        res.json(
            {
                loser: true
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
   
} 

let postAnswers = ( req, res ) => {

    const { index } = req.params 
   
    const question = dataGame.questions[dataGame.goodAnswer]

    const isGoodAnswer = question.correctAns  ===  Number(index)

    if( dataGame.isGameOver ) {
        res.json(
            {
                loser: true
            }
        )
        console.log( "Przegrales koniec gry " )
        return;
    }

    if ( isGoodAnswer ) {

        dataGame.goodAnswer++
    
    } else {
        dataGame.isGameOver = true
    }

        res.json(
            {
                correct: isGoodAnswer,
                points: dataGame.goodAnswer
            }
        )

     
}

module.exports = {
    homePage,
    getQuestion,
    postAnswers
}