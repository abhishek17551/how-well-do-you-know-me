var readInput= require("readline-sync");
const chalk = require('chalk');

var userName = readInput.question("What is your name? ");

var score=0;

const correctAns = chalk.green.bold;
const incorrectAns = chalk.red.bold;
const currentScore = chalk.black.bold.bgWhite;
const finalScore = chalk.black.bold.bgCyan;

console.log(chalk.italic.blueBright("Welcome "+ userName + "!!!"));
console.log(chalk.italic.blueBright("Let's see how well do you know Abhi"));
console.log(chalk.italic.blueBright("~ ~ ~ ~ ~ ~ ~ ~"));

function play(question,answer){
  var userAnswer = readInput.question(question);

  if (userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log(correctAns("You're Right!"));
    score+=1;
  }
  else{
    console.log(incorrectAns("You're Wrong"));
    
  }
  console.log(currentScore("Your score: "+ score));
  console.log("- - - - - - - ");
}

var quesOne = {
  question:"Where does Abhi live? ",
  answer:"Bangalore"
}

var quesTwo = {
  question:"Who is Abhi's favorite Superhero? ",
  answer:"Doctor Strange"
}

var quesThree = {
  question:"Which is Abhi's favorite sport?  ",
  answer:"Cricket"
}

var quesFour = {
  question:"Who is Abhi's favorite Film Actor? ",
  answer:"Rajnikanth"
}

var quesFive = {
  question:"Who is Abhi's favorite cricketer? ",
  answer:"AB De Villiers"
}

var quesSix = {
  question:"Does Abhi prefer beaches or mountains? ",
  answer:"Mountains"
}

var quesSeven = {
  question:"Which is Abhi's favorite color? ",
  answer:"Blue"
}



var questions = [quesOne,quesTwo,quesThree,quesFour,quesFive,quesSix,quesSeven];
for (var i=0; i<questions.length; i++){
  currentQues = questions[i];
  play(currentQues.question,currentQues.answer);
}

console.log(finalScore("Aye!Your final score is: "+score));