let inputBox = document.querySelector('#input-box-id');
let contentBox = document.querySelector('.content-box');

// handle click, input box
inputBox.addEventListener('keyup',function (event) {
   if (event.key == "Enter") {
        if(this.value === '') {
            alert('please enter something')
        }
        else {
            addTask(this.value);
            this.value = '';
        }
   }
})


// function for adding tasks
function addTask(task) {
    let div = document.createElement('div');
   
    div.setAttribute('class','task');
    div.innerHTML = `
        <p id="task-text">${task}</p>
        <i class='fa-solid fa-xmark' id="remove"></i>
        <i class="fa-solid fa-pen" id="edit"></i>
    `;
    accessDiv(div);
    contentBox.appendChild(div); 
    removeDiv(div);
    editDiv(div)
    
}

//access div
function accessDiv(div) {
    div.addEventListener('click',function() {
        div.classList.toggle('done');
    })
}

//remove div
function removeDiv(div) {
    div.querySelector('#remove').addEventListener('click',()=>{
        div.remove();
    });
}

function editDiv(div){
    
    div.querySelector('#edit').addEventListener('click',(e)=>{
        inputBox.value = div.querySelector('p').innerText;
        inputBox.addEventListener('keyup',(e)=>{
            if (e.key == 'Enter') {
                div.remove()
                
            }
        })

    })

}



