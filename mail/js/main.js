"use strict";

const mails = ["harrypotter@gmail.com", "ronweasley@yahoo.it", "hermionegranger@gmail.com", "dracomalfoy@yahoo.it"];

let check = false;
const checkMail = document.querySelector(".send")

checkMail.addEventListener("click", function() {

    const userMail = document.getElementById("user-mail").value;
    for (let i = 0; i < mails.length; i++) {
        if (userMail === mails[i]) {
            check = true;
            break;
        }
    }

    if (check == true) {
        console.log("Puoi accedere");
    } else {
        console.log("Non puoi accedere");
    }

})


