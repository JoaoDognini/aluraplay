import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCard(videoApi) {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `
    <iframe width="100%" height="72%" src="${videoApi.url}"
        title="${videoApi.titulo}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
    </iframe>
    <div class="descricao-video">
        <img src="${videoApi.imagem}" alt="logo canal alura">
        <h3>${videoApi.titulo}</h3>
        <p>${videoApi.descricao}</p>
    </div>
    `;

    return video;
}

async function listaVideo() {
    try {
        const listaApi = await conectaApi.listaVideos();
        listaApi.forEach(elemento => {
            lista.appendChild(constroiCard(elemento));
        });
    } catch {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de vídeos</h2>`
    }
}

listaVideo();