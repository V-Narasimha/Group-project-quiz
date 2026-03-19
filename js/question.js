const quizData = [
    {
        question: "What does HTML stand for?",
        answers: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"],
        correct: 0
    },
    {
        question: "What does CSS stand for?",
        answers: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Syntax"],
        correct: 1
    },
    {
        question: "Which language runs in a web browser?",
        answers: ["Python", "JavaScript", "C++"],
        correct: 1
    },
    {
        question: "Which HTML tag is used for the largest heading?",
        answers: ["<h1>", "<head>", "<heading>"],
        correct: 0
    },
    {
        question: "Which property is used to change text color in CSS?",
        answers: ["font-color", "color", "text-color"],
        correct: 1
    },
    {
        question: "How do you write a comment in JavaScript?",
        answers: ["<!-- Comment -->", "// Comment", "' Comment"],
        correct: 1
    },
    {
        question: "Which HTML attribute is used to link an external CSS file?",
        answers: ["src", "href", "link"],
        correct: 1
    },
    {
        question: "Which CSS property controls the spacing between lines of text?",
        answers: ["line-height", "text-spacing", "letter-spacing"],
        correct: 0
    },
    {
        question: "Which JavaScript function is used to display a message in the console?",
        answers: ["console.show()", "console.log()", "alert()"],
        correct: 1
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        answers: ["<break>", "<br>", "<lb>"],
        correct: 1
    }
];
var score=0
var current = 0
var quiz = document.getElementById("quiz")
var questions = document.getElementById("questions")
var answers = document.getElementById("answers")
function qload() {
    const q = quizData[current]
    var answ = quizData[current].answers
    questions.textContent = q.question
    answ.forEach(function (ans, index) {
    var btn = document.createElement("button");
    btn.textContent = ans;

    btn.addEventListener("click", function () {
        const correct = quizData[current].correct;

        if (index === correct) score++; // compare clicked index
        current++;

        if (current < quizData.length) {
            answers.innerHTML = ""; // clear previous buttons
            qload();
        } else {
            localStorage.setItem("score", score); // save score
            window.location.href = "../pages/result.html"; // redirect to result
        }
    });

    answers.appendChild(btn);
});
}

qload()



