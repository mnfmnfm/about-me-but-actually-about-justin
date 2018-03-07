"use strict";

// TODO: Variable for guitar answer
var numGuitars = 0;

function quizAboutMe() { // Creating a function so it can be called rather than start right when the browser opens.
  var questAboutMe = [ // Creating an array that will store my questions for the quiz.
    'Do you think I was born in Mexico?', 

    'Do you think that I know how to play the clarinet?',

    'Do you think I was once hit in the head with a chunk of asphalt?',

    'Would you believe me if I said I met my wife on "The Bachelorette"?',

    'Would believe that I was once struck by lightning?',

    'If you had to guess, how many guitars do you think I have?'
  ];

  var correctAnsw = ['n', 'y', 'y', 'n', 'n', numGuitars]; // Creating an array that determines what the right responses should be.

  var incorrectAnsw = ['y', 'n', 'n', 'y', 'y']; // Creating an array allowing me to display the incorrect responses.

  var corrResp = [ // Another array that is storing the responses that will be given when the user answers correctly.
    'I can\'t fool you. I was actually born in the small town of Deer Park, Washington.',

    'You are correct. I can also play the saxophone, piano, guitar and ukelele.',

    'Yes. I was actually nailed in the head after a "friend" threw a chunk of asphalt toward me in the air.',

    'I know she looks great but I didn\'t meet her on "The Bachelorette". You know those things never work out!',

    'Your right. I have never been struck by lightning.',

    'Good Guess! I have ' + numGuitars + '.'

  ];

  var incorrResp = [ // An array that stores the responses that will be given when the user answers incorrectly.
    'I know it\'s deceiving, but I was actually born in a small town called Deer Park.',
    
    'You might be surprised but I acutally can play the clarinet, as well as the guitar, piano and ukulele.',

    'Believe it or not, I got nailed in the head and recieved 5 stitches.',

    'I know, I think she looks that good too! However, we didn\'t meet on the "The Bachelorette". You know those things never work out!',

    'I actually have never been struck by lightning.',

    'Sorry! I actually have ' + numGuitars

  ];

  var userResp; // A variable that will be used to gather the user's response.

  var shrtUserResp; // A variable that shortens the user's response to just one letter so we can compare 'y' and 'n'.

  var score = 0; // A value we will use to display the score of how many the user got right.

  alert('You\'re ready to take the quiz! Please answer the following questions with "yes" or "no".'); // An alert that begins the quiz and tells the user to enter "yes" or "no".

  for (var i = 0; i < questAboutMe.length; i++) {

    if (i === 5) { // Adjust questioning for Question#6 
      
      var numOfGuesses = 5;
      
      while (numOfGuesses > 0) {
        var userNumResp = prompt(questAboutMe[i] + ' (it\'s between 1 and 50) You have ' + numOfGuesses + ' out of 5 guesses left.');
        console.log('This is the user\'s input: ' + userNumResp);
        userNumResp = parseInt(userNumResp, 10); // Now user input is an integer
        console.log('This is the user\'s input as an integer: ' + userNumResp);

        if (userNumResp === numGuitars){
          alert('Nice guess! You are correct!');
          score++;
          console.log('The user\'s score so far: Score = ' + score);
          break;
        } else {
          numOfGuesses--;
        }
      }

    } else {

      userResp = prompt(questAboutMe[i]);
      console.log('This is the user\'s response: ' + userResp); //Displaying answer given in console.

      if (userResp) { // This first if else is used to handel the \'null\' or \'undefined\'. If the user enters something userResp is equal to that but if box is empty or they cancel userResp = 'canceled'.

        shrtUserResp = userResp.substring(0, 1).toLowerCase();
        console.log('This is the user\'s shortened response:  ' + shrtUserResp); // Displaying shortened answer to be compared.
      } else {
        shrtUserResp = 'c'; // If the user cancels or doesn't type antyhing we set shrtUserResp to 'c' for 'canceled'.
      }

      if (shrtUserResp === correctAnsw[i]) { // This if else if statement is used to go through questions, gather response, and display correct or incorrect messages.
        alert(corrResp[i]);
        score++; // Adding correct response to the user's score
        console.log('The user\'s score so far: Score = ' + score); // Displaying current score in the console
      } else if (shrtUserResp === incorrectAnsw[i]) {
        alert(incorrResp[i]); // Firing incorrect response if user is wrong.
        console.log('The user\'s score so far: Score = ' + score); // Not adding to score but still displaying their current score even if they get it wrong.
      } else { 
        alert('I\'m not sure what you put but you didn\'t say "yes" or "no".'); 
        console.log('The user\'s score so far: Score = ' + score);
      }
    }
  }
  document.getElementById('takeQuiz').style.display = 'none'; // Removing "Take the quiz" button after quiz is taken.
  document.getElementById('scoreHead').style.display = 'inherit'; // Displaying Score Header after quiz is taken.
  document.getElementById('score').innerHTML = score + '/5'; // Displaying Total Score after quiz is taken.

}