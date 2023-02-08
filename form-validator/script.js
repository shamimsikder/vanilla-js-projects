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

// Check Required Fields

function checkRequired(inputArr){

    inputArr.forEach(function(input) {
        
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is Required`);
        }

        else{
            showSuccess(input);
        }

    });

}

//Check Input Length

function checkLength(input, min, max){

    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    }

    else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max} character`);
    }

    else{
        showSuccess(input);
    }

}

//Check Password Match

function checkPasswordMatch(input1, input2){

    if(input1.value !== input2.value){
        showError(input2, 'Password do not match');
    }

    else if(input1.value.length && input2.value.length < 6){
        showError(input2, "Password must be at least 6 characters")
    }

}

//Get Field Name

function getFieldName(input){

    return input.id.charAt(0).toUpperCase() + input.id.slice(1);

}

// Event Listeners
form.addEventListener('submit', function(e){

    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 25);
    checkLength(password, 6, 15);
    checkPasswordMatch(password, password2);

});

/*form.addEventListener('submit', function(e){

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

});*/