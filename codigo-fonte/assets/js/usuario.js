var formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(cadastro) {
    cadastro.preventDefault();
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    let users = new Array();
    const lastGeneratedId = 0;
    
    if(localStorage.hasOwnProperty(users)) {
        localStorageGetItem("users");
        users = JSON.parse(localStorage.getItem("users"));
    }

    users.push({
        id: lastGeneratedId + 1,
        name: name, 
        email: email, 
        password: password
    });

    localStorage.setItem("users", JSON.stringify(users));
})

