var readlineSync=require("readline-sync");
var userName=readlineSync.question("What's Your Name?\n");
console.log(userName+" Welcome to NeogCamp!");

//quiztanaylive
score=0;
function play(question,answer)
{
  var userAnswer = readlineSync.question(question);
  if(userAnswer===answer)
  {
    console.log("Your answer is Right!");
    score=++score;
  }
  else
  {
    console.log("Oops! Your answer is Wrong!")
    score=--score;
  }
}

//listofquestion in an array
var questions=[{question:"Where does tanay live?\n",answer:"Bangalore"},
{question:"Where does Tanay work?\n",answer:"Microsoft"},{question:"Who's Tanay's favourite superhero?\n",answer:"Batman"}];

//putting for loop to index through questions

for(i=0;i<questions.length;i++)
{
  var currentQuestion= questions[i]
  play(currentQuestion.question,currentQuestion.answer)
}
console.log("Yay! your score is "+score);