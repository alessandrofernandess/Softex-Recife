// Modulo 3 - Projeto 5

// Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em JavaScript para encontrar o valor 20.

// Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo com a que for mais adequada para essa situação.

// Codifique a solução mais eficiente para buscar o número 20 no array.m

// Resolução:

function buscaLinear(array, alvo) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === alvo) {
            return i
        }
    }
    return -1
}

let array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7]
let valorProcurado = 20

let indiceEncontrado = buscaLinear(array, valorProcurado)

if (indiceEncontrado !== -1) {
    console.log('O valor ' + valorProcurado + ' foi encontrado no índice ' + indiceEncontrado + '.')
} else {
    console.log('O valor ' + valorProcurado + ' não foi encontrado no array.')
}