// Sets all initial variables
var wins = 0;
var losses = 0;

// Number of maximum wrong guesses per game
var maxErrors = 9;

// Variables to get information from HTML
var activeWordElement = document.getElementById("activeWord");
var guessesElement = document.getElementById("guesses");
var errorsElement = document.getElementById("errorsNumber");
var winsElement = document.getElementById("winsNumber");
var lossesElement = document.getElementById("lossesNumber");

// Alphabet array for guesses
var guessOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Initial text to start game
var pressAnyKeyToPlay = [
    " _____                                         _                _                _",             
    "|  __ \                                       | |              | |              | |",            
    "| |__) | __ ___  ___ ___    __ _ _ __  _   _  | | _____ _   _  | |_ ___    _ __ | | __ _ _   _", 
    "|  ___/ '__/ _ \/ __/ __|  / _` | '_ \| | | | | |/ / _ \ | | | | __/ _ \  | '_ \| |/ _` | | | |",
    "| |   | | |  __/\__ \__ \ | (_| | | | | |_| | |   <  __/ |_| | | || (_) | | |_) | | (_| | |_| |",
    "|_|   |_|  \___||___/___/  \__,_|_| |_|\__, | |_|\_\___|\__, |  \__\___/  | .__/|_|\__,_|\__, |",
    "                                        __/ |            __/ |            | |             __/ |",
    "                                       |___/            |___/             |_|            |___/"
];

// After Loss
var = youLose = [
    "__     __           _                    _",
    "\ \   / /          | |                  | |",
    " \ \_/ /__  _   _  | |     ___  ___  ___| |",
    "  \   / _ \| | | | | |    / _ \/ __|/ _ \ |",
    "   | | (_) | |_| | | |___| (_) \__ \  __/_|",
    "   |_|\___/ \__,_| |______\___/|___/\___(_)"
]

// After Win
var = youWin = [
    "__     __          __          ___       _",
    "\ \   / /          \ \        / (_)     | |",
    " \ \_/ /__  _   _   \ \  /\  / / _ _ __ | |",
    "  \   / _ \| | | |   \ \/  \/ / | | '_ \| |",
    "   | | (_) | |_| |    \  /\  /  | | | | |_|",
    "   |_|\___/ \__,_|     \/  \/   |_|_| |_(_)"
]

var game = new wordGuess();

document.onkeyup = function (event) {
    var userGuess = event.key;

    if (!game.gameOver) {
        if (validGuesses.includes(userGuess) && !game.guessedLetters.includes(userGuess)) {
            game.checkGuess(userGuess);
        }
    } else {
        game = new wordGuess();
        game.updatePageData();
    }
} 

function wordGuess() {
    // List of possible words 
	this.wordList = [
        "Cherry"
	];

	this.word = this.wordList[Math.floor(Math.random() * this.wordList.length)];
	this.guessedLetters = [];
	this.errors = 0;
	this.visibleLetters = [];
	this.gameOver = false;
	this.alertLines = emptyAlert;
	for (var i = 0; i < this.word.length; i++) {
		this.visibleLetters[i] = (false);
	}
}

wordGuess.prototype.checkGuess = function(char) {
	this.guessedLetters.push(char);

	var isInWord = false;
	for (var i = 0; i < this.word.length; i++) {
		if (this.word.charAt(i) === char) {
			isInWord = true;
			this.visibleLetters[i] = true;
		}
	}
	if (!isInWord) {
		this.errors++;
	}

	if (this.errors >= maxErrors) {
		losses++;
		this.alertLines = youLose;
		this.gameOver = true;
	}

	if (!this.visibleLetters.includes(false)) {
		wins++;
		this.alertLines = youWin;
		this.gameOver = true;
	}

	game.updatePageData();
};

wordGuess.prototype.updatePageData = function() {
	var tempString = "";
	for (var i = 0; i < this.visibleLetters.length; i++) {
		tempString += ((this.visibleLetters[i] || this.gameOver) ? this.word.charAt(i).toUpperCase() : "_");
		if (i < (this.visibleLetters.length - 1)) tempString += " ";
	}
	activeWordElement.textContent = tempString;

	tempString = "";
	for (var i = 0; i < this.guessedLetters.length; i++) {
		tempString += (this.guessedLetters[i].toUpperCase());
		if (i < (this.guessedLetters.length - 1)) tempString += " ";
	}
	for (var i = tempString.length; i < 51; i++) {
		tempString += " ";
	}
	guessesElement.textContent = tempString;

	tempString = this.errors + " / " + maxErrors;
	for (var i = tempString.length; i < 32; i++) {
		tempString += " ";
	}
	errorsElement.textContent = tempString;

	tempString = wins + "";
	for (var i = tempString.length; i < 45; i++) {
		tempString += " ";
	}
	winsElement.textContent = tempString;

	tempString = losses + "";
	for (var i = tempString.length; i < 43; i++) {
		tempString += " ";
	}
	lossesElement.textContent = tempString;

	for (var i = 0; i < alertLineElements.length; i++) {
		alertLineElements[i].textContent = (this.alertLines[i]);
	}
}

game.updatePageData();
