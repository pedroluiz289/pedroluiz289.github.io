let modoEscuro = localStorage.getItem('modo-escuro');
const mudarTema = document.getElementById('mudar-tema');

const ativarModoEscuro = () => {
    document.body.classList.add('modo-escuro');
    localStorage.setItem('modo-escuro', 'ativo');
}

const desativarModoEscuro = () => {
    document.body.classList.remove('modo-escuro');
    localStorage.setItem('modo-escuro', null);
}

if (modoEscuro === 'ativo') {
    ativarModoEscuro();
}

mudarTema.addEventListener('click', () => {
    modoEscuro = localStorage.getItem('modo-escuro');
    modoEscuro !== 'ativo' ? ativarModoEscuro() : desativarModoEscuro();
});

function abrirEmail() {
    window.open('mailto:pl259647@gmail.com', '_blank');
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(evento) {
        evento.preventDefault();

        const alvoId = this.getAttribute('href');
        const alvoElemento = document.querySelector(alvoId);

        if (alvoElemento) {
            alvoElemento.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.querySelectorAll('.cartao-skills').forEach(div => {
    const imagem = div.querySelector('img');
    const imagemEstatico = imagem.src;
    const imagemAnimado = div.getAttribute('data-gif-src');

    div.addEventListener('mouseenter', () => {
        imagem.src = imagemAnimado;
    });

    div.addEventListener('mouseleave', () => {
        imagem.src = imagemEstatico;
    });
});