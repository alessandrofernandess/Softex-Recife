

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
  // Exemplos de uso da função:
  console.log(calculadora(10, 10, 1)); // 10 + 10 = 20
  console.log(calculadora(10, 2, 2)); // 10 - 2 = 8
  console.log(calculadora(8, 5, 3)); // 8 * 5 = 40
  console.log(calculadora(40, 2, 4)); // 40 / 2 = 20
  console.log(calculadora(8, 2, 5)); // Resultado será 0
  