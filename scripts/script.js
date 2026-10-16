const modoAtual = localStorage.getItem("modo-atual") || "auto";
const icone = document.getElementById("icone-mudar-tema");
let temaAtual = 1;

function temaAutomatico() {
    const prefereTemaEscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (prefereTemaEscuro) {
        document.body.classList.add("modo-escuro");
        icone.textContent = "night_sight_auto";
    } else {
        document.body.classList.remove("modo-escuro");
        icone.textContent = "light_mode_auto";
    }
}

function temaEscuro() {
    document.body.classList.add("modo-escuro");
    icone.textContent = "dark_mode";
}

function temaClaro() {
    document.body.classList.remove("modo-escuro");
    icone.textContent = "light_mode";
}

function carregarTema() {
    switch (modoAtual) {
        case "auto": {
            temaAutomatico();
            temaAtual = 1;

            break;
        }

        case "escuro": {
            temaEscuro();
            temaAtual = 2;

            break;
        }

        case "claro": {
            temaClaro();
            temaAtual = 3;
        }
    }
}

function mudarTema() {
    temaAtual++;

    if (temaAtual > 3) {
        temaAtual = 1;
    }

    switch (temaAtual) {
        case 1: {
            localStorage.setItem("modo-atual", "auto");
            temaAutomatico();

            break;
        }

        case 2: {
            localStorage.setItem("modo-atual", "escuro");
            temaEscuro();

            break;
        }

        case 3: {
            localStorage.setItem("modo-atual", "claro");
            temaClaro();
        }
    }
}

function abrirEmail() {
    window.open("mailto:pedroluizcostabatista@gmail.com", "_blank");
}

document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", evento => {
        evento.preventDefault();

        const alvoId = evento.currentTarget.getAttribute("href");
        const alvoElemento = document.querySelector(alvoId);

        if (alvoElemento) {
            alvoElemento.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    carregarTema();
});

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    carregarTema();
});