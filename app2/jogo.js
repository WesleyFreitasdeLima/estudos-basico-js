let palcoAltura, palcoLargura;

// Armazena de forma dinâmica as dimensões do palco do jogo de acordo com o tamanho do window
function ajustaTamanhoPalcoJogo() {
    palcoAltura = window.innerHeight;
    palcoLargura = window.innerWidth;

    console.log(palcoAltura, palcoLargura);
}

ajustaTamanhoPalcoJogo();

// Gera o elemento mosquito
// Posição limitadas pelo tamanho do palco evitando o mosquito fora dessa limitação
function posicaoRandomicaMosquito() {
    // Gera posições randomicas
    let posicaoXMosquito = Math.floor(Math.random() * palcoLargura) - 90;
    let posicaoYMosquito = Math.floor(Math.random() * palcoAltura) - 90;

    // Evita que a posição do mosquito seja menor que zero, evintando ficar fora do palco
    posicaoXMosquito = (posicaoXMosquito < 0) ? 0 : posicaoXMosquito;
    posicaoYMosquito = (posicaoYMosquito < 0) ? 0 : posicaoYMosquito;

    // Cria o elemento mosquito
    let mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosca.png';
    mosquito.className = `${tamanhoAleatorioMosquito()} ${ladoAleatorioMosquito()}`;
    mosquito.style.position = 'absolute';
    mosquito.style.left = `${posicaoXMosquito}px`;
    mosquito.style.top = `${posicaoYMosquito}px`;

    // Inclui o mosquito no palco do jogo
    document.body.appendChild(mosquito);
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

    console.log(`Gerou tamanho ${clase}`);
}

function ladoAleatorioMosquito(){
    let classe = Math.floor(Math.random()*2);

    switch (classe){
        case 0:
            return 'ladoA';

        case 1:
            return 'ladoB';
    }
}