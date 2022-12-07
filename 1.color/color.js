const btn = document.getElementById('btn');
let rand1;
let rand2;
let rand3;
let i = document.querySelector('i');
const body = document.querySelector('body');

function changeColor() {
    rand1 = Math.floor(Math.random() * 255);
    rand2 = Math.floor(Math.random() * 255);
    rand3 = Math.floor(Math.random() * 255);
    i.textContent = `rgb(${rand1}, ${rand2}, ${rand3})`;
    i.style = (`color: rgb(${rand1}, ${rand2}, ${rand3})`);
    body.style = `background-color: rgb(${rand1}, ${rand2}, ${rand3})`;
}

btn.addEventListener('click', changeColor);