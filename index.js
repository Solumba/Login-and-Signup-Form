const loginButton = document.getElementById('toggle-login');
const signupButton = document.getElementById('toggle-signup');
const movingButton = document.getElementById('moving-button');
const form1 = document.getElementById('form-1');
const form2 = document.getElementById('form-2');
const forms = document.getElementById('forms');
console.log(forms)

const moveForm = () => {
    movingButton.style.left = '95px';
    forms.style.left = '-400px'
    setTimeout(()=>{
        movingButton.innerHTML = signupButton.innerHTML;
    }, 500);
}

const revert = () => {
    movingButton.style.left = '0%';
    forms.style.left = '0px';
    setTimeout(()=>{
        movingButton.innerHTML = loginButton.innerHTML;
    }, 500);
}

signupButton.addEventListener('click', moveForm);
loginButton.addEventListener('click', revert);