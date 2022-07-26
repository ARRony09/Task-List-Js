//Define UI Element
let form=document.querySelector('#task_form');
let taskList=document.querySelector('ul');
let clear=document.querySelector('#clear');
let filter=document.querySelector('#filter');
let taskInput=document.querySelector('#input1');

//EventListener

form.addEventListener('submit',addTask);
taskList.addEventListener('click',removeTask);
clear.addEventListener('click',clearTask);


//Function

function addTask(e){
    if(taskInput.value=== ''){
        alert('Add a task!');
    }else{
        let li=document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value+" "));
        let link=document.createElement('a');
        link.setAttribute('href','#');
        link.innerHTML='x';
        li.appendChild(link);
        taskList.appendChild(li);
        taskInput.value='';
    }
    e.preventDefault();
}

function removeTask(e){
    if(e.target.hasAttribute('href')){
        if(confirm('Are you Sure?')){
            //console.log(e.target)
            let ele =e.target.parentElement;
            ele.remove()
            //console.log(ele);
        }
        //console.log(e.target);
    }
}

function clearTask(e){
    taskList.innerHTML=""
}