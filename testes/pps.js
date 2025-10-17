let jogador = prompt('pedra, papel, tesoura: ')
let opcoes = ['pedra', 'papel', 'tesoura']
let ranIndex = Math.floor(Math.random() * 3)
let computador = opcoes[ranIndex]

if (jogador == computador) {
    console.log('empate')
} else if (jogador == 'pedra' && computador == 'papel') {
    console.log('perdeu')
} else if (jogador == 'pedra' && computador == 'tesoura') {
    console.log('ganhou')
} else if (jogador == 'papel' && computador == 'pedra') {
    console.log('ganhou')
} else if (jogador == 'papel' && computador == 'tesoura') {
    console.log('perdeu')
} else if (jogador == 'tesoura' && computador == 'pedra') {
    console.log('perdeu')
} else if (jogador == 'tesoura' && computador == 'papel') {
    console.log('ganhou')
}