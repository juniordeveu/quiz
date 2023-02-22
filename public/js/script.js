const question = document.querySelector('#question')
const answer1 = document.querySelector('#answer1')
const answer2 = document.querySelector('#answer2')
const answer3 = document.querySelector('#answer3')
const answer4 = document.querySelector('#answer4')


function fillQuestionElements( data ){
    const createQuestion = document.createTextNode( data.question )
    question.insertBefore( createQuestion, question.firstChild )
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