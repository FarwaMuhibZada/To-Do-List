const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const btnAdd = document.getElementById("btn-add");
 



btnAdd.addEventListener("click",function(){
    if(inputBox.value === ''){
        alert("you must enter a task.");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.append(li);
        let deleteBtn = document.createElement("button");

deleteBtn.innerHTML = "Delete";
       
        li.appendChild(deleteBtn);
    }
    inputBox.value ="";
});


listContainer.addEventListener("click",function(e){
 if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
 }else if(e.target.tagName === "BUTTON"){
    e.target.parentElement.remove();
 }

 console.log(e);

},false);