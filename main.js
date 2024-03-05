var inputBox= document.getElementById("inputBox");
var listTasks= document.getElementById("list-tasks")
var countValue= document.getElementsByClassName("count-task")[0] 
let taskCount = 0 

function Count(){ 
    countValue.innerText= taskCount
}

function addTask(){
    if(inputBox.value ===''){
        alert("You have not added any task")
    }else{
        let li = document.createElement("li")
        li.innerHTML=inputBox.value
        listTasks.appendChild(li)
        let span= document.createElement("span")
        span.innerHTML= "\uD83D\uDDD1"
        li.appendChild(span)
  
    }
    inputBox.value=''
   
}

listTasks.addEventListener("click", function(x) {
    if (x.target.tagName === "LI") {
        x.target.classList.toggle("check-task");
        if (x.target.classList.contains("check-task")) {
            taskCount++;
            
        } else {
            taskCount--;
        }
        Count();
       
    } else if (x.target.tagName === "SPAN") {
        if (x.target.parentElement.classList.contains("check-task")) {
            taskCount--;
        }
        x.target.parentElement.remove();
        Count();
        
    }
    
}, false);

 

