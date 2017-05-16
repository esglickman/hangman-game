var wordGuess = ["lenovo", "bootcamp",
 "vermont", "chipotle"];

var random = Math.floor((Math.random()*(wordGuess.length-1)));

var empty = [];

var nothing = "";

var pickWord = wordGuess[random];

var wordLength = [pickWord.length];

var fehler = 0;
//when the game starts, 8 guesses are allowed, wordUsed will be used 
//to keep track of the words used, the console should log the guessed words
function lines() {

nothing= wordGuess[Math.floor(Math.random() * wordGuess.length)];

empty = [];
for (i=0; i <nothing.length; i++) {
	empty[i] = "_";
}
	document.getElementById("dashes").innerHTML = empty.join(" ");
	document.getElementById("wordss").innerHTML = "Press a key to start!";

}

lines();
