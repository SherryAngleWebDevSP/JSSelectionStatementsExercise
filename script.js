// Exercise 1: Guessing game

let favNumber = 22;
let min = 1;
let max = 100

//get the user's guess
// returns a string

let guessNumber = prompt('Guess a number between $(min) and$(max).');

//convert to guess a number
guessNumber = parseInt(guessNumber);

//validate Input is a number
if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 100) {
  console.log(
    'You didn't give me a valid number between ${min} and ${max} >:('); 
}
else {
//Game logic with valid input
if (guessNumber == favNumber) {
    console.log("Congrats! You guessed the favorite number");
}
else if (guessNumber > favNumber) {
    console.log("Guess was too high :/. Try again.");
}
else if (guessNumber < favNumber) {
    console.log("Guess was too low :/. Try again");
 }
}

// Exercise 2: Birth Season

let birthMonth = prompt("Please insert your birth month:"); // "July" => "july"

switch (birthMonth.toLowerCase()) {
    case "december":
    case "january":
    case "february":
        console.log("Winter");
        break;
    case "march":
    case "april":
    case "may":
        console.log(Spring);
        break;
    case "june":
    case "july":
    case "august":
        console.log("Summer");    
        break;
    case "september":
    case "october":
    case "november":
        console.log("Fall");
        break;
        default:
            console.log("I don't recognize that month...");
  }

  // Exercise 3: Business Logic between Attire Code

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch(typeId) {
  case "01":
    type = "Tank top";
    break;
  case "02":
    type = "T-Shirt";
    break;
  case "03":
    type = "Long Sleeve"; 
    break;
  case "04":
    type == "Sweat Shirt"; 
    break;
  default:
    type = "Other";
}

switch (colorId){
  case "BL":
    color = "Black";
    break;
  case"BU":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  default:
    color = "White";
}

switch (sizeId) {
  case "5":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);
 



