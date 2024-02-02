document.addEventListener('DOMContentLoaded', function() {
var loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var emailInput = this.elements.email;
    var passwordInput = this.elements.password;

    var emailValue = emailInput.value.trim();
    var passwordValue = passwordInput.value.trim();

    if (!emailValue || !passwordValue) {
    alert('All form fields must be filled in');
    return;
    }

    var formData = {
    email: emailValue,
    password: passwordValue
    };

    console.log(formData);

    this.reset();
});
});