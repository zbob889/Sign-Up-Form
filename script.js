let password = document.findElementById('password');
let confirmPassword = document.findElementById('confirmPassword');

password.addEventListener('click', () => {
    if(password.value != confirmPassword.value){
        password.classList.add('error');
        confirmPassword.classList.add('error');
    }else if(password.value === confirmPassword.value){
        password.classList.remove('error');
        confirmPassword.classList.remove('error');
    }
});