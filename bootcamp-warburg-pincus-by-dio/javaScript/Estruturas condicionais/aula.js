// // Algorítimo para descobrir se um número é par

// const numero = 10;

// //para um número ser par, o resto da divisão deste número por dois deve dar 0
// const isNumeroPar = (numero % 2) === 0;

// if (isNumeroPar) {
//     console.log("O número é par");
// } else {
//     console.log("O número é impar");
// }



//************************************************************************************* */



// // Algorítimo para descobrir se um número é divisível por outro


// const numero = 0;

// //para um número ser par, o resto da divisão deste número por dois deve dar 0
// const isNumeroDivisivelPor5 = (numero % 5) === 0;


// if (numero === 0) {
//     console.log("O número é inválido!");
// } else if (isNumeroDivisivelPor5) {
//     console.log("Sim, o número é divisível.");
// } else {
//     console.log("Não, o número não é divisível.");
// }



//************************************************************************************* */



// Faça um programa para calcular o valor de uma viagem.Faça
// Você terá 3 variáveis. Sendo elas:

//     1- Preço do etanol;
//     2- Preço da gasolina;
//     3- O tipo de conbustível que está no seu Carro;
//     4- Gasto médio de combustível do carro por KM;
//     5- Distância em KM da Viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.


const precoEtanol = 3.29;
const precoGasolina = 4.79;
const gastoMedioVeiculoPorKm = 10;
const distanciaViagem = 300;

const isTipoCombustivelEtanol = false;

const valorGastoEtanol = (distanciaViagem / gastoMedioVeiculoPorKm) * precoEtanol;
const valorGastoGasolina = (distanciaViagem / gastoMedioVeiculoPorKm) * precoGasolina;


if (isTipoCombustivelEtanol) {
    console.log("O valor total da viagem foi: R$" + valorGastoEtanol + " em etanol");
} else {
    console.log("O valor total da viagem foi: R$" + valorGastoGasolina + " em gasolina");
}