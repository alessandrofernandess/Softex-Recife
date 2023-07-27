/* Faça uma função calculadora de dois números com três parâmetros: os dois primeiros serão os números da operação e o terceiro será a entrada que definirá a operação a ser executada. Considera a seguinte definição:
1. Soma
2. Subtração
3. Multiplicação
4. Divisão

Caso seja inserido um número de operação que não exista, o resultado deverá ser 0. */

function calculadora(numero1, numero2, operacao) {
    
    if (operacao === 1) {
    return numero1 + numero2;

    } else if (operacao === 2) {
      return numero1 - numero2;

    } else if (operacao === 3) {
      return numero1 * numero2;

    } else if (operacao === 4) {
      
      if (numero2 !== 0) {
      return numero1 / numero2;

    } else {
      return 0;
    }
  }
}
  
  console.log(calculadora(10, 10, 1)); // 10 + 10 = 20
  console.log(calculadora(10, 2, 2)); // 10 - 2 = 8
  console.log(calculadora(8, 5, 3)); // 8 * 5 = 40
  console.log(calculadora(40, 2, 4)); // 40 / 2 = 20
  console.log(calculadora(8, 2, 5)); // Resultado será 0
  
