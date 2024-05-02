"use strict";

const mails = ["harrypotter@gmail.com", "ronweasley@yahoo.it", "hermionegranger@gmail.com", "dracomalfoy@yahoo.it"];

const userMail = prompt("Qual è la tua email?");
let check = false

for (let i = 0; i < mails.length; i++) {
    if (userMail === mails[i]) {
        check = true
    }
}

if (check == true) {
    console.log("Puoi accedere")
} else {
    console.log("Non puoi accedere")
}