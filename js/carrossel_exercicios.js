let imagens = [
    'img/carrossel7.jpg',
    'img/carrossel8.jpg',
    'img/carrossel9.jpg'
];

let IndiceAtualListaImagens = 0;

function exibirImagem() {
    let imagemCarrossel = document.getElementById('img-carrossel');
    imagemCarrossel.src = imagens[IndiceAtualListaImagens];
}


exibirImagem();


setInterval(function() {
    IndiceAtualListaImagens++;

    
    if (IndiceAtualListaImagens >= imagens.length) {
        IndiceAtualListaImagens = 0;
    }

    exibirImagem();
}, 5000);
