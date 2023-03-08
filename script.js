const colors = ["green", "red", "rgba(133,122,200)", "pink", "orange", "violet", "blue", "grey", "lime", "aqua", "brown", "yellow", "khaki","magenta","	teal"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    // get random number between 0-3 
    const randomNumber = Math.floor(Math.random() * colors.length);
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});