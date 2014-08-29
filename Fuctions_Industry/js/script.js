//Joseph Pantano 21Aug2014 Functions Industry


function boxVol(width, height, depth) { // what to do when boxVol is invoked
    boxVol = width * height * depth; // do the math
    console.log("The box is " + boxVol + " feet cubed."); // print result
};

boxVol(prompt("How many feet wide is the box?"), prompt("How tall is the box in feet?"), prompt("How many feet deep is the box?")); // ask user input and invoke boxVol