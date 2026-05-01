const form = document.getElementById('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let message = document.getElementById('message').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;

    let isValid = true;

    document.getElementById('nameError').textContent = '';
    document.getElementById('messageError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('emailError').textContent = '';

    if (name.trim() === '') {
        document.getElementById('nameError').textContent = 'Enter name';
        isValid = false;
    }

    if (message.length < 5) {
        document.getElementById('messageError').textContent = 'Min 5 symbols';
        isValid = false;
    }

    let phoneRegex = /^\+380\d{9}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').textContent = 'Format: +380XXXXXXXXX';
        isValid = false;
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email';
        isValid = false;
    }

    if (isValid) {
        console.log('Name:', name);
        console.log('Message:', message);
        console.log('Phone:', phone);
        console.log('Email:', email);
    }
});