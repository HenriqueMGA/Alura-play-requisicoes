import { conectaApi } from "./conectaApi.js";
const formaulario = document.querySelector("[data-formulario]");

async function criarVideo (evento) {
    evento.preventDefaut()
    const titulo = document.querySelector("[data-titulo]").value;
    const url = document.querySelector("[data-url]").value;
    const imagem = document.querySelector("[data-imagem]").value
    const descricao = Math.floor(Math.random * 10).toString()
    try {
        await conectaApi.criaVideos(titulo, descricao, url, imagem);

        window.location.href = "../pages/envio-concluido.html";
    } catch (e) {
        alert(e)
    }
}

formaulario.addEventListener("submit", evento => criaVideo(evento))