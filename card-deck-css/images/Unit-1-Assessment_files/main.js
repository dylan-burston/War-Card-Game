const counterEl = document.getElementById('counter');
const subtractEl = document.querySelector('.subtractBtn');
const addBtnEl = document.querySelector('.addBtn');
const inputEl = document.querySelector('.input');

let count = 0;

addBtnEl.addEventListener('click', function() {
    count = count + parseInt(inputEl.value);
    counterEl.innerText = count;
    red(count);
});

subtractEl.addEventListener('click', function() {
    counterEl.innerText = count;
    count = count - parseInt(inputEl.value);
    red(count);
});

function red(){
    if (count < 0) {
        counterEl.style.color = "red";
    } else {
        counterEl.style.color = "black";
    }
}