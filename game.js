var userName;
var randomNumber = Math.floor(Math.random() * 10) + 1;
var correctCount = 0;
var questionArray = [
  ["Do I live in Seattle?", "no", "I live out in Fall City."],
  ["Do I like to ski?", "yes", "I do like to ski. I hope the season's better this year."],
  ["Am I good at disc golf?", "no", "I like to play, but I'm absolutely terrible at it."],
  ["Do I enjoy playing Eldritch Horror?", "yes", "I do enjoy Eldritch Horror; it's probably one of my favorites."]
];

//prompts with question, checks user's input against answer, responds accordingly
function functionGame(question, answer, response) {
  var userAnswer = answerErrorCorrect(prompt(question, "yes/no"));
  if (userAnswer === answer){
    alert("Correct! " + response);
    correctCount++
  } else {
    alert("I'm sorry " + userName + ", that's incorrect. " + response + ".");
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


userName = prompt("Hello, what is your name?", "Type your name here");
alert("Hello " + userName + ", are you ready to play a game? How well do you know me?");


for(i=0; i<questionArray.length; i++) {
  functionGame(questionArray[i][0], questionArray[i][1], questionArray[i][2])
}


alert("Okay, " + userName + ", it looks like you've gotten " + correctCount + " answer(s) right out of " + questionArray.length + ".");


if (correctCount === 0) {
  alert("I can't believe you didn't get a single question right! I'm disappointed in you.");
} else if (correctCount === questionArray.length) {
  alert("You got all the questions correct! Incredible!");
}



//bonus work.

var numberGuess = parseInt(prompt("Bonus round: I'm thinking of a number between 1 and 10. Can you guess what it is?", "Enter your guess here. Numeric answers only, please."));

while (numberGuess !== randomNumber) {
  if (numberGuess < randomNumber) {
    numberGuess = parseInt(prompt("That's too low. Guess again!"));

  } else if (numberGuess > randomNumber) {
    numberGuess = parseInt(prompt("That's too high. Guess again!"));

  } else {
    numberGuess = parseInt(prompt("That's not even a number! Try again."));
  }
}
alert("Correct! Wow, " + userName + ", you're a great guesser!");



