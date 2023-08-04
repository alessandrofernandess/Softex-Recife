/* Modulo 3 - Projeto 1

Você deve criar três listas em JavaScript:

1. para guardar os nomes de dez pessoas;
2. para guardar as suas idades;
3. para guardar as suas cores favoritas.

Em seguida, imprima essas listas. Depois, faça algumas modificações, alterando uma cor e uma idade. Ao terminar, imprima novamente todas as informações das três listas.

let nomes = ['Lucas', 'Carolina', 'Bruna', 'Rodrigo', 'Raiza', 'Rosana', 'Junior', 'Mateus', 'Gabriel', 'Julia']
let idade = [18, 10, 30, 32, 28, 48, 51, 17, 21, 10]
let cores = ['Preto', 'Rosa', 'Vermelho', 'Branco', 'Bege', 'Laranja', 'Azul', 'Verde', 'Marrom', 'Roxo']

console.log(nomes)
console.log(idade)
console.log(cores)

////////////////////////////// Fazendo as alterações


let nomes = ['Lucas', 'Carolina', 'Bruna', 'Rodrigo', 'Raiza', 'Rosana', 'Junior', 'Mateus', 'Gabriel', 'Julia']
let idade = [18, 10, 30, 32, 28, 48, 51, 17, 21, 10]
let cores = ['Preto', 'Rosa', 'Vermelho', 'Branco', 'Bege', 'Laranja', 'Azul', 'Verde', 'Marrom', 'Roxo']

cores.splice(2, 1, 'Lilás') 
idade.splice(3, 1, 50)

Substituição com .splice: recebe tres parâmetros, o primeiro parâmetro é a posição INICIAL do array a ser modificado (posicao 2), O segundo é o número de elementos a serem removidos do array (1) e o terceiro é o que deve ser mostrado no array depois da modificação.

console.log(nomes)
console.log(idade)
console.log(cores)

*/
