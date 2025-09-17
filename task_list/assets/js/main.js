const inputTask = document.querySelector('.input-task');
const btnTask = document.querySelector('.btn-task');
const tasks = document.querySelector('.tasks');

function createLi() {
    const li = document.createElement('li')
    return li
}

function createTask(text) {
    const li = createLi();
    li.innerText = text;
    tasks.appendChild(li)
}

btnTask.addEventListener('click', function(){
    if (!inputTask.value) return;
    createTask(inputTask.value);
})

inputTask.addEventListener('keypress', function(e){
    if (!inputTask.value) return;
    if (e.keyCode === 13) {
        createTask(inputTask.value);
    }
})