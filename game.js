//correctCount keeps track of how many answers the user gets correct
var correctCount = 0

//questionArray stores pairs of questions and answers. Any number of Q/A pairs can be added/removed from here without breaking the script. For best results, keep the answers lowercase
var questionArray = [
  ["Do I have a PS4?", "no"],
  ["Do I like to play disc golf?", "yes"],
  ["Am I good at disc golf?", "no"],
  ["Do I enjoy playing Eldritch Horror?", "yes"]
  //Add more questions in ['question', 'yes/no'] format here
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

alert("Hello " + userName + ", are you ready to play a game? How well do you know me?");




//This for loop runs through the questionArray, checking user's input against the answer
for(i=0; i<questionArray.length; i++) {
  var answer = prompt(questionArray[i][0], "yes/no");
  answer = answerErrorCorrect(answer);
  if (answer === questionArray[i][1]){
    alert("Correct!");
    correctCount++;
  } else {
    alert("I'm sorry, the correct answer was " + questionArray[i][1] + ".");
  }
}

//After the questions have all been asked, the user is alerted the number o correct answers that they got

alert("Okay, " + userName + ", it looks like you've gotten " + correctCount + " answer(s) right out of " + questionArray.length + ".");

//Personalized response based off number of correct answers

if (correctCount === 0) {
  alert("I can't believe you didn't get a single question right! I'm disappointed in you.");
} else if (correctCount === questionArray.length) {
  alert("You got all the questions correct! Incredible!");
} else {
  alert("Not bad");
}

