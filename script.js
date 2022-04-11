let numCartas;
let cartasSelecionadas = [];
let funcao;
let clickTravado = false;
let temCartavirada = false;
let posicaoCaraVirada = -1;
let valorCartaVirada = 0;
let pontos = 0;

window.onload = iniciarJogo();

function iniciarJogo() {

    numCartas = Number(prompt("Insira o número de cartas:"));
    condicao = numCartas % 2 === 0 && numCartas >= 4 && numCartas <= 14;

    do {
        if (condicao === true) {

        } else {
            alert("Insira apenas números pares entre 4 e 14!");
            iniciarJogo()
        }
    } while (condicao === false)

}


function selecionarNumCartas() {
    let carta1 = document.querySelector(".card-1");
    let carta1_2 = document.querySelector(".dupla-card-1");
    let carta2 = document.querySelector(".card-2");
    let carta2_2 = document.querySelector(".dupla-card-2");
    let carta3 = document.querySelector(".card-3");
    let carta3_2 = document.querySelector(".dupla-card-3");
    let carta4 = document.querySelector(".card-4");
    let carta4_2 = document.querySelector(".dupla-card-4");
    let carta5 = document.querySelector(".card-5");
    let carta5_2 = document.querySelector(".dupla-card-5");
    let carta6 = document.querySelector(".card-6");
    let carta6_2 = document.querySelector(".dupla-card-6");
    let carta7 = document.querySelector(".card-7");
    let carta7_2 = document.querySelector(".dupla-card-7");

    let cartas = [carta1, carta1_2, carta2, carta2_2, carta3, carta3_2, carta4, carta4_2, carta5, carta5_2, carta6, carta6_2, carta7, carta7_2];


    cartasSelecionadas = cartas.slice(0, numCartas);
    Object.keys(cartasSelecionadas)

    function comparador() {
        return Math.random() - 0.5;
    }

    cartasSelecionadas.sort(comparador);

    for (let i = 0; i < numCartas; i++) {

        cartasSelecionadas[i].classList.remove("escondido");

    }

    console.log(cartasSelecionadas)

}

selecionarNumCartas()

function virarCarta(elemento) {
    if (clickTravado) return;

    elemento.classList.add("transicao");
    let numImg = elemento.getAttribute('data-valor');
    console.log(numImg)
    let valor = numCartas[numImg];
    

    if (!temCartavirada) {
        temCartavirada = true;
        posicaoCaraVirada = numImg;
        valorCartaVirada = valor;

    } else {
        if (valor == valorCartaVirada) {
            pontos++
        } else {
            const p0 = posicaoCaraVirada;
            clickTravado = true;
            setTimeout(() => {
                elemento.classList.remove("transicao")
                let img = document.querySelector('.cards ' + p0)
                img.classList.remove('transicao')
                clickTravado = false;
            }, 2000);

        }
        temCartavirada = false;
        posicaoCaraVirada = -1;
        valorCartaVirada = 0;
    }




}



//  setTimeout(minhaFuncao, tempos em milisegundos); executara uma vez a cada x segundos;

function qualPar(elemento) {


}