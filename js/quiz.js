const info_box = document.getElementById('info-box');
const quizContainer = document.getElementById('quiz-container');
const continueBtn = document.querySelector('#continue-btn');
const result_box = document.getElementById("result");
const time_line = document.querySelector(".time_line");
const timeCount = document.querySelector(".timer .timer_sec");
const quit_quiz = result_box.querySelector(".quit");
const submit_btn = document.querySelector("#submit-btn");
const ul = document.querySelector("#ans-list");
const ul2 = document.querySelector("#corr-list");


let timeValue = 59;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
let score = 0;
let timeTaken = 0;
let correctAns = [];
let wrongAns = [];
//let corrAns = ["Q1 - Viola", "Q2 - Miles Davis", "Q3 - Rock and roll", "Q4 - Franz Schubert", "Q5 - Celtic", "Q6 - Thammattama", "Q7 - W.D.Amaradewa", "Q8 - Kandyan", "Q9 - Mick Jagger", "Q10 - Madonna"];
let corrAns = ["Viola", "Miles Davis", "Rock and roll", "Franz Schubert", "Celtic", "Thammattama", "W.D.Amaradewa", "Kandyan", "Mick Jagger", "Madonna"];

continueBtn.onclick = function () { continueForward() };

//start the quiz
function continueForward() {
    console.log("show quiz");
    hideContent("info-box");
    showContent("quiz-container");;
    startTimerLine(0);
    startTimer(59);

}
// to delay showing the final quiz summmary so that the correct and incorrect questions can be highlighted in green and red.
function delayedFunction() {
    console.log("This function is called after a delay.");
    showResult();
}
submit_btn.onclick = function () { submitAll() };
function submitAll() {
    console.log("hit button");
    submitQue();
    time_line.classList.add('paused');
    checkAnswers();
    setTimeout(delayedFunction, 5000);
}

quit_quiz.onclick = function () { closeQuiz() };
function closeQuiz() {
    window.location.reload();

}


function submitQue() {
    var answers = ["Q1A2", "Q2A4", "Q3A2", "Q4A3", "Q5A4", "Q6A4", "Q7A4", "Q8A2", "Q9A4", "Q10A3"]
    timeTaken = 60 - timeValue;

    stopTimer(counter);
    stopTimer(counterLine);
    for (let index = 0; index < answers.length; index++) {
        var ans = document.getElementById(answers[index]);
        if (ans.checked == true) {
            score += 2;
            correctAns.push(index);
            continue;
        } else {
            console.log("issue find" + index);
            score--;
            wrongAns.push(index);
        }
        console.log("go loop");
    }
}


// end the quiz and show the result box.
function showResult() {
    hideContent("quiz-container");
    hideContent("info-box");
    showContent("result");
    result_box.classList.add("activeResult");

    for (var i = 0; i < correctAns.length; i++) {
        var ans = correctAns[i] + 1;
        var listItem = document.createElement("li");
        listItem.textContent = "Question " + ans + " - You have given the Correct answer ! ";
        listItem.style.textAlign = "left";
        ul.appendChild(listItem);
    }

    for (var i = 0; i < wrongAns.length; i++) {
        var qNum = wrongAns[i] + 1;
        var cAns = corrAns[wrongAns[i]];
        if (correctAns.includes(wrongAns[i])) {
            continue;
        }
        var listItem = document.createElement("li");
        listItem.textContent = "Question " + qNum + " - Your answer is incorrect,  The correct answer is: " + cAns;
        listItem.style.textAlign = "left";
        ul.appendChild(listItem);
    }

    var points;
    if (score < 0) {
        points = 0;
    } else {
        points = score;
    }
    document.getElementById("marks").innerHTML = "You Scored " + points + " marks... <br/>" + "It took you " + timeTaken + " seconds.";
    document.getElementById("marks").style.textAlign = "left";
    if (points >= 12) {
        document.getElementById("result").style.background = "#bfbfbf";
        document.getElementById("res-title").innerHTML = "You really do know about music !"
        document.getElementById("res-title").style.textAlign = "left";
    }
    else if (score >= 8) {
        document.getElementById("result").style.background = "#bfbfbf";
        document.getElementById("res-title").innerHTML = "You're almost a native !"
        document.getElementById("res-title").style.textAlign = "left";
    }
    else {
        document.getElementById("result").style.background = "#bfbfbf";
        document.getElementById("res-title").innerHTML = "Well Done !"
        document.getElementById("res-title").style.textAlign = "left";
    }
}


//start timer
function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time;
        time--;
        timeValue = time;
        if (time <= 0) {
            timeTaken = 60 - timeValue;
            console.log("time break " + timeValue);
            stopTimer(counter);
            stopTimer(counterLine);
            submitQue();
            //showResult();
            checkAnswers();
            setTimeout(delayedFunction, 1000);
        }
    }
}

//start timeline
function startTimerLine(time) {
    counterLine = setInterval(timer, 1000);
    function timer() {
        time += 1;
        time_line.style.width = time * 100 / 60 + "%";
    }
    if (time == 60) {
        stopTimer(counterLine);
    }
}

function stopTimer(counter) {
    clearInterval(counter);
}


//method for hide some content
function hideContent(divison) {
    var ele = document.getElementById(divison);
    ele.style.display = "none";

}

