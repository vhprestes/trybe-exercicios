// 1. Faça um algoritmo que calcule a soma de 50 a 100 usando a estrutura “for” e retorne no formato:
// A soma de 50 a 100 é: X.
// 2. Crie um algoritmo que conte quantos números do intervalo entre 1 e 125 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta a sua escolha.
// 3. Crie um algoritmo que simula o jogo “pedra, papel e tesoura” levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// “Jogador 1 vence” ou “Empate” ou “Jogador 2 vence”.
// 4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: “A pessoa é maior de idade”.
// 5. Crie um algoritmo que recebe a idade de Marcella, Carlos e Camila e imprima quem é a mais nova no formato:
// “Pessoa” é a mais nova.



    let soma = 0;
  
    for (let i = 50; i <= 100; i += 1) {
      soma += i;
    }
  
    console.log('A soma de 50 a 100 é' + soma);




// let multiplo3 = 0
// for (let index = 0; index < 126; index++) {
//     if (index % 3 === 0) {
//         multiplo3++ 
//     };
    
// }
// console.log(multiplo3);

// let jogo = ['pedra', 'papel', 'tesoura'];
// let jogador1 = 'pedra'
// let jogador2 = 'papel'
//        if (jogador1 = 'pedra') {
//            switch (jogador2) {
//                case 'pedra':
//                    console.log("Empate");
//                    break;
//                     case 'papel':
//                     console.log("Jogador 1 ganhou");
//                     break;
//                         case 'tesoura':
//                         console.log("Jogador 2 ganhou");
//                default:
//                    break;
//            }
           
//        }