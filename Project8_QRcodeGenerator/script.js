const api = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const inputBox = document.querySelector("input");
const image = document.querySelector("#qrcode")

async function callApi(){
    if(inputBox.value.trim() === ""){
        alert("You need to input a text or URL to generate QR.");
    }else{
        let call = await fetch(api + inputBox.value);
        image.innerHTML = "";
        let qr = document.createElement("img");
        qr.src = call.url;
        image.appendChild(qr);   
    } 
}

