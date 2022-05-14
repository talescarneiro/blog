class Api {
    static token = ''
    static async criarUsuario(data) {
        const response = await fetch('https://api-blog-m2.herokuapp.com/user/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(response => response)
        .catch(error => error)

        return response
    }

    static async logarUsuario(data) {
        const token = await fetch('https://api-blog-m2.herokuapp.com/user/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(response => response)
        .catch(error => error)

        Api.token = token
        return token
    }

    static async listarUsuario(token, userId) {
        const response = await fetch('https://api-blog-m2.herokuapp.com/user/'+userId, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(response => response.json())
        .catch(error => error)

        return response
    }

    static async criarPost(token, data) {
        const response = await fetch('https://api-blog-m2.herokuapp.com/post', {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(response => response)
        .catch(error => error)

        return response
    }

    static async listarPost(token) {
        const response = await fetch('https://api-blog-m2.herokuapp.com/post', {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(response => response.json())
        .then(response => response)
        .catch(error => error)
        
        return response
    }

    static async deletarPost(token, idPost) {
        const response = await fetch('https://api-blog-m2.herokuapp.com/post/'+idPost, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(response => response.json())
        .then(response => response)
        .catch(error => error)

        return response
    }

    static async editarPost(token, data, postId) {
        const response = await fetch('https://api-blog-m2.herokuapp.com/post/'+postId, {
            method: "PATCH",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(response => response)
        .catch(error => error)

        return response
    }
}

export {Api}