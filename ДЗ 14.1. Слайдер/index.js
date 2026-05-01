const images = [
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg'
];

let current = 0;

const img = document.getElementById('slider');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const dotsContainer = document.getElementById('dots');

function showSlide(index) {
    img.src = images[index];

    prev.style.display = index === 0 ? 'none' : 'inline';
    next.style.display = index === images.length - 1 ? 'none' : 'inline';

    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.style.background = i === index ? 'black' : 'gray';
    });
}

next.addEventListener('click', () => {
    current++;
    showSlide(current);
});

prev.addEventListener('click', () => {
    current--;
    showSlide(current);
});


images.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = 'dot';
    dot.textContent = '•';
    dot.style.cursor = 'pointer';
    dot.style.margin = '5px';

    dot.addEventListener('click', () => {
        current = i;
        showSlide(current);
    });

    dotsContainer.append(dot);
});

showSlide(current);