let count = 0;

const countValue = document.getElementById('value');
const countButtons = document.querySelectorAll('button');

countButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const currentTarget = event.currentTarget;
        const style = currentTarget.classList[1];

        count = style !== 'reset' ? (count = style === 'decrease' ? --count : ++count) : 0;

        let cvColor = '';
        cvColor = count !== 0 ? (cvColor = count > 0 ? 'green' : 'red') : 'grey';

        countValue.textContent = count;
        countValue.style.color = cvColor;
    });
});