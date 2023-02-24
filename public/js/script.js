

const question = document.querySelector('#question')
const answer1 = document.querySelector('#answer1')
const answer2 = document.querySelector('#answer2')
const answer3 = document.querySelector('#answer3')
const answer4 = document.querySelector('#answer4')


function fillQuestionElements( data ){
    const createQuestion = data.question 
        question.innerText = createQuestion

    const containerQuestion = document.querySelector('#container-question')
    const h2 = document.querySelector('h2')

    if( data.winner === true ){
        containerQuestion.style.display = 'none'
        return
    }
    if( data.loser === true ){
        h2.innerText = "Przegrales"
        containerQuestion.style.display = 'none'
        return
    }


    for( let key in data.answers ) {
        const answerEl = document.querySelector( `#answer${ Number( key ) + 1 }` )
        answerEl.innerText = data.answers[ key ]
    }

}

function showNextQuestion(){
    fetch('http://localhost:7777/question')
    .then( response => response.json() )
    .then( data => fillQuestionElements( data ) )
    .catch( error => console.log("cos poszlo nie tak z fetch", error))
}
showNextQuestion()

const goodAnswerSpan = document.querySelector('#good-answer')


function handleAnswerFeedBack( data ){
    goodAnswerSpan.innerText = data.points
    showNextQuestion()
}

function sendAnswer( indexAnswer ) {
    fetch( `/answer/${indexAnswer}`, { method: 'POST' } )
    .then( response => response.json() )
    .then ( data => {
        handleAnswerFeedBack( data )
    } ) 
}

const buttons = document.querySelectorAll('.answer-btn')
for(let button of buttons){
    button.addEventListener( 'click', ( event ) => {
        let answerIndex = event.target.dataset.answer
        sendAnswer( answerIndex )
    } )
}


/* tip */

const getBtnCallToFriend = document.querySelector('#callToFriend')

function callToFriend() {
    fetch(  '/help/friend', { method: 'GET' })
    .then( response => response.json() )
    .then( data => console.log( data ) )
}

getBtnCallToFriend.addEventListener( 'click', callToFriend)