let inputBox = document.querySelector('#input-box-id');
let contentBox = document.querySelector('.content-box');

// handle click, input box
inputBox.addEventListener('keyup',function (event) {
   if (event.key == "Enter") {
        addTask(this.value);
        this.value = '';
   }
})


// function for adding tasks
function addTask(task) {
    let div = document.createElement('div');
    div.setAttribute('class','task');
    div.innerHTML = `
        <p id="task-text">${task}</p>
        <i class='fa-solid fa-xmark'></i>
    `;
    accessDiv(div);
    contentBox.appendChild(div); 
    removeDiv(div); 
}

//access div
function accessDiv(div) {
    div.addEventListener('click',function() {
        div.classList.toggle('done');
    })
}

//remove div
function removeDiv(div) {
    div.querySelector('i').addEventListener('click',(e)=> {
        div.remove(div);
    })
}

