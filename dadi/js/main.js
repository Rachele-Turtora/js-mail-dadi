"use strict";

const valoreMaxDadi = 6
const userNumber = Math.ceil(Math.random() * valoreMaxDadi);
const computerNumber = Math.ceil(Math.random() * valoreMaxDadi);

console.log("Il tuo numero è: ", userNumber);
console.log("Il numero del computer è: ", computerNumber);

if (userNumber === computerNumber) {
    console.log("Parità");
} else if (userNumber > computerNumber) {
    console.log("Hai vinto");
} else {
    console.log("Hai perso");
}