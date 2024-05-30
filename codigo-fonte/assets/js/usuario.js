var formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(cadastro) {
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    let users = new Array();
    let lastGeneratedId = parseInt(localStorage.getItem("lastId")) || 0;
    let newId = lastGeneratedId + 1;
    users.id = newId;
    localStorage.setItem("lastId", newId);
    
    if(localStorage.hasOwnProperty("users")) {
        localStorage.getItem("users");
        users = JSON.parse(localStorage.getItem("users"));
    }
    
    users.push({
        id: newId,
        name: name, 
        email: email, 
        password: password
    });
    
    
    localStorage.setItem("users", JSON.stringify(users));
})
