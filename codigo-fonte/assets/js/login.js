const email = document.getElementById('e-mail')
const password = document.getElementById('password')
const errorMessage = document.getElementById('errorMessage')
const login = document.getElementById('login')
let users = []
let user = {}


if(localStorage.hasOwnProperty("users")) {
   users = JSON.parse(localStorage.getItem("users"));
   console.log(users);
}

login.addEventListener('submit', (ev) => {
   ev.preventDefault()
  
   if(!logar(email.value, password.value)) {
      console.log(user);
      errorMessage.style.display = 'block'
      errorMessage.textContent = 'Senha ou email invalidos'   
   } else {
      errorMessage.style.display = 'none'
      localStorage.setItem('logged', JSON.stringify(user))
      setTimeout(function() {
         window.location.href = "universidade.html"
      }, 1000);
   }
})


function logar (email, password){  
   console.log(users.length);
   for (let i = 0; i < users.length; i++) {
      
      console.log(users[i].password, users[i].email);
      console.log("senha", users[i].password === password, "email",users[i].email === email);

      if(users[i].password === password && users[i].email === email) {
         user = {
            name: users[i].name,
            email: users[i].email,
            password: users[i].password,
            birthdate: users[i].dataNasc,
            gender: users[i].sexo,
            state: users[i].state,
            isAdmin: users[i].isAdmin
         }
         return  true
      }
   } 

   return false
}






