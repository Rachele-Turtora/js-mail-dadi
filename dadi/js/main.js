"use strict";

const numbers = [1, 2, 3, 4, 5, 6];

const userNumber = Math.ceil(Math.random() * numbers.length);
const computerNumber = Math.ceil(Math.random() * numbers.length);

console.log("Il tuo numero è: ", userNumber);
console.log("Il numero del computer è: ", computerNumber);

if (userNumber === computerNumber) {
    console.log("Parità");
} else if (userNumber > computerNumber) {
    console.log("Hai vinto");
} else {
    console.log("Hai perso");
}