// array of all my questions, answers, and correct answers
const questions = [
    {
        questionText:"What does HTML stand for?",
        answers:["1. Hyper Text Makeup Language", "2. Hot Tall Mom Legs", "3. High Times Man Laughs", "4. HyperText Markup Language"],
        answer: "4. HyperText Markup Language",
    },
    {
        questionText:"What does CSS stand for?",
        answers:["1. Cool Steves Stand","2. Cascading Style Sheets", "3. Cascading Sheet Styles", "4. Cyber Security Software"],
        answer: "2. Cascading Style Sheets",
    },
    {
        questionText:"What is a software developer?",
        answers:["1. A person who builds houses made of very soft wood.", "2. That profession doesn't exist.",  "3. A person who creates computer software.", "4. A person who sets up wifi routers."],
        answer:"3. A person who creates computer software.",
    },
    {
        questionText: "Whats the difference between “ == “ and “ === “ operators.",
        answers:["1. == is used to compare values whereas, === is used to compare both value and types.", "2. There is no difference.", " 3. == is used to compare both value and types, === is used to compare values whereas.", "4. I like ice cream."],
        answer: "1. == is used to compare values whereas, === is used to compare both value and types.",
    },
    {
        questionText: "In JavaScript, whats an array?",
        answers:["1. Multiple variables in one element.", "2.  A single variable that is used to store different elements.", "3. A type of function.", "4. A element."],
        answer: "2.  A single variable that is used to store different elements.",
    },
];

// variables declared
const startCard = document.querySelector("#start");
const questionCard = document.querySelector("#questions");
const scoreCard = document.querySelector("#score");
const leaderboardCard = document.querySelector("#leaderboard");
const result = document.querySelector("#result")
const resultText = document.querySelector("result-text")

// function for cards to hide
function hideCards() {
    startCard.setAttribute("hidden", true);
    questionCard.setAttribute("hidden", true);
    scoreCard.setAttribute("hidden", true);
    leaderboardCard.setAttribute("hidden", true);
}

// hides the result
function hideResultText() {
    result.getElementsByClassName.display = "none"
}

// global variables
var intervalID;
var time;
var currentQuestion;

document.querySelector("#start-button").addEventListener("click", startQuiz);

function startQuiz() {
    //hides visible cards, and shows the questions
    hideCards();
    questionCard.removeAttribute("hidden");

    //assign 0 to currentQuestion when start button is clicked, then display the current question on the page
    currentQuestion = 0;
    displayQuestion();

    //set total time depending on number of questions
    time = questions.length * 10;

    //executes function "countdown" every 1000ms to update time and display on page
    intervalID = setInterval(countdown, 1000);

    //invoke displayTime here to ensure time appears on the page as soon as the start button is clicked, not after 1 second
    displayTime();
}

// reduce time by 1sec and display a new value/time, if you run out of time the quiz ends
function countdown() {
    time--;
    displayTime();
    if (time < 1) {
        endQuiz();
    }
}

//display time on page
const timeDisplay = document.querySelector("#time");
function displayTime() {
    timeDisplay.textContent = time;
}

//display the question and answer options for the current question
function displayQuestion() {
    let question = questions[currentQuestion];
    let answers = question.answers;

    let h2QuestionElement = document.querySelector("#question-text");
    h2QuestionElement.textContent = question.questionText;

    for (let i = 0; i < answers.length; i++) {
        let answer = answers[i];
        let answerButton = document.querySelector("#answer" + i);
        answerButton.textContent = answer;
    }
}

document.querySelector("#question-answers").addEventListener("click", checkAnswer);

function checkAnswer(eventObject) {
    let answerButton = eventObject.target;
    result.style.display = "block";
    if (answerIsCorrect(answerButton)) {
        resultText.textContent = "Correct!";
        setTimeout(hideResultText, 1000);
    } else {
        resultText.textContent = "Incorrect!";
        setTimeout(hideResultText, 1000);
        if (time >= 10) {
            time = time - 10;
            displayTime();
        } else {
        time = 0;
        displayTime();
        endQuiz();
        }
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function answerIsCorrect(answerButton) {
    return answerButton.textContent === questions[currentQuestion].answer;
}

function endQuiz() {
    clearInterval(intervalID);
    hideCards();
}