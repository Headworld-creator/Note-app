
const localhost = "http://127.0.0.1:5000/";
let notes = []
// VIEW
async function getNotes(){
 let res = await fetch(localhost+"notes")
 notes = await res.json()
 console.log(notes)
 viewNotes(notes)
}

function viewNotes(notes){
 const displayNote = document.getElementById("displayNote")
 displayNote.innerHTML = "";
 notes.forEach(note =>{
  displayNote.innerHTML += `
     <div class="display-head">
      <div class="display-heading" onclick="toggleNote(this)">
       <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" viewBox="0 0 511 511" xml:space="preserve"><g><path d="M439.5,0h-352C74.542,0,64,10.542,64,23.5V48h-8.5c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5H64v25h-8.5   c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5H64v25h-8.5c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5H64v25h-8.5   c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5H64v25h-8.5c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5H64v25h-8.5   c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5H64v25h-8.5c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5H64v25h-8.5   c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5H64v25h-8.5c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5H64v25h-8.5   c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5H64v25h-8.5c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5H64v24.5   c0,12.958,10.542,23.5,23.5,23.5h352c12.958,0,23.5-10.542,23.5-23.5v-464C463,10.542,452.458,0,439.5,0z M448,487.5   c0,4.687-3.813,8.5-8.5,8.5h-352c-4.687,0-8.5-3.813-8.5-8.5V463h8.5c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5H79v-25h8.5   c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5H79v-25h8.5c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5H79v-25h8.5   c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5H79v-25h8.5c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5H79v-25h8.5   c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5H79v-25h8.5c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5H79v-25h8.5   c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5H79v-25h8.5c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5H79v-25h8.5   c4.142,0,7.5-3.358,7.5-7.5S91.642,88,87.5,88H79V63h8.5c4.142,0,7.5-3.358,7.5-7.5S91.642,48,87.5,48H79V23.5   c0-4.687,3.813-8.5,8.5-8.5h352c4.687,0,8.5,3.813,8.5,8.5V487.5z"/><path d="M367.5,328h-10.503l-43.263-137h5.766c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-15.984c-0.028,0-0.056,0-0.084,0   h-31.864c-0.028,0-0.056,0-0.084,0H255.5c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h5.766l-43.263,137H207.5   c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h15.976c0.008,0,0.017,0.002,0.026,0.002c0.008,0,0.016-0.002,0.024-0.002H239.5   c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-5.766l5.375-17.02c0.131,0.006,0.26,0.02,0.392,0.02h96   c0.132,0,0.261-0.013,0.392-0.02l5.375,17.02H335.5c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h15.974   c0.008,0,0.016,0.002,0.024,0.002c0.008,0,0.017-0.002,0.026-0.002H367.5c4.142,0,7.5-3.358,7.5-7.5S371.642,328,367.5,328z    M243.839,296l33.158-105h21.007l33.158,105H243.839z"/><path d="M119.5,32c-4.142,0-7.5,3.358-7.5,7.5v432c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-432   C127,35.358,123.642,32,119.5,32z"/></g></svg>
       <h3> ${note.head} </h3>
      </div>
      
      <div class="options">
       <svg class="edit" xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="512" height="512"><path d="M1.172,19.119A4,4,0,0,0,0,21.947V24H2.053a4,4,0,0,0,2.828-1.172L18.224,9.485,14.515,5.776Z"/><path d="M23.145.855a2.622,2.622,0,0,0-3.71,0L15.929,4.362l3.709,3.709,3.507-3.506A2.622,2.622,0,0,0,23.145.855Z"/></svg>
       <svg onclick="deleteNote(${note.id})" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512"><g><path d="M448,85.333h-66.133C371.66,35.703,328.002,0.064,277.333,0h-42.667c-50.669,0.064-94.327,35.703-104.533,85.333H64   c-11.782,0-21.333,9.551-21.333,21.333S52.218,128,64,128h21.333v277.333C85.404,464.214,133.119,511.93,192,512h128   c58.881-0.07,106.596-47.786,106.667-106.667V128H448c11.782,0,21.333-9.551,21.333-21.333S459.782,85.333,448,85.333z    M234.667,362.667c0,11.782-9.551,21.333-21.333,21.333C201.551,384,192,374.449,192,362.667v-128   c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333V362.667z M320,362.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333v-128c0-11.782,9.551-21.333,21.333-21.333   c11.782,0,21.333,9.551,21.333,21.333V362.667z M174.315,85.333c9.074-25.551,33.238-42.634,60.352-42.667h42.667   c27.114,0.033,51.278,17.116,60.352,42.667H174.315z"/></g></svg>
      </div>
     
     </div>
     <p class="display-body">${note.body}</p> 
 `
 })

}

// CREATE NEW
const noteForm = document.getElementById("addNote");
let title = document.querySelector('[name="title"]');
let content = document.querySelector('[name="body"]');

noteForm.addEventListener("submit", async(e)=>{
 e.preventDefault();

 title = title.value;
 content = content.value;
 res = await fetch(localhost+"notes", {
  method: "POST",
  headers: {"Content-Type":"application/json"},
  body: JSON.stringify({
   head: title,
   body: content
  })
 })
 let response = await res.json()
 console.log(response);
 getNotes()
 window.location.reload()
})

// DELETE
const confirmDelete = document.createElement("div")
confirmDelete.classList.add("confirm-delete-cont");
confirmDelete.innerHTML = `
 <div class="confirm-delete">
  <p>Are you sure you want to delete this project?</p>
  <div class="delete-actions">
   <button id="cancelDel">Cancel</button>
   <button id="confirmDel">Confirm</button>
  </div>
 </div>
`
document.body.appendChild(confirmDelete);
let deletingProjectId = null;

async function deleteNote(id) {
 confirmDelete.style.display = 'flex';
 deletingProjectId = id;

 document.getElementById("confirmDel").addEventListener("click", async()=>{
  if (deletingProjectId === null) return;
   res = await fetch(localhost+`notes/${deletingProjectId}`, {method: "DELETE"})
   delResponse = await res.json()
   console.log(delResponse)
   deletingProjectId = null;

  getNotes();
 })
 
 document.getElementById("cancelDel").addEventListener("click", ()=>{
  document.querySelector(".confirm-delete-cont").style.display = 'none';
  getNotes();
  projectToDelete = null;
})
}

// SEARCH
async function  search_note(keyword) {
 if (keyword === ""){
  getNotes();
  return;
 }

 res = await fetch(`${localhost}/search?q=${encodeURIComponent(keyword)}`);
 notes = await res.json();
 viewNotes(notes);
}

document.querySelector("[name='search_note']").addEventListener("input", (e)=>{
 search_note(e.target.value);
 document.querySelector(".clear-search").style.display = 'block';
});
document.querySelector(".search").addEventListener("submit", (e)=>{
 e.preventDefault();
 search_note(document.querySelector("[name='search_note']").value);
});

// EDIT AND UPDATE
// editingNoteId = null;

// async function updateProject() {
//  const editNote = notes.
// }

// GET NOTES
window.addEventListener("DOMContentLoaded", async()=>{
 getNotes()
});