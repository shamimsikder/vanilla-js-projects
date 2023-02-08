const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Error Message
function showError(input, message){

    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;

}

// Show Success Outline
function showSuccess(input, message){

    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}

// Event Listeners
form.addEventListener('submit', function(e){

    e.preventDefault();

    if(username.value === ''){
        showError(username, 'username is required');
    }

    else{
        showSuccess(username);
    }

    if(email.value === ''){
        showError(email, 'email is required');
    }

    else{
        showSuccess(email);
    }

    if(password.value === ''){
        showError(password, 'Password is required');
    }

    else{
        showSuccess(password);
    }

    if(password2.value === ''){
        showError(password2, ' is required');
    }

    else{
        showSuccess(password2);
    }

});