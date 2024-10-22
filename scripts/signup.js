document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name').value;
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    if (localStorage.getItem('email') === email) {
        errorMessage.style.display = 'block'; 
        successMessage.style.display = 'none'; 
    } else {
       
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('name', name);
        
        successMessage.style.display = 'block'; 
        errorMessage.style.display = 'none'; 
       
        document.getElementById('signupForm').reset();
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


