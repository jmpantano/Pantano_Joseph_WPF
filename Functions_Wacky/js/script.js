//Joseph Pantano 21Aug2014 Functions Wacky

var guess = prompt("How many molecules are in Leonard Nimoy's butt? \nTake a guess: (Answers are multiplied by 1,000,000)"); // prompt for user input
var estimate = guess * 1000000; // translate the guess

(estimate != "") ? calcMol() : console.log("You didn't input a value! Refresh and try again!"); // make sure the string isn't empty

function calcMol(){ // figure out if the estimate is close or not
    if (estimate < 100000000 || estimate >= 1000000000){
        wrong(); // if not, run wrong
    }else{
        close(); // if close, run close
    };
};

function close(){ // what to do if the estimate is close
    console.log("You could very well be right. Leonard Nimoy probably has about " + estimate + " molecules in his butt."); // print result
};

function wrong(){ // what to do if the estimate is wrong
    console.log("You're way off!! I'm sure that Leonard Nimoy has a completely different number of molecules than " + estimate + " in his butt."); // print result
};
