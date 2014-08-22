//Joseph Pantano 21Aug2014 Conditionals Personal

var fname = prompt("Enter your first name:"); //user's first name
var lname = prompt("Enter your last name:"); //user's last name
var dad = "Dan"; //my dad's name
var familyName = ["Pantano", "Alexander", "Dorr"]; //last names of various members of my family
var family; //result

if (fname === dad && lname === familyName[0]){ //are you my father?
    family = "You are my father."; //Yes
}else if (lname === familyName[0] || lname === familyName[1] || lname === familyName[2]) { //could you be in my family?
    family = "You may be in my family."; //yes
}else{ //catch incompatible user input
    family = "You are not in my family."; //you aren't in my family
}
console.log(family); //display result