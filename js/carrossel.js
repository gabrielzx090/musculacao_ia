let imagens = [
    '../img/carrossel1.jpg',
    '../img/carrossel2.jpg',
    '../img/carrosel3.png'
];

let IndiceAtualListaImagens = 0;

function exibirImagem() {
    let imagemCarrossel = document.getElementById('img-carrossel');
    imagemCarrossel.src = imagens[IndiceAtualListaImagens];
}

// Exibe a primeira imagem imediatamente
exibirImagem();

// Troca a imagem a cada 5 segundos
setInterval(function() {
    IndiceAtualListaImagens++;

    // Reinicia o índice se passar do limite
    if (IndiceAtualListaImagens >= imagens.length) {
        IndiceAtualListaImagens = 0;
    }

    exibirImagem();
}, 5000);
