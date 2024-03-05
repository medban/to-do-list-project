document.addEventListener('DOMContentLoaded', function() {
 
    const storedUser = 'med';
    const storedPassword = 'mohamed123';

   
    localStorage.setItem('storedUser', storedUser);
    localStorage.setItem('storedPassword', btoa(storedPassword));

    var loginButton = document.querySelector(".btn"); 

    loginButton.addEventListener("click", function(event) {
        event.preventDefault();

        var usernameInput = document.getElementById("usernameInput");
        var passwordInput = document.getElementById("passwordInput");

       
        const retrievedUser = localStorage.getItem('storedUser');
        const retrievedPassword = atob(localStorage.getItem('storedPassword'));

        if (usernameInput.value === retrievedUser && passwordInput.value === retrievedPassword) {
            
            window.location.href="index.html"
        } else {
            alert("Invalid username or password!");
        }
    });
});