alert('Bem vindo ao jogo do número secreto');
let numeroSecreto = 4;
let chute = prompt('Escolha um número entre 1 e 30');
console.log(numeroSecreto)

// se chute for igual ao número secreto
if (numeroSecreto == chute) {
    alert('Isso ai! Você descobriu o número secreto ');
} else {
    alert('Você errou :(')
}
