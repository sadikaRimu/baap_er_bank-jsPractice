document.getElementById('btn-submit').addEventListener('click', function () {

    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(password);
    if (email === 'ab@c.com' && password === 'abc') {
        console.log('user valid');
        window.location.href = 'bank.html';
    }
    else {
        alert('user invalid');
    }
});



