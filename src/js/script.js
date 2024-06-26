 const btnAvancar = document.getElementById('btn-avancar');

 let cartaoAtual = 0;

 const cartoes = document.querySelectorAll('.cartao'); //selecionar todos os cartoes da classe .cartao

 btnAvancar.addEventListener('click', function(){

    if(cartaoAtual === cartoes.length - 1) return;

    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');

    cartaoAtual++;
    cartoes[cartaoAtual].classList.add('selecionado');


});