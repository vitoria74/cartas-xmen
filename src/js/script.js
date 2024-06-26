 const btnAvancar = document.getElementById('btn-avancar');

 let cartaoAtual = 0;

 btnAvancar.addEventListener('click', function(){

    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');

    const cartoes = document.querySelectorAll('.cartao'); //selecionar todos os cartoes da classe .cartao
    cartaoAtual++;
    cartoes[cartaoAtual].classList.add('selecionado');


});