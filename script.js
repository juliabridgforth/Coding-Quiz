//these are all of the dynamic elements from the html

var startEl = document.querySelector("#start");
var startButton = document.querySelector("#start-button");
var quizEl = document.querySelector("#quiz");
var questionEl = document.querySelector("#question");
var questionTextEl = document.querySelector("#question-text");
var choicesEl = document.querySelector("#choices");
var endEl = document.querySelector("#end");
var checkEl = document.querySelector("#check");
var nextButtonEl = document.querySelector("#next-button");
var timerEl = document.querySelector("#timer");
var scoreEl = document.querySelector("#score");
var initialsInput = document.querySelector("#initials");
var msgDivEl = document.querySelector("#msgDiv");
var saveScoreEl = document.querySelector("#save-score-button");
var highScoresButton = document.querySelector("#high-scores");
var highScoresDiv = document.querySelector("#high-scores-div");



//this is the questions array of objects

var questions = [
    {
        text: "What does HTML stand for?",
        options:
            [
                "Hello Tom March Lake",
                "Hyperlink Text Markup Language",
                "Hyper Tech Mark Language",
                "Hyper Ticks Might Launch"
            ],
        correct: 1,
    },

    {
        text: "What does CSS stand for?",
        options:
            [
                "Cascading Style Sheets",
                "Creative Style Sheets",
                "Crossing Style Shirt",
                "Crystal Shining Sheet"
            ],
        correct: 0,
    },

    {
        text: "Choose the correct HTML element for the largest heading:",
        options:
            [
                "<head>",
                "heading",
                "<h1>",
                "<h6>"
            ],
        correct: 2,
    },

    {
        text: "What is the correct HTML element for inserting a line break?",
        options:
            [
                "<lb>",
                "<br>",
                "BREAK",
                "!!"
            ],
        correct: 1,
    },

    {
        text: "Choose the correct HTML element to define important text.",
        options:
            [
                "<strong>",
                "<important>",
                "/bold",
                "<b>"
            ],
        correct: 0,
    }

]
//these are variables

var cursor = 0;
var score = 0;
var timeLeft = 75;
var interval;
var question = questions[cursor];

//the function makes the questions and options appear

function renderQuestion() {
    var question = questions[cursor];

    if (cursor<questions.length){

    //<div id= question-text>Question Text</div>
    questionTextEl.textContent = (cursor + 1) + "." + question.text;

    question.options.forEach(function (choice, i) {
        var choiceSection = document.createElement("div");
        choiceSection.setAttribute("data-id", i);
        choiceSection.setAttribute("class", "item");
        choiceSection.textContent = choice;
        choicesEl.appendChild(choiceSection);
    });}

    else{
        endGame();
    }
}

//this function is what happens when someone clicks the start or play again button
//it renders the first question and initializes the timer

function startQuiz() {
    startEl.style.display = "none";
    endEl.style.display = "none";
    highScoresDiv.style.display = "none";
    quizEl.style.display = "block";
    renderQuestion();
    initializeTimer();

}

//this function checks the user's selection against the data-id of the correct answer

function checkAnswer(event) {
    var element = event.target;
    var question = questions[cursor];


    if (element.className === "item") {

        var id = parseInt(element.getAttribute("data-id"));

        if (id === question.correct) {
            var right = document.createElement("div");
            checkEl.textContent = "";
            right.textContent = "You are right!";
            checkEl.appendChild(right);
            score++;

        } else {
            var wrong = document.createElement("div");
            checkEl.textContent = "";
            wrong.textContent = "You are wrong.";
            checkEl.appendChild(wrong);
            timeLeft--;
            timeLeft--;
            timeLeft--;
            timeLeft--;
            timeLeft--;
            timeLeft--;
            timeLeft--;
            timeLeft--;
            timeLeft--;
            timeLeft--;
        }
    }

}

//this function initializes the timer

function initializeTimer() {
    timeLeft = parseInt(timerEl.getAttribute("data-time"));
    interval = setInterval(function () {
        timeLeft--;
        if (timeLeft > 0) {
            timerEl.textContent = "TIMER: " + timeLeft;
        }
        else {
            clearInterval(interval);
            endGame();
        }
    }, 1000);
}


//this function occurs at the end of the game

function endGame() {
    console.log(score);
    scoreEl.textContent = "You scored: " + score;
    quizEl.style.display = "none";
    endEl.style.display = "block";
}



function displayMessage(type, message) {
    msgDivEl.textContent = message;
    msgDivEl.setAttribute("class", type);
  }

startButton.addEventListener("click", startQuiz);

choicesEl.addEventListener("click", checkAnswer);

nextButtonEl.addEventListener("click", function () {
    cursor++;
    choicesEl.textContent = "";
    checkEl.textContent = "";
    renderQuestion();

});

saveScoreEl.addEventListener("click", function () {
    event.preventDefault();

  var initials = document.querySelector("#initials").value;

  if (initials === "") {
    displayMessage("error", "Initials cannot be blank.");
  
  } else {
    displayMessage("success", "Your score is saved!");
    localStorage.setItem('initials', initials);
    localStorage.setItem('score', score);
}


});

highScoresButton.addEventListener("click", function(){
    endEl.style.display = "none";
    highScoresDiv.style.display = "block";
    highScoreGen = document.createElement("div");
    highScoreGen.textContent= localStorage.getItem('initials') + " : " + localStorage.getItem('score');
    highScoresDiv.appendChild(highScoreGen);

})


