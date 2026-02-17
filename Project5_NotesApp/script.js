const createBtn = document.getElementById("add-btn");
const notesContainer = document.getElementsByClassName("notes_container")[0];
let notes = document.querySelectorAll(".input-box");


function AddNotes() {
    console.log("function call");
    
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contentEditable", "true");
    img.className = "delete-btn";
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
}
// AddNotes();
createBtn.addEventListener("click", AddNotes);

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove()
    }
})
