var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question("What's your name? ");
console.log("hi "+userName + " welcome to the quiz!!! " );

var questions = [
  {
    question: "Doraemon is from which century ",
    answer: "22nd"
  },
  {
    question: "What does doraemon loves most in food ",
    answer: "Doracakes"
  },
  {
    question: "what Doraemon hates the most? ",
    answer: "rats"
  },{
    question: "Doraemon's best friend ",
    answer: "nobita"
  },{
    question: "what is the color of Doraemon ",
    answer: "blue"
  }
];

function gamePlay(question, answer){
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase === answer.toUpperCase){
    console.log("You are right!!!");
    score++;
  }else{
    console.log("worng");
  }
  console.log("Your current Score "+ score);
  console.log("-----------------")
}


for (var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  gamePlay(currentQuestion.question, currentQuestion.answer);

}

console.log(" your final Score " + score);