const postagem = window.document.querySelector(".postagem");

const URL = "js/postagens.json";

//Get all posts

async function getAllCharacters() {
    const response = await fetch(URL);
    console.log(response);

    const character = await response.json();

    character.map((data) => {
        const article = window.document.createElement("article");
        const img = window.document.createElement("img");
        const title = window.document.createElement("h3");
        
        const texto = window.document.createElement("p");
        const info = window.document.createElement("div");
        const dataPost = window.document.createElement("span");
        const getPost = window.document.createElement("button");

        img.src = data.imagem;
        img.title = data.nome;
        img.classList.add("img-post");

        title.textContent = data.nome;
        texto.textContent = data.texto;
        article.classList.add("post");
        
        info.classList.add("post-info");
        getPost.classList.add("getPost");
        dataPost.classList.add("data-post");

        getPost.textContent = "Saiba-mais";
        dataPost.textContent = data.data;

        info.appendChild(getPost);
        info.appendChild(dataPost);

        article.appendChild(img);
        article.appendChild(title);
        article.appendChild(texto);

        article.appendChild(info);
        postagem.appendChild(article);
    });
} 

getAllCharacters();