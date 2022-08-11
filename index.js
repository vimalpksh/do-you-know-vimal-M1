var readlineSync = require("readline-sync");
var score = 0;

var userName = readlineSync.question("What is your name? ");
console.log("Hello " + userName + " & Welcome to DO YOU KNOW VIMAL");
console.log("========================");
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("You are right!");
    score = score + 1;
  } else {
    console.log("You are incorrect, the right answer is " + answer);
  }
  console.log("Your score is " + score);
  console.log("--------------");
}

var questions = [
  {
    question: "Which city do I live? ",
    answer: "Coimbatore",
  },
  {
    question: "Which company do I work at? ",
    answer: "Amazon",
  },
  {
    question: "What is my favourite color? ",
    answer: "Black",
  },
  {
    question: "Which company do I work at? ",
    answer: "Amazon",
  },
  {
    question: "Which is my food item? ",
    answer: "Biriyani",
  },
  {
    question: "What is my favourite sport? ",
    answer: "Cricket",
  },
];

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  var finalAnswer = currentQuestion.answer;
  var result = finalAnswer.toLocaleLowerCase();
  play(currentQuestion.question, result);
}
console.log("Your final score: ", score);
