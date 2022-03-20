// array of all my questions, answers, and correct answers
var questions = [
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
var startCard = document.querySelector("#start");
var questionCard = document.querySelector("#questions");
var scoreCard = document.querySelector("#score");
var leaderboardCard = document.querySelector("#leaderboard");

// function for cards to hide
function hideCards() {
    startCard.setAttribute("hidden", true);
    questionCard.setAttribute("hidden", true);
    scoreCard.setAttribute("hidden", true);
    leaderboardCard.setAttribute("hidden", true);
}

