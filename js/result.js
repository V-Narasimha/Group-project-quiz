// Get score
let score = localStorage.getItem("score") || 0;

// Show score
document.getElementById("score").textContent = score + " / 10";

// Message
let msg = document.getElementById("message");

if(score >= 8){
    msg.textContent = "Excellent!";
}
else if(score >= 5){
    msg.textContent = "Good Job!";
}
else{
    msg.textContent = "Try Again!";
}

// Buttons
function retryQuiz(){
    window.location.href = "question.html";
}

function viewAnswers(){
    window.location.href = "summary.html";
}
