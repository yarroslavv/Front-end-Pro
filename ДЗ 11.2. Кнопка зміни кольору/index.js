const text = document.getElementById('text');
const btn = document.getElementById('btn');

let isRed = false;

btn.addEventListener('click', function () {
    if (isRed) {
        text.style.color = 'black';
    } else {
        text.style.color = 'red';
    }

    isRed = !isRed;
});