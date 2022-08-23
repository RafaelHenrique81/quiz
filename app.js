const correctAnswers = [ 'C', 'D', 'B', 'A']
const form = document.querySelector('.quiz-form')
const result = document.querySelector('#result')
const intro = document.querySelector('.intro')
const quiz = document.querySelector('.quiz')

form.addEventListener('submit', event =>{
    event.preventDefault()

    let score = 0
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value
    ]

    userAnswers.forEach((userAnswer, index) => {
        if (userAnswer === correctAnswers[index]){
            score += 25
        }
    })

scrollTo(0, 0)

let showScore = 0

    const scoreAnimation = setInterval(() => {
        showScore ++

        result.textContent =`Sua pontuação foi de ${showScore}%`
        form.textContent = ''

        if(showScore === score){
            clearInterval(scoreAnimation)
        }

     },15)
     
})