/* Modulo 3 - Projeto 3

Considere o array [3, 7, 9, 1, 0].

O primeiro elemento inserido foi o 3, o segundo foi o 7 e assim por diante, seguindo a ordem.

Levando em conta as três estruturas de dados (fila, lista e pilha) e as suas regras de operações, qual seria a sequência dos
números removidos em cada uma delas para esvaziá-las completamente utilizando o array mencionado?

*/

///////////////////// Fila

// Na FILA, o primeiro elemento que é adicionado no Array é o primeiro que vai sair. (FIFO - First In, First Out)
// No array [3, 7, 9, 1, 0], iremos remover a partir do elemento 0 ate esvazia-lo removendo o elemento 3.

// Ex. em Javascript

let fila = [3, 7, 9, 1, 0]

console.log(fila)

for (let i = 0; i < fila.length; i--) {
    
    if(fila.length > 0){
        fila.shift()
        console.log(fila)
    } else{
        console.log('Fila Vazia!')
        break
    }
}


///////////////////// Lista

// Na lista, podemos remover o elemento que quisermos sem uma sequencia definida.
// No array [3, 7, 9, 1, 0], iremos remover em ordem aleatória.

let lista = [3, 7, 9, 1, 0]

console.log(lista) // Mostra a lista completa

lista.splice(3,1)                                          // melhorar
console.log(lista)
lista.splice(3,1)
console.log(lista)
lista.splice(0,1)
console.log(lista)
lista.splice(0,1)
console.log(lista)
lista.splice(0,1)
console.log(lista) // Mostra a lista vazia.


///////////////////// Pilha

// Na Pilha, o ultimo elemento que é adicionado no Array é o primeiro que vai sair. (LIFO - Last in, First Out)
// No array [3, 7, 9, 1, 0], iremos remover a partir do elemento 3 ate esvazia-lo removendo o elemento 0.

let pilha = [3, 7, 9, 1, 0]

console.log(pilha)

for (let i = 0; i < pilha.length; i--) {
    
    if(pilha.length > 0){
        pilha.pop()
        console.log(pilha)
    } else{
        console.log('Pilha Vazia!')
        break
    }
}