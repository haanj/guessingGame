//document.getElementById(hidingSpace).style.color = "red";


var userName;
var correctCount = 0;
var questionArray = [
  ["Do I live in Seattle?", "no", "I live out in Fall City."],
  ["Do I like to ski?", "yes", "I do like to ski. I hope the season's better this year."],
  ["Do I enjoy playing Eldritch Horror?", "yes", "I do enjoy Eldritch Horror; it's probably one of my favorites."],
  ["Am I Irish?", "no", "I am not Irish."]
];
var numberGuessArray = [
  ["I'm thinking of a number between 1 and 10. Can you guess what it is?", (Math.floor(Math.random() * 10) + 1)],
  ["How old am I?", 25],
];

//prompts with question, checks user's input against answer, responds accordingly
function functionGame(question, answer, response) {

  var userAnswer = answerErrorCorrect(prompt(question, "yes/no"));
  if (userAnswer === answer){
    document.getElementById("question").innerHTML = question;
    document.getElementById("answer").innerHTML = ("Correct! " + response);
    correctCount++
  } else {
    document.getElementById("question").innerHTML = question;
    document.getElementById("answer").innerHTML = ("I'm sorry " + userName + ", that's incorrect. " + response + ".");
  }
}

//announces user's score
function score() {
  document.getElementById("question").innerHTML = ("Okay, " + userName + ", it looks like you've gotten " + correctCount + " answer(s) right out of " + questionArray.length + ".");
  if (correctCount === 0) {
    document.getElementById("answer").innerHTML = ("I can't believe you didn't get a single question right! I'm disappointed in you.");
  } else if (correctCount === questionArray.length) {
    document.getElementById("answer").innerHTML = ("You got all the questions correct! Incredible!");
  } else {
    document.getElementById("answer").innerHTML = ("");
  }
}

//answerErrorCorrect will standardize user's yes/no answer
function answerErrorCorrect(ans) {
  var ansL = ans.toLowerCase();

  if (ansL === "yes" || ansL === "y")
    {return "yes";}
  else if (ansL === "no" || ansL === "n")
    {return "no";}
  else {
    alert("I don't understand your answer and will have to count it wrong.")
    return "WRONG"
  }
}

//number guessing game
function numberGuess(userNumber, ansNumber) {
  while (userNumber !== ansNumber) {
    if (userNumber < ansNumber) {
      userNumber = parseInt(prompt("That's too low. Guess again!"));
    } else if (userNumber > ansNumber) {
      userNumber = parseInt(prompt("That's too high. Guess again!"));
    } else {
      userNumber = parseInt(prompt("That's not even a number! Try again."));
    }
  }
  document.getElementById("answer").innerHTML = ("Correct! The answer is " + ansNumber + "! Wow, " + userName + ", you're a great guesser!");
}

//gets user's name
function getUserName() {
  var name = prompt("Hello, what is your name?", "Type your name here");
  alert("Hello " + name + ", are you ready to play a game? How well do you know me?");
  return name;
}





//////SCRIPT START//////
userName = getUserName();

for(i=0; i<questionArray.length; i++) {
  functionGame(questionArray[i][0], questionArray[i][1], questionArray[i][2])
}
score();

for(i=0; i<numberGuessArray.length; i++) {
  userAnswer = parseInt(prompt(numberGuessArray[i][0]));
  numberGuess(userAnswer, numberGuessArray[i][1]);
    document.getElementById("question").innerHTML = (numberGuessArray[i][0]);
}





