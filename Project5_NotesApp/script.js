const createBtn = document.getElementById("add-btn");
const notesContainer = document.querySelector(".notes_container");
let notes = document.querySelectorAll(".input-box");

function saveData(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}
function showTask(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showTask();

function AddNotes() {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contentEditable", "true");
    img.className = "delete-btn";
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
    saveData();
}
createBtn.addEventListener("click", AddNotes);

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove()
        saveData();
    }else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach( nt => {
            nt.onkeyup = function(){
                saveData();
            }
        })
    }
})

document.addEventListener("keydown" , event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
