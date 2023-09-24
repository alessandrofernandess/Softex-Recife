// Modulo 5 - Projeto 2

// Tratamento de Exceçoes

try {
    
    let numero1 = parseFloat(prompt("Digite o primeiro número:"))
    let numero2 = parseFloat(prompt("Digite o segundo número:"))
  
    if (isNaN(numero1) || isNaN(numero2)) {
        throw new Error("Pelo menos um dos valores não é um número válido.")
    }
  
    let resultado = numero1 / numero2
  
    if (!isFinite(resultado)) {
        throw new Error("Divisão por zero.")
    }

    alert(`O resultado da divisão é: ${resultado}`)
  } catch (excecao) {
        alert(`Ocorreu uma exceção: ${excecao.message}`)
  } finally {
        alert("O programa foi encerrado.")
  }
  