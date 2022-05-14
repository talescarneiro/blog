import { Api } from "../models/Api.js"
const {id, username, avatarUrl} = await pegarDadosUsuario()
const token = await pegarDadosToken()
// DADOS BOTÕES //
const btnLogout = document.getElementById('btn__logout')
const btnCriarPost = document.getElementById('btn__criar_post')
btnCriarPost.addEventListener('click', criarPost)
btnLogout.addEventListener('click', logoutNaPagina)

async function pegarDadosUsuario() {
    const userJSON = localStorage.getItem("token")
    const user = JSON.parse(userJSON)
    const {token, userId} = user

    const usuario = await Api.listarUsuario(token, userId)

    return usuario
}

async function pegarDadosToken() {
    const userJSON = localStorage.getItem("token")
    const user = JSON.parse(userJSON)

    return user.token
}

function consumindoDadosUsuario() {
    const user = document.getElementById('user')
    const avatar = document.getElementById('avatar')

    user.innerText = username
    avatar.src = avatarUrl
}

function logoutNaPagina(event) {
    event.preventDefault()
    localStorage.removeItem("token")
    window.location = '../../index.html'
}

async function listarPosts() {
    const lista = await Api.listarPost(token)
    const container = document.querySelector('.content__box')
    lista.data.forEach(elemento => {
        const section = document.createElement('section')
        section.classList.add('content')

        if(elemento.owner.id == id) {
            section.innerHTML = `
            <img src="${elemento.owner.avatarUrl}" alt="" class="user__avatar">
            <div>
              <h2 class="user__post">${elemento.owner.username}</h2>
              <p class="post">${elemento.post}</p>
            </div>
            <div class="options__user">
              <button value="${elemento.id}" class="options__user_edit">Editar</button>
              <button value="${elemento.id}" class="options__user_delete">Apagar</button>
              <p class="options__user_date">${elemento.createdAt}</p>
            </div>
            `
        } else {
            section.innerHTML = `
            <img src="${elemento.owner.avatarUrl}" alt="" class="user__avatar">
            <div>
              <h2 class="user__post">${elemento.owner.username}</h2>
              <p class="post">${elemento.post}</p>
            </div>
            <div class="options__user">
              <p class="options__user_date" style="margin-top:50px;" ">${elemento.createdAt}</p>
            </div>
            `
        }
        container.appendChild(section)
    })
    editarPost()
    deletarPost()
}

async function criarPost() {
    const texto = document.getElementById('text__content').value
    const data = {
        "content": texto
    }
    const post = await Api.criarPost(token, data)

    if(texto !== '') {
        document.location.reload(true)
        return post
    }
}

function deletarPost() {
    const deleteBtn = document.querySelectorAll('.options__user_delete')

    for(let i = 0; i < deleteBtn.length; i++) {
        deleteBtn[i].addEventListener('click', (e) => {
            let idBotao = e.target.value
            Api.deletarPost(token, idBotao)
            setTimeout(() => {
                document.location.reload(true)
            }, 1500)
        })
    }
}

function editarPost() {
    const editBtn = document.querySelectorAll('.options__user_edit')
    const modal = document.querySelector('.modal')
    const send = document.querySelector('.enviar')
    const edit__content = document.querySelector('.edit__content')

    for(let i = 0; i < editBtn.length; i++) {
        editBtn[i].addEventListener('click', () => {
            window.scrollTo(0, 0)
            modal.style.display = 'flex'
            send.addEventListener('click', () => {
                const data = {
                    "newContent": edit__content.value
                }
                const postId = editBtn[i].value
                Api.editarPost(token, data, postId)
                setTimeout(() => {
                    modal.style.display = 'none'
                    document.location.reload(true)
                }, 1500)
            })
        })
    }
}

listarPosts()
consumindoDadosUsuario()
