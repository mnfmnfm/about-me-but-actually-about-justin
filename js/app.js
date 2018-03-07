"use strict";
function quizAboutMe() { // Creating a function so it can be called rather than start right when the browser opens.
    var questAboutMe = [ // Creating an array that will store my questions for the quiz.
        'Do you think I was born in Mexico?', 
        
        'Do you think that I know how to play the clarinet?',

        'Do you think I was once hit in the head with a chunk of asphalt?',

        'Would you believe me if I said I met my wife on \"The Bachelorette\"?',

        'Would believe that I was once struck by lightning?'
    ];

    var correctAnsw = ['n', 'y', 'y', 'n', 'n']; // Creating an array that determines what the right responses should be.

    var incorrectAnsw = ['y', 'n', 'n', 'y', 'y']; // Creating an array allowing me to display the incorrect responses.

    var corrResp = [ // Another array that is storing the responses that will be given when the user answers correctly.
        'I can\'t fool you. I was actually born in the small of Deer Park, Washington.',

        'You are correct. I can also play the saxophone, piano, guitar and ukelele.',

        'Yes. I was actually nailed in the head after a \"friend\" threw a chunk of asphalt toward me in the air.',

        'I know she looks great but I didn\'t meet her on \"The Bachelorette\". You know those things never work out!',

        'Your right. I have never been struck by lightning.'

    ];

    var incorrResp = [ // An array that stores the responses that will be given when the user answers incorrectly.
        'I know it\'s deceiving, but I was actually born in a small town called Deer Park.',
        
        'You might be surprised but I acutally can play the clarinet, as well as the guitar, piano and ukulele.',

        'Believe it or not, I got nailed in the head and recieved 5 stitches.',

        'I know, I think she looks that good too! However, we didn\'t meet on the \"The Bachelorette\". You know those things never work out!',

        'I actually have never been struck by lightning.'

    ];

    var userResp; // An empty array that will be used to store the users responses.

    var shrtUserResp; // A variable that shortens the user's response to just one letter so we can compare 'y' and 'n'.

    var score = 0; // A value we will use to display the score of how many the user got right. 

    for (var i = 0; i < questAboutMe.length; i++) {

        userResp = prompt(questAboutMe[i]);
            console.log(userResp); //Displaying answer given in console.
            if (userResp) {
            shrtUserResp = userResp.substring(0, 1).toLowerCase();
                console.log(shrtUserResp); // Displaying shortened answer to be compared. 
            } else {
                shrtUserResp = 'canceled';
            }

            if (shrtUserResp === correctAnsw[i]) { 
                alert(corrResp[i]);
                score++;
                console.log('Score = ' + score)
            } else if (shrtUserResp === incorrectAnsw[i]) {
                alert(incorrResp[i]);
                console.log('Score = ' + score);
            } else { 
                alert('I\'m not sure what you put but you didn\'t say \"yes\" or \"no\".'); 
                console.log('Score = ' + score);
            }
    }
    
    document.getElementById(score).innerHTML = 'Your Score is ' + score + '/5';

}