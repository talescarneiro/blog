🏁 Entrega - Blog M2
===================

Introdução
----------

A ideia desse projeto é simular uma comunidade, onde todos os membros
cadastrados podem consumir, criar, atualizar e deletar publicações de
texto. Também por em pratica o fluxo de autenticação em APIs.

Tarefas
-------

**Importante!**

-   Leia a
    [documentação](https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/services/m2/api-blog-m2/docs-api-blog-m2/)
    da API para conhecer seus endpoints e como trabalhar em cada um
    deles.

1.  Construa uma página de cadastro, com um formulário que receba esses
    dados:

        {
          "username": "username", // Um nome de usuário de até 12 digitos.
          "email": "mail@mail.com", // Um e-mail único para cada usuário.
          "avatarUrl": "https://github.com/wence-.png", // O link de uma imagem para o avatar do usuário.
          "password": "123" // Uma senha sem restrições.
        }

2.  Construa uma página de login, com um formulário que recebe um
    **email** e uma **senha**. **O usuário só poderá ser redirecionado a
    pagina principal do seu projeto se o login for bem sucedido,
    retornando um token e o id do usuário.**

3.  Uma pagina principal, onde o usuário autenticado pode **escrever**
    um post e **ler** todos os posts existentes na API.

4.  O dono do post deverá ter a opção de atualizar ou deletar esse
    recurso. **APENAS o dono pode modificar ou excluir, nenhum outro
    usuário deve conseguir fazer isso.** *Na API já existe uma validação
    para isso, mas garanta que essa funcionalidade fique intuitiva no
    front-end.*

5.  As páginas precisam estar separadas, cada uma estruturada em um
    arquivo HTML.

6.  Aplique os conceitos de POO e Local Storage. **Isso é um requisito
    obrigatório!**

**Aviso!**

-   Não esqueça que alguns endpoints necessitam de autenticação para a
    requisição ser bem sucedida, veja na documentação quais exigem isso.

Entrega
-------

Faça o push do código para o seu repositório GitHub e implemente-o
GitHub pages. No Canvas, por favor, **envie sua url do GitHub Pages** e
envie o link do seu repositório nos comentários. Deixe o link do seu
repositório como **internal**.