//method for show some content
function showContent(divison) {
    var ele = document.getElementById(divison);
    ele.style.display = "block";
    document.getElementById(divison).style.opacity = 1;
}
function checkAnswers() {
    var q1Radios = document.getElementsByName("question1");
    var q2Radios = document.getElementsByName("question2");
    var q3Radios = document.getElementsByName("question3");
    var q4Radios = document.getElementsByName("question4");
    var q5Radios = document.getElementsByName("question5");
    var q6Radios = document.getElementsByName("question6");
    var q7Radios = document.getElementsByName("question7");
    var q8Radios = document.getElementsByName("question8");
    var q9Radios = document.getElementsByName("question9");
    var q10Radios = document.getElementsByName("question10");

    // get the p tag for questions
    var q1P = document.getElementById("question1");
    var q2P = document.getElementById("question2");
    var q3P = document.getElementById("question3");
    var q4P = document.getElementById("question4");
    var q5P = document.getElementById("question5");
    var q6P = document.getElementById("question6");
    var q7P = document.getElementById("question7");
    var q8P = document.getElementById("question8");
    var q9P = document.getElementById("question9");
    var q10P = document.getElementById("question10");

    // the answers will be highlighted in red when it's incorrect or the user does not selects any answer.
    var anyCorrect = false;
    for (var i = 0; i < q1Radios.length; i++) {
        if (q1Radios[i].checked && q1Radios[i].value === "correct") {
            q1P.style.backgroundColor = "green";
            anyCorrect = true;
        } else if (q1Radios[i].checked && q1Radios[i].value !== "correct") {
            q1P.style.backgroundColor = "red";
        }
    }
    if (!anyCorrect) {
        q1P.style.backgroundColor = "red";
    }
    var anyCorrect = false;
    for (var i = 0; i < q2Radios.length; i++) {
        if (q2Radios[i].checked && q2Radios[i].value === "correct") {
            q2P.style.backgroundColor = "green";
            anyCorrect = true;
        } else if (q2Radios[i].checked && q2Radios[i].value !== "correct") {
            q2P.style.backgroundColor = "red";
        }
    }
    if (!anyCorrect) {
        q2P.style.backgroundColor = "red";
    }
    var anyCorrect = false;
    for (var i = 0; i < q3Radios.length; i++) {
        if (q3Radios[i].checked && q3Radios[i].value === "correct") {
            q3P.style.backgroundColor = "green";
            anyCorrect = true;
        } else if (q3Radios[i].checked && q3Radios[i].value !== "correct") {
            q3P.style.backgroundColor = "red";
        }
    }
    if (!anyCorrect) {
        q3P.style.backgroundColor = "red";
    }
    var anyCorrect = false;
    for (var i = 0; i < q4Radios.length; i++) {
        if (q4Radios[i].checked && q4Radios[i].value === "correct") {
            q4P.style.backgroundColor = "green";
            anyCorrect = true;
        } else if (q4Radios[i].checked && q4Radios[i].value !== "correct") {
            q4P.style.backgroundColor = "red";
        }
    }
    if (!anyCorrect) {
        q4P.style.backgroundColor = "red";
    }
    var anyCorrect = false;
    for (var i = 0; i < q5Radios.length; i++) {
        if (q5Radios[i].checked && q5Radios[i].value === "correct") {
            q5P.style.backgroundColor = "green";
            anyCorrect = true;
        } else if (q5Radios[i].checked && q5Radios[i].value !== "correct") {
            q5P.style.backgroundColor = "red";
        }
    }
    if (!anyCorrect) {
        q5P.style.backgroundColor = "red";
    }
    var anyCorrect = false;
    for (var i = 0; i < q6Radios.length; i++) {
        if (q6Radios[i].checked && q6Radios[i].value === "correct") {
            q6P.style.backgroundColor = "green";
            anyCorrect = true;
        } else if (q6Radios[i].checked && q6Radios[i].value !== "correct") {
            q6P.style.backgroundColor = "red";
        }
    }
    if (!anyCorrect) {
        q6P.style.backgroundColor = "red";
    }
    var anyCorrect = false;
    for (var i = 0; i < q7Radios.length; i++) {
        if (q7Radios[i].checked && q7Radios[i].value === "correct") {
            q7P.style.backgroundColor = "green";
            anyCorrect = true;
        } else if (q7Radios[i].checked && q7Radios[i].value !== "correct") {
            q7P.style.backgroundColor = "red";
        }
    }
    if (!anyCorrect) {
        q7P.style.backgroundColor = "red";
    }
    var anyCorrect = false;
    for (var i = 0; i < q8Radios.length; i++) {
        if (q8Radios[i].checked && q8Radios[i].value === "correct") {
            q8P.style.backgroundColor = "green";
            anyCorrect = true;
        } else if (q8Radios[i].checked && q8Radios[i].value !== "correct") {
            q8P.style.backgroundColor = "red";
        }
    }
    if (!anyCorrect) {
        q8P.style.backgroundColor = "red";
    }
    var anyCorrect = false;
    for (var i = 0; i < q9Radios.length; i++) {
        if (q9Radios[i].checked && q9Radios[i].value === "correct") {
            q9P.style.backgroundColor = "green";
            anyCorrect = true;
        } else if (q9Radios[i].checked && q9Radios[i].value !== "correct") {
            q9P.style.backgroundColor = "red";
        }
    }
    if (!anyCorrect) {
        q9P.style.backgroundColor = "red";
    }
    var anyCorrect = false;
    for (var i = 0; i < q10Radios.length; i++) {
        if (q10Radios[i].checked && q10Radios[i].value === "correct") {
            q10P.style.backgroundColor = "green";
            anyCorrect = true;
        } else if (q10Radios[i].checked && q10Radios[i].value !== "correct") {
            q10P.style.backgroundColor = "red";
        }
    }
    if (!anyCorrect) {
        q10P.style.backgroundColor = "red";
    }

}

