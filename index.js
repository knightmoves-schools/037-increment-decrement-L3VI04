// Initialize counter to 100
let counter = 100;

// Prefix increment: increments first, then assigns
let prefixIncrement = ++counter;

// Postfix increment: assigns first, then increments
let postfixIncrement = counter++;

// Prefix decrement: decrements first, then assigns
let prefixDecrement = --counter;

// Postfix decrement: assigns first, then decrements
let postfixDecrement = counter--;

// Assign the final value of counter to the innerHTML of the element with id "result"
document.getElementById("result").innerHTML = counter;

