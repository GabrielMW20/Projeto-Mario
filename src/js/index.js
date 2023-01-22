/*
    OBJETIVO 1 - Quando o usuário clicar no botão "veja o trailer", a modal se abrirá com o vídeo do trailer.

    OBJETIVO 2 - Quando o usuário clicar no ícone "X", a modal se fechará.
*/


const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkVideo = video.src;

function alternarModal() {
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkVideo);
});

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});