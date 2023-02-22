let goodAnswer = 0
let callToFriendUsed = false; 
let questionToTheCrowndUsed = false; 
let halfOnHalfUsed = false; 



class MyApp {
    goodAnswer = 0
    callToFriendUsed = false; 
    questionToTheCrowndUsed = false; 
    halfOnHalfUsed = false; 
    questions = [
        {
            question: 'Jaki jest najlepszy jezyk programowania',
            answers: [ 'Java', 'Basic', 'JavaSript', 'Python' ],
            correctAns: [ 2 ]
        },
        {
            question: 'Czy ta gra jest fajna',
            answers: [ 'Nie wiem', 'Oczywiscie ze tak', 'To nie jest gra', 'Nie' ],
            correctAns: [ 1 ]
        },
        {
            question: 'Czy papierosy sa szkodliwe ?',
            answers: [ 'Sa to cukierki   ', 'Tak ', 'Dodaja mocy ', 'Sa zdrowe ' ],
            correctAns: [ 1 ]
        }
    ]
}

module.exports =     MyApp
