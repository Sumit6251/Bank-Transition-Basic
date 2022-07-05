document.querySelector('.btn').addEventListener('click',function(){
    let email = document.querySelector('.email');
    let pass = document.querySelector('.pass');

    let emailValue = email.value;
    console.log(emailValue)
    let passValue = pass.value;
    console.log(passValue)

    if(emailValue == 'Sumit' && passValue == 'Shuvo'){
        window.location.href = 'banking.html'
    }else{
        alert('Please enter correct pass');
    }
})

