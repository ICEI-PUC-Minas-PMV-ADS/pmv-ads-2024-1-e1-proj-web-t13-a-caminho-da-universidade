const email = document.getElementById('e-mail').value;
const password = document.getElementById('password').value;
const errorMessage = document.getElementById('errorMessage').value
const login = document.querySelector('login')
let users = []

if(localStorage.hasOwnProperty("users")) {
   users = JSON.parse(localStorage.getItem("users"));
   console.log({users});
}


function logar (){  
   for (let i = 0; i < users.length; i++) {
      if(users[i].password === password && users[i].email === email) {
         setTimeout(function() {modalWindow.remove(); window.location.href = "universidade.html";}, 1000);
         return  
      }
   }

   errorMessage.style.display = 'block'
   errorMessage.textContent = 'A senha deve ter no mínimo 8 caracteres e conter pelo menos um caracter especial'    
}






