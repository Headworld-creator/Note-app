
 search = document.querySelector(".search");
 saved = document.querySelector(".display-note");
 add = document.querySelector(".add");
 footer = document.querySelector(".footer")

 displayBody = document.querySelector(".display-body");
 
 document.querySelector(".add-note").addEventListener("click", ()=>{
  search.style.display = "none";
  saved.style.display = "none";
  footer.style.display = "none";
  add.style.display = "block";
 });

 // FOR THE DISPLAY AND MODIFICATION OF THE BODY CONTENT FOR EACH HEADER
 editBtn = document.querySelector(".edit")
 deleteBtn = document.querySelector(".delete")

 function toggleNote(element){
  let body = element.parentElement.nextElementSibling;

  if (body.style.display === "block"){
   body.style.display = "none";

  } else {
   body.style.display = "block";
  }
 }

 function clearSearch(){
  document.querySelector("[name='search_note']").value = '';
  document.querySelector("[name='search_note']").focus();
  document.querySelector(".clear-search").style.display = 'none';
  getNotes();
 }