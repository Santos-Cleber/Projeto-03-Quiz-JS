const input = document.getElementById('resposta');
const explicacao = document.getElementById('feedback');
const confirmar = document.querySelector('.card__botao');

confirmar.addEventListener('click', function(){

    const resposta = input.value.trim()

    if(resposta === 'trim'){
    explicacao.textContent = 'Correto! .trim() remove os espaços do início e do fim de uma string. Use sempre antes de comparar dados que o usuário digitou.';
    explicacao.className = 'card__feedback card__feedback--correto';
    } else {
    explicacao.textContent = 'Errado. Tente novamente!';
    explicacao.className = 'card__feedback card__feedback--errado';
    }
});