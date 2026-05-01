let link = '';

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

btn1.addEventListener('click', function () {
    const userLink = prompt('Введите ссылку:');

    if (userLink) {
        link = userLink;
    }
});

btn2.addEventListener('click', function () {
    if (link) {
        window.location.href = link;
    } else {
        alert('Сначала введите ссылку');
    }
});