function showNextQuestion(){
    fetch('http://localhost:7777/question')
    .then( response => response.json() )
    .then( data => console.log( data ) )
    .catch( error => console.log("cos poszlo nie tak z fetch", error))
}
showNextQuestion()