const isAdmin = "GJVTPP"

const name = document.querySelector('#name')
const codeAdm = document.querySelector('#isAdmin')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const passwordConfirmation = document.querySelector('#passwordConfirmation')
const dataNasc = document.querySelector("#dataDeNascimento")
const sexo = document.querySelector('#sexo')
const estado = document.querySelector('#estado')
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
    console.log("Dentro do password match");
    console.log(`${password.value} e ${passwordConfirmation.value}`);
    console.log(password.value === passwordConfirmation.value);
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

function successMsg() {

    const cadastro = document.querySelector('#cadastro')
    
    const modalWindow = document.createElement('div');
    modalWindow.classList.add('window');
    
    const modalInterior = document.createElement('div');
    modalInterior.classList.add('interior');
    
    const modalMessage = document.createElement('p');
    modalMessage.textContent = "Cadastro feito com sucesso!";
                                
    modalWindow.append(modalInterior, modalMessage);
    cadastro.append(modalWindow);

    setTimeout(function() {modalWindow.remove(); window.location.href = "login.html";}, 1000);
}

form.addEventListener("submit", function(cadastro) {
    cadastro.preventDefault();
    console.log(codeAdm);
    console.log("Entreiiiii");
    if(!passwordV() || !passwordConfirmationV()) {
      return 
    } 
    
    let lastGeneratedId = parseInt(localStorage.getItem("lastId")) || 0;
    let newId = lastGeneratedId + 1;
    localStorage.setItem("lastId", newId);
    let users = new Array();
    
    if(localStorage.hasOwnProperty("users")) {
        users = JSON.parse(localStorage.getItem("users"));
        console.log({users});
    }

    console.log(users);

    const user = {
        id: newId,
        name: name.value, 
        email: email.value, 
        password: password.value,
        dataNasc: dataNasc.value,
        sexo: sexo.value,
        estado: estado.value,
        isAdmin: isAdmin === codeAdm.value 
    }

    console.log(user);

    const userEmail = email.value;
    let exist = false;

    for(let i = 0; i < users.length; i++) {
        if(users[i].email === userEmail) {
            exist = true
            break;
        }
    } 

    if(exist) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Este e-mail já está cadastrado.';
        return;
    }
    
    users.push(user);
    
    localStorage.setItem("users", JSON.stringify(users));

    successMsg();  
});