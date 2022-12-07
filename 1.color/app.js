const btn = document.getElementById('btn');
const color = document.getElementById('color');

const getRandomNumberArray = (min, max) => {
    const randomRGBArray = [];

    for (let i = 0; i < 3; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomRGBArray.push(randomNumber);
    }

    return randomRGBArray;
};

btn.addEventListener('click', () => {
    // 랜덤값 추출    
    const rgbList = getRandomNumberArray(0, 255);

    // 이전 방식
    // const r = rgbList[0];
    // const g = rgbList[1];
    // const b = rgbList[2];

    // Destructuring, 구조 분해
    const [r, g, b] = rgbList; // 배열 구조 분해 할당(Array Destructuring)
    const rgbColor = `rgb(${r}, ${g}, ${b})`;

    document.body.style.backgroundColor = rgbColor;
    color.textContent = rgbColor;
    color.style.color = rgbColor;
});
