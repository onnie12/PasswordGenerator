const getBtn = document.getElementById("getBtn");
const password = document.getElementById("textContent");
let pw;
let random = (Math.random() + 1).toString(36).substring(7);

function generate(){
    password.textContent = random;
}