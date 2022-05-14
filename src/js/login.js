import { Api } from "../models/Api.js";
const botaoLogin = document.getElementById('btn__login')
botaoLogin.addEventListener('click', autenticarUsuario)

async function autenticarUsuario(event) {
    event.preventDefault()

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    const dados = {
        email: email,
        password: password
    }

    const login = await Api.logarUsuario(dados)
    
    if(login.status !== 'error') {
        localStorage.setItem('token', JSON.stringify(login))
        window.location = './src/pages/principal.html'
    }
}