const questoes = [
    {
        pergunta: 'Qual método remove os espaços das bordas de uma string?',
        alternativas: ['.split()', '.replace()', '.trim()', '.slice()', '.indexOf()'],
        resposta: 'trim',
        explicacao: '.trim() remove os espaços do início e do fim de uma string. Use sempre antes de comparar dados que o usuário digitou.'
    },
    {
        pergunta: 'Qual método transforma uma string em letras maiúsculas?',
        alternativas: ['.toLowerCase()', '.toUpperCase()', '.charAt()', '.slice()', '.trim()'],
        resposta: 'toUpperCase',
        explicacao: '.toUpperCase() converte todos os caracteres de uma string para maiúsculas.'
    },
    {
        pergunta: 'Como acessamos o número de caracteres de uma string?',
        alternativas: ['.size()', '.count()', '.trim()', '.length', '.slice()'],
        resposta: 'length',
        explicacao: '.length é uma propriedade que retorna o número de caracteres de uma string.'
    },
    {
        pergunta: 'Qual método transforma uma string em letras minúsculas?',
        alternativas: ['.toUpperCase()', '.toLowerCase()', '.charAt()', '.slice()', '.trim()'],
        resposta: 'toLowerCase',
        explicacao: '.toLowerCase() converte todos os caracteres de uma string para minúsculas.'
    },
    {
        pergunta: 'Qual método retorna o índice da primeira ocorrência de um caractere dentro da string?',
        alternativas: ['.charAt()', '.indexOf()', '.slice()', '.concat()', '.trim()'],
        resposta: 'indexOf',
        explicacao: '.indexOf() retorna a posição (índice) da primeira ocorrência de um caractere ou substring dentro da string.'
    }
]

let atual = 0;
let pontuacao = 0;

const input = document.getElementById('resposta');
const explicacao = document.getElementById('feedback');
const confirmar = document.querySelector('.card__botao');

confirmar.addEventListener('click', function(){
    const resposta = input.value.trim();

    if(resposta === questoes[atual].resposta){
        explicacao.textContent = questoes[atual].explicacao;
        explicacao.className = 'card__feedback card__feedback--correto';
        pontuacao++;
        atual++;
        setTimeout(function(){
            if(atual === questoes.length){
                document.querySelector('.card__pontuacao').textContent = 'Pontuação: ' + pontuacao;
                explicacao.textContent = 'Parabéns! Você respondeu todas as questões!';
                explicacao.className = 'card__feedback card__feedback--correto';
            } else {
                carregarQuestao();
            }
        }, 3000);
    } else {
        explicacao.textContent = 'Errado. Tente novamente!';
        explicacao.className = 'card__feedback card__feedback--errado';
    }
});

function carregarQuestao(){
    document.querySelector('.card__pergunta').textContent = questoes[atual].pergunta;
    document.querySelector('.card__questao').textContent = 'Questão ' + (atual + 1) + ' de 5';
    document.querySelector('.card__pontuacao').textContent = 'Pontuação: ' + pontuacao;
    document.querySelector('.card__alternativas').innerHTML = questoes[atual].alternativas.map(function(alt){
        return '<li>' + alt + '</li>';
    }).join('');
    input.value = '';
    explicacao.textContent = '';
    explicacao.className = 'card__feedback';
}