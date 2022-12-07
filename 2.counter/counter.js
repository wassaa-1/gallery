const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');
let number = document.querySelector('p');
let a = 0;

function down() {
    a = Number(number.textContent);
    number.textContent = a - 1;
    if (a - 1 < 0) {
        number.setAttribute('class', 'text-[#148CFF] text-[6rem]')
    } else if (a - 1 === 0) {
        number.setAttribute('class', 'text-[#21dc6d] text-[6rem]')
    }
}

function up() {
    a = Number(number.textContent);
    number.textContent = a + 1;
    if (a + 1 > 0) {
        number.setAttribute('class', 'text-[#ff0000] text-[6rem]')
    } else if (a + 1 === 0) {
        number.setAttribute('class', 'text-[#21dc6d] text-[6rem]')
    }
}

function zero() {
    number.textContent = 0;
    number.setAttribute('class', 'text-[#21dc6d] text-[6rem]')
}

decrease.addEventListener('click', down);
reset.addEventListener('click', zero);
increase.addEventListener('click', up);