import { Api } from "../models/Api.js"

const username = document.getElementById('username')
const email = document.getElementById('email')
const avatarUrl = document.getElementById('avatarUrl')
const password = document.getElementById('password')
const botaoCadastrar = document.getElementById('btn__cadastrar')
botaoCadastrar.addEventListener('click', cadastrarUsuario)

async function cadastrarUsuario(event) {
    event.preventDefault()
    const dados = {
        username: username.value,
        email: email.value,
        avatarUrl: avatarUrl.value,
        password: password.value
    }

    const cadastrar = await Api.criarUsuario(dados)
    
    if(cadastrar.status !== 'error') {
        window.location = '../../index.html'
    }
}