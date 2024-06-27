 /**
  * @description Código para as setas "avançar para próxima carta" e "voltar para carta anterior"
  */
 
 const btnAvancar = document.getElementById('btn-avancar');
 const btnVoltar = document.getElementById('btn-voltar');

 let cartaoAtual = 0;

 const cartoes = document.querySelectorAll('.cartao'); 

 /**
  * @description Função para a seta "avançar".
  */

 btnAvancar.addEventListener('click', function(){

    if(cartaoAtual === cartoes.length - 1) return;

    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao();

});

/**
 * @description Função para a seta "voltar".
 */

btnVoltar.addEventListener('click', function(){

    if(cartaoAtual === 0) return;

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao();

});

/**
 * @description Função que torna a carta atual como ".selecionado" para mostrá-la
 */

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add('selecionado');
}

/**
 * @description Função para retirar a classe "selecionado" da carta anterior
 */

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}
