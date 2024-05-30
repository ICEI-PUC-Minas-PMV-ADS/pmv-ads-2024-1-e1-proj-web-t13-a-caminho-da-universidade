const name = document.querySelector('#name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const passwordConfirmation = document.querySelector('#passwordConfirmation')
const form = document.querySelector('#formulario')
const errorMessage = document.querySelector('#errorMessage')

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
    return password.length >= 8 && hasSpecialChar(password)
}

function passwordConfirmationV() {
    if(passwordMatch() && validatePassword(passwordConfirmation.value)) {
        errorMessage.style.display = 'none'
        return true;
    } else {
        errorMessage.style.display = 'block'
        errorMessage.textContent = 'as senhas não conferem'
        return false;
    }
}

function passwordV() {
    if(validatePassword(password.value)) {
        errorMessage.style.display = 'none'
        return true;
    } else {
        errorMessage.style.display = 'block'
        errorMessage.textContent = 'A senha deve ter no mínimo 8 caracteres e conter pelo menos um caracter especial'
        return false;
    }
}

form.addEventListener("submit", function(cadastro) {
    cadastro.preventDefault();
    
    if(!passwordV() && !passwordConfirmationV()) {
        return;
    }
    let lastGeneratedId = parseInt(localStorage.getItem("lastId")) || 0;
    let newId = lastGeneratedId + 1;
    localStorage.setItem("lastId", newId);
    let users = new Array();
    
    if(localStorage.hasOwnProperty("users")) {
        users = JSON.parse(localStorage.getItem("users"));
        console.log({users});
    }
    
    users.push({
        id: newId,
        name: name.value, 
        email: email.value, 
        password: password.value
    });

    /*const user = {
        id: newId,
        name: name.value, 
        email: email.value, 
        password: password.value
    }
    users.push(user);*/
    
    localStorage.setItem("users", JSON.stringify(users));
})

/*password.addEventListener('input', () => {
    if(validatePassword(password.value)) {
        errorMessage.style.display = 'none'
    } else {
        errorMessage.style.display = 'block'
        errorMessage.textContent = 'A senha deve ter no mínimo 8 caracteres e conter pelo menos um caracter especial'
    }
})

passwordConfirmation.addEventListener('input', () => {
    if(passwordMatch() && validatePassword(passwordConfirmation.value)) {
        errorMessage.style.display = 'none'
    } else {
        errorMessage.style.display = 'block'
        errorMessage.textContent = 'as senhas não conferem'
    }
})*/