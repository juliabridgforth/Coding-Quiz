var startEl = document.querySelector("#start");
var startButton = document.querySelector("#start-button");
var quizEl = document.querySelector("#quiz");
var questionEl = document.querySelector("#question");
var questionTextEl = document.querySelector("#question-text");
var choicesEl = document.querySelector("#choices");
var endEl= document.querySelector("#end");
var checkEl = document.querySelector("#check");


var questions = {
    question : "What does HTML stand for?",
    options :
        [
        "Hello Tom March Lake",
        "Hyperlink Text Markup Language",
        "Hyper Tech Mark Language",
        "Hyper Ticks Might Launch"
        ],
    correct : 1,
}

var lastQuestions = questions.length - 1;
var runningQuestion = 0;

console.log(questions.question);

console.log(questions.options);

function renderQuestion() {
    var questionText = document.createElement("div");
    //<div id= question-text>Question Text</div>
    questionText.textContent= questions.question;
    questionTextEl.appendChild(questionText);
}

    for (var i=0; i<questions.options.length; i++) {
        var choice = questions.options[i];
        var choiceSection = document.createElement("div");
        choiceSection.setAttribute("data-id", i);
        choiceSection.setAttribute("class", "item");
        choiceSection.textContent= choice;
        choicesEl.appendChild(choiceSection);
    };



function startQuiz() {
    startEl.style.display = "none";
    quizEl.style.display = "block";
    renderQuestion();
    
}

function checkAnswer(answer){
    
    for (var i=0; i<questions.options.length; i++) {
        var choice = questions.options[i];
        console.log(choice);
        if(answer === questions.options.correct){
        //answer correct
        score++
        var right = document.createElement("div");
        right.textContent = "You got it!"
        checkEl.appendChild(right);
        

    }
    else{
        //answer is wrong
        var wrong = document.createElement("div");
        wrong.textContent = "Maybe you should study more."
        checkEl.appendChild(wrong);
    }
}
}

var item= document.querySelector(".item");


startButton.addEventListener("click", startQuiz);

item.addEventListener("click", checkAnswer);

