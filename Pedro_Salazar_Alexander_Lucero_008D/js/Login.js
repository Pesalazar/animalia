const username = document.getElementById('username');
const password = document.getElementById('password');
const button = document.getElementById('button');
const parrado = document.getElementById('warnings');

button.addEventListener('click', (e) =>{
    e.preventDefault()

    const data = {
            username : username.value,
            password: password.value
    }
    console.log(data)
    alert("El usuario '" + data.username+ "' a sido almacenado")

})



