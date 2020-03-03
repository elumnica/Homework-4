//state const 
const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerQuestionElement = document.getElementById("answer-buttons")

//shuffles questions at start of game or when hit reset
let shuffleQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () =>{
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log("start")
    startButton.classList.add("hide")
    shuffleQuestions = questions.sort(()  => Math.random() -.5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffleQuestions[currentQuestionIndex])
}
function showQuestion(question){
    questionElement.inneratext = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
     })
}

function resetState() {
    //Clears the question, and re-renders next question (increment question count)
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffleQuestions.length > currentQuestionIndex + 1){
    nextButton.classList.remove("hide")
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

function selectAnswer(){

}

var currentQuestion = 0;
var questions = [
    {
        question: "1what is this?",
        answers: ["a thing", "some stuff", "our parent context"],
        answer: 2
    },
    {
        question: "2what is this?",
        answers: ["a thing", "some stuff", "our parent context"],
        answer: 2
    },
    {
        question: "3what is this?",
        answers: ["a thing", "some stuff", "our parent context"],
        answer: 2
    }
    ,
    {
        question: "4what is this?",
        answers: ["a thing", "some stuff", "our parent context"],
        answer: 2
    }]