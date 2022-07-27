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
filter.addEventListener('keyup',filterTask);
document.addEventListener('DOMContentLoaded',getTasks);


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
        storeTaskInLocalStorage(taskInput.value)
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
            removeFromLS(ele)
        }
        //console.log(e.target);
    }
}

function clearTask(e){
    taskList.innerHTML=""
    localStorage.clear();
}

function filterTask(e){
    let test = e.target.value.toLowerCase()
    //console.log(test);
    document.querySelectorAll('li').forEach(task =>{
        let item=task.firstChild.textContent;
        if(item.toLowerCase().indexOf(test)!=-1){
            task.style.display='block';
        }else{
            task.style.display='none';
        }
    });
}

function storeTaskInLocalStorage(task){
    let tasks;
    if (localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}


function getTasks(){
    let tasks;
    if (localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(task =>{
        let li=document.createElement('li');
        li.appendChild(document.createTextNode(task+" "));
        let link=document.createElement('a');
        link.setAttribute('href','#');
        link.innerHTML='x';
        li.appendChild(link);
        taskList.appendChild(li);
    });
}

function removeFromLS(taskItem){
    let tasks;
    if (localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    let li=taskItem;
    li.removeChild(li.lastChild);

    tasks.forEach((task,index)=>{
        if(li.textContent.trim()===task){
            tasks.splice(index,1);
        }
    });
    localStorage.setItem('tasks',JSON.stringify(tasks))
}