//Joseph Pantano 13Aug2014 Expressions Worksheet

//Dog Years
var years = 1; //human years
var dogYears = years * 7; //dog years
var sparkyAge = "Sparky is " + years + " human years old, which is " + dogYears + " in dog years."; //Sparky's age
console.log(sparkyAge); //print the var sparkyAge to the console

//Slice of Pie Part 1
var pizza = 4; //number of pizzas
var slices = 10; //number of slices per pizza
var people = 5; //number of people at the party
var slicesEaten = pizza * slices / people; //how many slices did they eat?
console.log("Each person ate " + slicesEaten + " slices of pizza at the party.") //print "Each person ate 8 slices of pizza at the party." to the console

//Slice of Pie Part 2
var sparkySlice = pizza * slices % people; //find the remainder of whole slices
console.log("Sparky got " + sparkySlice + " slices of pizza."); //print "Sparky got 0 slices of pizza." to the console

//Average Shopping Bill
var groceryCost = [100, 87, 120, 96, 114]; //array holding last 5 weeks of grocery bills
var totalCost = groceryCost[0] + groceryCost[1] + groceryCost[2] + groceryCost[3] + groceryCost[4]; //total of grocery bills
var avgCost = totalCost / 5; //divide totalCost by 5 to find average
console.log("You have spent a total of $" + totalCost + " on groceries over 5 weeks. That's an average of $" + avgCost + " per week."); //print "You have spent a total of $517 on groceries over 5 weeks. That's an average of $103.4 per week." to the console

//Discounts
var item = "midi controller"; //set item to the string "midi controller"
var price = 75; //costs $75
var discount = 10; //a 10% discount
var tax = 8 //8% tax
var totalPrice = price * ((100 - discount) / 100) * ((tax + 100) / 100); //calculate total price
var noTax = price * ((100 - discount) / 100); //total price without tax
console.log("Your " + item + " was originally $" + price + ", but after a " + discount + "% discount, it is now $" + noTax + " without tax, and $" + totalPrice + " with tax."); //print "Your midi controller was originally $75, but after a 10% discount, it is now $67.5 without tax, and $72.9 with tax." to the console
