//Joseph Pantano 21Aug2014 Conditionals Wacky

var distance = prompt("How many feet did you leap?"); //user inputs how far they jumped
var width = 8; //the width of the chasm
var trolls = prompt("How many trolls are you running from?"); //user inputs how many trolls are chasing them
var leap; //did the user get away?

leap = (distance <= width && trolls > 5) ? "The trolls had you for lunch! Such a sad day..." : "You escaped the charging trolls!"; //determine the value of the variable leap to calculate if the user got away
console.log(leap); //display results