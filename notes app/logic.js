let noteSection=document.querySelector(".mainContainer");
let addButton=document.querySelector(".btn");
let notesArea=document.querySelector(".notesArea");
let deleteButton=document.querySelector(".del");

let add=()=>{
    let newNotes=document.createElement('div');
    newNotes.className="notes";

    noteSection.appendChild(newNotes);

    let newTextArea=document.createElement("textarea");
    newNotes.appendChild(newTextArea);
    newTextArea.className="notesArea";

    let delButton=document.createElement("button");
    newNotes.appendChild(delButton);
    delButton.className="del";
    delButton.innerText="Delete";
    delButton.addEventListener("click", () => noteSection.removeChild(newNotes));
}
 addButton.addEventListener("click",add);





