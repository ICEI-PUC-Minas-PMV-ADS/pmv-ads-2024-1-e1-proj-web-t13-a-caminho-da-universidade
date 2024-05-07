const name = document.querySelector('#name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const passwordConfirmation = document.querySelector('#passwordConfirmatio')

function hasSpecialChar(password) {
    const specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}']
    for (let i = 0; i < password.length; i++) {
        if (password.includes(specialChar[i])) {
            return true
        }
    }

    return false
}

function passwordMatch() {
    return password.value == passwordConfirmation.value
}

function validatePassword(password)  {
    const passwordValue = password.value
    if(passwordValue.length >= 8 && hasSpecialChar(passwordValue)) {
        return true
    } else {
        false
    }    
}

password.addEventListener('input', () => {
    if(validatePassword() && passwordMatch()) {
        errorMessage.style.display = 'none'
    } else {
        errorMessage.style.display = 'block'
        errorMessage.textContent = 'A senha deve ter no mínimo 8 caracteres e conter pelo menos um caracter especial'
    }
})

passwordConfirmation.addEventListener('input', () => {
    if(passwordMatch() && validatePassword()) {
        errorMessage.style.display = 'none';
        errorMessage.textContent = 'as senhas não conferem'
    }
});