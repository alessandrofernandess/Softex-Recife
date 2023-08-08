/* Modulo 3 - Projeto 3

Considere o array [3, 7, 9, 1, 0].

O primeiro elemento inserido foi o 3, o segundo foi o 7 e assim por diante, seguindo a ordem.

Levando em conta as três estruturas de dados (fila, lista e pilha) e as suas regras de operações, qual seria a sequência dos números removidos em cada uma delas para esvaziá-las completamente utilizando o array mencionado?

*/

///////////////////// Fila

// Na FILA, o primeiro elemento que é adicionado no Array é o primeiro que vai sair. (FIFO - First In, First Out)
// No array [3, 7, 9, 1, 0], iremos remover a partir do elemento 0 ate esvazia-lo removendo o elemento 3.

// Ex. em Javascript

let fila = [3, 7, 9, 1, 0]

console.log(fila) // Mostra a fila completa

function removerDaFila() {
    
    if (fila === 0){
        return null  
    }
    
    return fila.shift()
    
}

removerDaFila()           //Remove o 3
console.log(fila)
removerDaFila()           //Remove o 7
console.log(fila)
removerDaFila()           //Remove o 9
console.log(fila)
removerDaFila()           //Remove o 1
console.log(fila)
removerDaFila()           //Remove o 0
console.log(fila)   //Exibe o array vazio.



///////////////////// Lista

// Na lista, podemos remover o elemento que quisermos sem uma sequencia definida.
// No array [3, 7, 9, 1, 0], iremos remover em ordem aleatória.

let lista = [3, 7, 9, 1, 0]

console.log(lista) // Mostra a lista completa

lista.splice(3,1)
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

        function desempilhar(){
            if (pilha === 0){
                return null
        }
        
        return pilha.pop()
    }

    desempilhar()
    console.log(pilha)
    desempilhar()
    console.log(pilha)
    desempilhar()
    console.log(pilha)
    desempilhar()
    console.log(pilha)
    desempilhar()
    console.log(pilha)