let palcoAltura, palcoLargura;
function ajustaTamanhoPalcoJogo() {
    palcoAltura = window.innerHeight;
    palcoLargura = window.innerWidth;
}

function criarMosquito() {

    // Remove mosquito anterior, caso exista
    if (document.getElementById('mosquito') !== null) {
        document.getElementById('mosquito').remove();

        perdeVida();
    }

    // Variaveis usadas nas propriedades do elemento Mosquito
    let posicoesXY = posicaoAleatoriaMosquito();

    // Atribui a classe de estilo referente ao tamanho do Mosquito
    let classesCSS = tamanhoAleatorioMosquito();

    // Atribui a classe de estilo referente ao lado do Mosquito
    classesCSS += ' ' + ladoAleatorioMosquito();

    // Cria o elemento mosquito
    let mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosca.png';
    mosquito.className = classesCSS;
    mosquito.style.position = 'absolute';
    mosquito.style.left = posicoesXY[0];
    mosquito.style.top = posicoesXY[1];
    mosquito.id = 'mosquito';
    mosquito.onclick = function(){
        this.remove();
    }


    // Inclui o mosquito no palco do jogo
    document.body.appendChild(mosquito);

}

function posicaoAleatoriaMosquito() {
    // Gera posições randomicas
    let posicaoXMosquito = Math.floor(Math.random() * palcoLargura) - 90;
    let posicaoYMosquito = Math.floor(Math.random() * palcoAltura) - 90;

    // Evita que a posição do mosquito seja menor que zero, evitando dele ficar fora do palco
    posicaoXMosquito = `${(posicaoXMosquito < 0) ? 0 : posicaoXMosquito}px`;
    posicaoYMosquito = `${(posicaoYMosquito < 0) ? 0 : posicaoYMosquito}px`;

    return [posicaoXMosquito, posicaoYMosquito];
}

function tamanhoAleatorioMosquito() {
    let classe = Math.floor(Math.random() * 3);

    switch (classe) {
        case 0:
            return 'mosquito1';

        case 1:
            return 'mosquito2';

        case 2:
            return 'mosquito3';
    }
}

function ladoAleatorioMosquito() {
    let classe = Math.floor(Math.random() * 2);

    switch (classe) {
        case 0:
            return 'ladoA';

        case 1:
            return 'ladoB';
    }
}

let vidasTotal = 5;
function perdeVida(){
    if (vidasTotal === 0) {
        window.location.href = 'game_over.html'

    } else {
        document.getElementById(`vida${vidasTotal}`).src = 'imagens/coracao_vazio.png';
        vidasTotal--;
    }
}