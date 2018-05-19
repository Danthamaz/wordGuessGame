// Sets all initial variables
var wins = 0;
var losses = 0;
var guesses = [];
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Number of maximum wrong guesses per game
var guessesLeft = 9;

// List of possible words to be selected
var words = [
    "wilco",
    "hinder",
    "jet",
    "goldfinger",
    "godsmack",
    "daughtry"
]
var wordChoice;
var underScore;

function newGame() {
    wordChoice = words[Math.floor(Math.random() * words.length)];
    underScore = [];
    for (i = 0; i < wordChoice.length; i++) {
        underScore.push("_");
    }
    guesses = [];
    guessesLeft = 9;
}

// Program game function here...
document.onkeyup = function (event) {
    var charCode = event.keyCode;
    var guess = String.fromCharCode(charCode).toLowerCase();
    console.log(guess);

    if (charCode > 64 && charCode < 91) {
        if (wordChoice.indexOf(guess) > -1) {
            underScore[wordChoice.indexOf(guess)] = guess;
            if (underScore.join('') == wordChoice) {
                wins++;
                newGame();
            }


        } else {
            guesses.push(guess);
            guessesLeft--;
            if (guessesLeft < 1) {
                losses++;
                newGame();
            }
        }
    }

    document.getElementById("main").innerHTML = underScore.join(" ");
    document.getElementById("livesRemaining").innerHTML = "Guesses left: " + guessesLeft;
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("guesses").innerHTML = guesses;
    document.getElementById("losses").innerHTML = "Losses: " + losses;

}


