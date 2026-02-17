const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";

    while(length > password.length){
        password +=allChars[Math.floor(Math.random()*allChars.length)];
        console.log(password);
    }
    console.log(password);
    
    passwordBox.value = password;

    
}

function copy(){
    passwordBox.select();
    document.execCommand("copy");
}


//function works when btn is clicked.
// const btn = document.getElementById("generate");
// btn.addEventListener("click", createPassword);
