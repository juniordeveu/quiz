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
        console.log("koniec gry")
        return
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
       
        return
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

let getTipFriend = ( req, res ) => {
    if( dataGame.callToFriendUsed ) return res.json(
                                                    {
                                                        text: 'To koło zostało już wykorzystane'
                                                    }
                                                   )
    const doesFriendKnowAnswer = Math.random < .5
    const question = dataGame.questions[dataGame.goodAnswer]
    res.json(
        {
            text: doesFriendKnowAnswer? `Hmm wydaje mi sie ze znam odpowiedz ${ question.answers[question.correctAns] }` : `Hmmm.... nie wiem `
        }
    )
}

module.exports = {
    homePage,
    getQuestion,
    postAnswers,
    getTipFriend
}