import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

const botao = document.querySelector("[data-botao]");
async function buscaVideo(evento) {
    evento.preventDefault();
    const pesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(pesquisa);

    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    busca.forEach(elemento => lista.appendChild(constroiCard(elemento)));

    if (busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com esse termo</h2>`;
    }
}

botao.addEventListener("click", evento => buscaVideo(evento));