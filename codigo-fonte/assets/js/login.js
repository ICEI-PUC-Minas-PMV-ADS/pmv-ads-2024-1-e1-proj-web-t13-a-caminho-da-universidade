const email = document.getElementById('e-mail').value;
const password = document.getElementById('password').value;
const errorMessage = document.getElementById('errorMessage').value
const login = document.getElementById('login')
let users = []
let adm = ''



if(localStorage.hasOwnProperty("users")) {
   users = JSON.parse(localStorage.getItem("users"));
   console.log({users})
}

login.addEventListener('submit', (ev) => {
   ev.preventDefault()
   
   if(!logar(email, password)) {
      console.log("passei");
      errorMessage.style.display = 'block'
      errorMessage.textContent = 'Senha ou email invalidos'   
   } else {
      const signIn = {
         name: name.value,
         email: email.value,
         password: password.value,
         dataNasc: dataNasc.value,
         sexo: sexo.value,
         estado: estado.value,
         isAdmin: isAdmin == codeAdm.value
      }
    
      setTimeout(function() {modalWindow.remove(); window.location.href = "universidade.html";}, 1000);
   }
})


function logar (email, password){  
   for (let i = 0; i < users.length; i++) {
      if(users[i].password === password && users[i].email === email) {
         adm = users[i].isAdmin
         return  true
      } else {
         return false
      }
   } 
}






