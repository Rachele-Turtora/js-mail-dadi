"use strict";

const userNumber = Math.ceil(Math.random() * 6);
const computerNumber = Math.ceil(Math.random() * 6);

console.log("Il tuo numero è: ", userNumber);
console.log("Il numero del computer è: ", computerNumber);

if (userNumber === computerNumber) {
    console.log("Parità");
} else if (userNumber > computerNumber) {
    console.log("Hai vinto");
} else {
    console.log("Hai perso");
}