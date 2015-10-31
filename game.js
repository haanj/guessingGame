//correctCount keeps track of how many answers the user gets correct
var correctCount = 0

//questionArray stores Q/A sets.
var questionArray = [
//['question', 'yes/no (lowercase)', 'response to user's answer']
  ["Do I have a PS4?", "no", "I do not have a PS4."],
  ["Do I like to play ski?", "yes", "I do like to ski. I hope the season's better this year."],
  ["Am I good at disc golf?", "no", "I like to play, but I'm absolutely terrible at it."],
  ["Do I enjoy playing Eldritch Horror?", "yes", "I do enjoy Eldritch Horror; it's probably one of my favorites."]
  //Add more questions here, if desired.
]


//answerErrorCorrect will standardize user's yes/no answer
function answerErrorCorrect(ans) {
  var ansL = ans.toLowerCase(); //lowercases answer

  if (
      ansL === "yes"  ||
      ansL === "y"    ||
      ansL === "affirmative"  ||
      ansL === "ys"   ||
      ansL === "si"   ||
      ansL === "oui"  ||
      ansL === "ouais" ||
      ansL === "yes!"
      ) {
    return "yes"; //returns yes if user types in "yes, with some variations allowed"

  } else if (
      ansL === "no"  ||
      ansL === "n"    ||
      ansL === "negative"  ||
      ansL === "non"  ||
      ansL === "ouais" ||
      ansL === "no!"
      ) {
    return "no"; //returns "no" if user types "no", with some variations allowed"
  } else {
    alert("I don't understand your answer and will have to count it wrong.")
    return "WRONG"
  }
}


var userName = prompt("Hello, what is your name?", "Type your name here");

if (userName === "Rick" || userName === "rick") {
  alert("Alright! Let's get schwifty!")
} else {
alert("Hello " + userName + ", are you ready to play a game? How well do you know me?");
}


//This for loop runs through the questionArray, checking user's input against the answer
for(i=0; i<questionArray.length; i++) {
  var answer = prompt(questionArray[i][0], "yes/no");
  answer = answerErrorCorrect(answer); //runs answer through basic error correction function
  if (answer === questionArray[i][1]){
    alert("Correct! " + questionArray[i][2]);
    correctCount++;
  } else {
    alert("I'm sorry " + userName + ", that's incorrect. " + questionArray[i][2] + ".");
  }
}

//After the questions have all been asked, the user is alerted the number o correct answers that they got

alert("Okay, " + userName + ", it looks like you've gotten " + correctCount + " answer(s) right out of " + questionArray.length + ".");

//Personalized response based off number of correct answers

if (correctCount === 0) {
  alert("I can't believe you didn't get a single question right! I'm disappointed in you.");
} else if (correctCount === questionArray.length) {
  alert("You got all the questions correct! Incredible!");
}

//bonus work.
var randomNumber = Math.floor(Math.random() * 10) + 1;
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


