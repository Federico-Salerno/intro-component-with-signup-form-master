const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const emailAddress = document.getElementById('email');
const password = document.getElementById('password');

const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

const button = document.getElementById('btn')

button.addEventListener('click', (e)=>{
    e.preventDefault();
    validateEmpty(firstName.value, firstName, firstNameError, 'First Name');
    validateEmpty(lastName.value, lastName, lastNameError, 'Last Name');
    validateEmail(email.value, email, emailError);
    validateEmpty(password.value, password, passwordError, 'Password')
});

function validateEmail(valueInput, divInput, divError){
    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if(regExp.test(valueInput) == true){
        hideError(divInput, divError);
    }else{
    showError(divInput, divError, 'Look like this is not an email');
    }
}

function validateEmpty(valueInput, divInput, divError, nameInput){
    if(valueInput.length == 0){
        showError(divInput, divError, `${nameInput} cannot be empty`);
    }else{
        hideError(divInput, divError);
    }
}

function showError(divInput, divError, error){
    divInput.style.border = ' 1px solid red';
    divError.innerHTML = `<img class = "icon-error" src = "./images/icon-error.svg" alt="Error image">
    <p class = "error">${error}</p>`
}

function hideError(divinput, divError){
    divinput.style.border = ' 1px solid hsl(246, 25%, 77%)';
    divError.innerHTML = ''
}