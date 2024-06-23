const logoutBtn = document.querySelector('#logout')
const signupLink = document.querySelector('a[href="cadastro.html"]')
const loginLink = document.querySelector('a[href="login.html"]')
const admLink = document.querySelector('a[href="cadastroUniversidades.html"]')

function updateHeader() {
  if (user.isAdmin) {
      signupLink.style.display = 'none'
      loginLink.style.display = 'none'
      admLink.style.display = 'inline'
      logoutBtn.style.display = 'inline'

  } else {
    signupLink.style.display = 'none'
    loginLink.style.display = 'none'
    logoutBtn.style.display = 'inline'
  }
}
  
const loggedUser = JSON.parse(localStorage.getItem('logged'))
if (loggedUser) {
  user = loggedUser
  updateHeader()
}

logoutBtn.addEventListener('click', (ev) => {
  ev.preventDefault()

  localStorage.removeItem('logged')
  signupLink.style.display = 'inline'
  loginLink.style.display = 'inline'
  admLink.style.display = 'none'
  logoutBtn.style.display = 'none'

  window.location.href = "index.html"
})



