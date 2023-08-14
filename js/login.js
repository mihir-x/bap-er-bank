//step-1: add event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    //step-2: get the email address from the input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //step-3: get the password from the input field
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    //step-4: verify email and password
    if(email === 'sontan@bap.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('invalid email or password');
    }
});