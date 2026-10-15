// Seleciona os botões
const sobreBtn = document.querySelector(".sobre");
const tiposBtn = document.querySelector(".tipos");
const ajudaBtn = document.querySelector(".ajuda");
const fontesBtn = document.querySelector(".fontes");

// Cria os quadrados dinamicamente
function criarBox(id, texto) {
    let box = document.createElement("div");
    box.classList.add("info-box");
    box.id = id;
    box.textContent = texto;
    document.body.appendChild(box);
    return box;
}

const infoSobre = criarBox("info-sobre", "Este projeto tem como objetivo conscientizar sobre a violência doméstica e informar sobre formas de prevenção e apoio.");
const infoTipos = criarBox("info-tipos", "Existem diferentes tipos de violência: física, psicológica, sexual, patrimonial e moral.");
const infoAjuda = criarBox("info-ajuda", "Em caso de necessidade, procure a polícia (190), o Ministério Público ou centros de apoio especializados.");
const infoFontes = criarBox("info-fontes", "Fontes: Lei Maria da Penha, Ministério da Justiça, ONGs de apoio às vítimas.");

// Função para esconder todos
function esconderTodos() {
    [infoSobre, infoTipos, infoAjuda, infoFontes].forEach(box => {
        box.style.display = "none";
    });
}

// Função para posicionar abaixo do botão clicado
function mostrarBox(botao, box) {
    esconderTodos();
    const rect = botao.getBoundingClientRect();
    box.style.left = rect.left + "px";
    box.style.top = rect.bottom + "px";
    box.style.display = "block";
}

// Eventos
sobreBtn.addEventListener("click", () => mostrarBox(sobreBtn, infoSobre));
tiposBtn.addEventListener("click", () => mostrarBox(tiposBtn, infoTipos));
ajudaBtn.addEventListener("click", () => mostrarBox(ajudaBtn, infoAjuda));
fontesBtn.addEventListener("click", () => mostrarBox(fontesBtn, infoFontes));

// Fecha se clicar fora
document.addEventListener("click", (e) => {
    if (![sobreBtn, tiposBtn, ajudaBtn, fontesBtn].includes(e.target)) {
        esconderTodos();
    }
});
