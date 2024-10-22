
document.addEventListener('DOMContentLoaded', function() {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (storedEmail) {
        document.getElementById('email').value = storedEmail;
    }
    if (storedPassword) {
        document.getElementById('password').value = storedPassword;
    }
});

document.getElementById('signinForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (email === localStorage.getItem('email') && password === localStorage.getItem('password')) {
        alert('Sign In Successful!');
        
    } else {
       
        errorMessage.style.display = 'block';
    }
});



const backToTopButton = document.getElementById('back-to-top');


window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});


