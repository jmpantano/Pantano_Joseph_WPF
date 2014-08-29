//Joseph Pantano 21Aug2014 Functions Personal

var diskSpace = prompt("How space have you used on your hard drive?"); // ask how much space the user has used
var storage = prompt("How big is your hard drive?"); // how much space do they have?
var perCent = (diskSpace / storage) * 100; // calculate the percentage of space used
var goodAlloc = function(){ //what to do if the drive is less than half full
    console.log("You have " + perCent + "% full. You're doing great!"); // print result
}
var badAlloc = function(){ // what to do if the drive is more than half full
    console.log("You have " + perCent + "% full. You should buy a new hard drive.");
}

if (diskSpace === "" || storage === ""){
    alert("You must enter a value for both prompts.");
}

if (perCent < 50){ // determine the drive allocation
    goodAlloc(); // run goodAlloc
}else if (perCent > 50){ // determine the drive allocation
    badAlloc(); // run badAlloc
}else {
    console.log("You have nothing to worry about. Your drive is only half full.") // print result for exactly half full
};