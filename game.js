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
    printIndex("correct", question, response);
    correctCount++
  } else {
    printIndex("incorrect", question, response);
  }
}

//announces user's score
function score() {
  showImage("none");
  document.getElementById("question").innerHTML = ("Okay, " + userName + ", it looks like you've gotten " + correctCount + " answer(s) right out of " + questionArray.length + ".");
  if (correctCount === 0) {
    document.getElementById("answer").innerHTML = ("I can't believe you didn't get a single question right! I'm disappointed in you.");
  } else if (correctCount === questionArray.length) {
    document.getElementById("answer").innerHTML = ("You got all the questions correct! Incredible!");
  } else {
    document.getElementById("answer").innerHTML = ("");
  }
  document.getElementById("questionBlock").className = "content";

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
function numberGuess(question, userNumber, ansNumber) {
  var response;
  while (userNumber !== ansNumber) {
    if (userNumber < ansNumber) {
      response = "I'm sorry, " + userNumber + " is too low. Guess again!"
      printIndex("incorrect", question, response)
      userNumber = parseInt(prompt(response));
    }
      else if (userNumber > ansNumber) {
      response = "I'm sorry, " + userNumber + " is too high. Guess again!"
      printIndex("incorrect", question, response)
      userNumber = parseInt(prompt(response));
    }
      else {
      response = "I'm sorry, " + userNumber + " is not even a number! Guess again!"
      printIndex("incorrect", question, response)
      userNumber = parseInt(prompt(response));
    }
  }
}

//gets user's name
function getUserName() {
  var name = prompt("Hello, what is your name?", "Type your name here");
  alert("Hello " + name + ", are you ready to play a game? How well do you know me?");
  return name;
}

//displays selected correct/incorrect image
function showImage(selector){
  switch(selector){
    case 'correct':
      document.getElementById('correctImage').style.display = 'block';
      document.getElementById('incorrectImage').style.display = 'none';
      break;
    case 'incorrect':
      document.getElementById('correctImage').style.display = 'none';
      document.getElementById('incorrectImage').style.display = 'block';
      break;
    case 'all':
      document.getElementById('correctImage').style.display = 'block';
      document.getElementById('incorrectImage').style.display = 'block';
      break;
    default:
      document.getElementById('correctImage').style.display = 'none';
      document.getElementById('incorrectImage').style.display = 'none';
      break;

  }
}

//takes text input and prints to the DOM. "style" changes class to specific style.
function printIndex(style, question, reply) {
  switch(style){
    case 'correct':
      document.getElementById("question").innerHTML = question;
      document.getElementById("answer").innerHTML = ("Correct! " + reply);
      document.getElementById("questionBlock").className = "correct";
      showImage("correct");
      break;
    case 'incorrect':
      document.getElementById("question").innerHTML = question;
      document.getElementById("answer").innerHTML = ("I'm sorry " + userName + ", that's incorrect. " + reply + ".");
      document.getElementById("questionBlock").className = "incorrect";
      showImage("incorrect");
      break;
  }



}

//////SCRIPT START//////
userName = getUserName();

for(i=0; i<questionArray.length; i++) {
  functionGame(questionArray[i][0], questionArray[i][1], questionArray[i][2])
}

score();

for(i=0; i<numberGuessArray.length; i++) {
  var question = numberGuessArray[i][0];
  var answerMessage;

  userAnswer = parseInt(prompt(numberGuessArray[i][0]));
  numberGuess(question, userAnswer, numberGuessArray[i][1]);

  answerMessage = ("Correct! The answer is " + numberGuessArray[i][1] + "! Wow, " + userName + ", you're a great guesser!");
  printIndex("correct", question, answerMessage);
}





