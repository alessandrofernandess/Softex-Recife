// Modulo 3 - Projeto 1

/*

Considerando a solução apresentada no Hipertexto 5, aplique o padrão de projeto Strategy para criar uma simples calculadora.

Os requisitos para avaliar o projeto são:

- Implementar uma interface Strategy com o método abstrato execute(). Deve haver três classes concretas que 
implementam a Strategy para realizar as operações de Soma, Subtração e Multiplicação de números inteiros.
- O método execute() deve receber dois números inteiros como parâmetros e retornar o resultado também como número inteiro
- Como input do usuário, a aplicação deve receber o primeiro valor, depois o segundo e, por último, a operação 
matemática que deve realizar
- No final, a aplicação deve definir qual Strategy será usada, com base na operação informada, e imprimir o resultado da operação.

*/

// Resolução

// Define a interface Strategy

class Strategy {
    execute(a, b) {
        throw new Error("O método execute() deve ser implementado");
    }
}

class Soma extends Strategy {
    execute(a, b) {
        return a + b;
    }
}
  
class Subtracao extends Strategy {
    execute(a, b) {
        return a - b;
    }
}
  
class Multiplicacao extends Strategy {
    execute(a, b) {
        return a * b;
    }
}
  
class Calculadora {
    constructor() {
        this.strategy = null; // Estratégia inicialmente nula
    }
  
    defineOperacao(strategy) {
        this.strategy = strategy; // Define a estratégia atual
    }
  
    calcular(a, b) {
        if (!this.strategy) {
            throw new Error("É necessário definir uma operação antes de calcular");
    }
        return this.strategy.execute(a, b); // Delega o cálculo para a estratégia atual
    }
}
  
// Implementando a calculadora

const calculadora = new Calculadora();
const soma = new Soma();
const subtracao = new Subtracao();
const multiplicacao = new Multiplicacao();
  
calculadora.defineOperacao(soma);
console.log(calculadora.calcular(2, 3));
  
calculadora.defineOperacao(subtracao);
console.log(calculadora.calcular(7, 4));
  
calculadora.defineOperacao(multiplicacao);
console.log(calculadora.calcular(3, 5));
  