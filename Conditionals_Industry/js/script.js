//Joseph Pantano 21Aug2014 Conditionals Industry

var width = prompt("How many feet wide will your patio be?"); //width of the patio
var length = prompt("How many feet long will your patio be?"); //length of the patio
var depth = 1/3; //depth of the patio
var height = prompt("Will you have a raised patio? (Yes/No)"); //is the patio on the ground?
var dimensions = width * length * depth; //result

if (height === "No" || height === "no"){ //take user input to determine if the patio is on the ground (yes)
    console.log("Your patio will require " + dimensions + " cubic feet of cement."); //display dimensions of the patio on the ground
}else if (height === "Yes" || height === "yes"){ //take user input to determine if the patio is on the ground (no)
    var trueHeight = prompt("How many feet off of the ground will it be?"); //how high off the ground?
    console.log("Your patio will require " + dimensions + " cubic feet of cement and it will be " + trueHeight + " feet off of the ground."); //display dimensions of the patio above the ground
}else { //catch incompatible user input
    console.log("You aren't really building a patio, are you?"); //let user know they didn't complete the required information
};
