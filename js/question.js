var quizData = [];
const quizDataHTML = [
    {
        question: "What is the correct HTML element for inserting an image?",
        answers: ["<image>", "<img>", "<pic>"],
        correct: 1
    },
    {
        question: "Which tag is used to create a hyperlink?",
        answers: ["<a>", "<link>", "<href>"],
        correct: 0
    },
    {
        question: "Which attribute is used to provide an alternate text for an image?",
        answers: ["alt", "title", "src"],
        correct: 0
    },
    {
        question: "Which HTML tag is used to create a table row?",
        answers: ["<td>", "<tr>", "<th>"],
        correct: 1
    },
    {
        question: "Which tag is used for an unordered list?",
        answers: ["<ul>", "<ol>", "<li>"],
        correct: 0
    },
    {
        question: "What is the correct HTML element for the largest heading?",
        answers: ["<h6>", "<heading>", "<h1>"],
        correct: 2
    },
    {
        question: "Which tag is used to define a paragraph?",
        answers: ["<para>", "<p>", "<text>"],
        correct: 1
    },
    {
        question: "Which attribute specifies a unique id for an element?",
        answers: ["class", "id", "name"],
        correct: 1
    },
    {
        question: "Which tag is used to create a checkbox?",
        answers: ["<input type='check'>", "<checkbox>", "<input type='checkbox'>"],
        correct: 2
    },
    {
        question: "Which HTML tag is used to define the document title?",
        answers: ["<meta>", "<title>", "<head>"],
        correct: 1
    }
];
const quizDataCSS = [
    {
        question: "Which CSS property is used to change background color?",
        answers: ["color", "bgcolor", "background-color"],
        correct: 2
    },
    {
        question: "Which property is used to change font size?",
        answers: ["font-size", "text-size", "size"],
        correct: 0
    },
    {
        question: "How do you select an element with id 'demo'?",
        answers: [".demo", "#demo", "demo"],
        correct: 1
    },
    {
        question: "How do you select elements with class 'test'?",
        answers: ["#test", ".test", "test"],
        correct: 1
    },
    {
        question: "Which property is used to make text bold?",
        answers: ["font-weight", "text-bold", "bold"],
        correct: 0
    },
    {
        question: "Which property controls the width of an element?",
        answers: ["height", "size", "width"],
        correct: 2
    },
    {
        question: "Which value of position makes the element fixed?",
        answers: ["absolute", "fixed", "relative"],
        correct: 1
    },
    {
        question: "Which property adds space inside the border?",
        answers: ["margin", "padding", "spacing"],
        correct: 1
    },
    {
        question: "Which property is used to change text alignment?",
        answers: ["align", "text-align", "font-align"],
        correct: 1
    },
    {
        question: "Which property is used to add shadow to text?",
        answers: ["text-shadow", "font-shadow", "shadow"],
        correct: 0
    }
];
const quizDataJS = [
    {
        question: "Which keyword is used to declare a variable?",
        answers: ["var", "int", "string"],
        correct: 0
    },
    {
        question: "Which method is used to select an element by id?",
        answers: ["getElementById()", "querySelectorAll()", "getElementsByClass()"],
        correct: 0
    },
    {
        question: "How do you write 'Hello' in an alert box?",
        answers: ["msg('Hello')", "alert('Hello')", "console.log('Hello')"],
        correct: 1
    },
    {
        question: "Which operator is used for strict equality?",
        answers: ["==", "=", "==="],
        correct: 2
    },
    {
        question: "How do you create a function?",
        answers: ["function myFunc()", "create myFunc()", "def myFunc()"],
        correct: 0
    },
    {
        question: "Which event occurs when a user clicks an element?",
        answers: ["onchange", "onmouseclick", "onclick"],
        correct: 2
    },
    {
        question: "How do you write a comment in JavaScript?",
        answers: ["<!-- comment -->", "// comment", "# comment"],
        correct: 1
    },
    {
        question: "Which method converts JSON to object?",
        answers: ["JSON.parse()", "JSON.stringify()", "JSON.convert()"],
        correct: 0
    },
    {
        question: "Which loop repeats until condition is false?",
        answers: ["for", "while", "if"],
        correct: 1
    },
    {
        question: "Which function is used to delay execution?",
        answers: ["setTimeout()", "delay()", "wait()"],
        correct: 0
    }
];
var score=0
var current = 0
var quiz = document.getElementById("quiz")
var questions = document.getElementById("questions")
var answers = document.getElementById("answers")
var lang=document.getElementById("lang")
function selectLang(l){
lang.style.display="none"
if(l=="html"){
    quizData=quizDataHTML
}
else if(l=="css")
{
     quizData=quizDataCSS
}
else{
     quizData=quizDataJS
}
quiz.style.display="block"
qload()

}
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




