// import chalk from 'chalk';

var read = require("readline-sync");
var score = 0;
var username = read.question(" Hey whats your name ")
console.log("hii  " + username + " Are You a Cricket Fan")
// console.log("Type answers in small letters")
function display(question, answer) {
  var useranswer = read.question(question).toLowerCase();
  if (useranswer == answer) {
    console.log(" you are right")
    score = score + 1;
  } else {
    console.log(" you are wrong")
  } console.log(" your score -> " + score)
  console.log("---------")
}


var questions = [{
  question: "Do you know when india won first worldcup ",
  answer: "1983",
},
{
  question: "Under who's captiancy india won all icc trophies ",
  answer: "dhoni",
},
{
  question: "Which indian has highest score in international odi ",
  answer: "rohith sharma",
},
{
  question: "At which stadium recently india made a history in tests ",
  answer: "gabba",
}, {
  question: "Which player can able to break the sachin record ",
  answer: "virat kohli",
}]
for (i = 0; i < questions.length; i++) {
  var user = questions[i];
  display(user.question, user.answer)
}
var highscores = [
  {
    name: "Sumanth ", score: "4",
  },
  {
    name: "Nachi ", score: "3"
  }
]

console.log(" Your score: ",score)
for (j = 0; j < highscores.length; j++) {
  // var oldusers = highscores[j]
  if (score > highscores[j].score) {
    console.log(" You have scored high than", highscores[j].name);
    console.log("Send me a screen shot to upload your score")
  }

 }


