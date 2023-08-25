// Modulo 2 - Projeto 2

// Calculadora

let num1 = parseFloat(prompt('Vamos calcular dois numeros, digite o primeiro: '))
let operacao = prompt('Digite a operação desejada: ')
let num2 = parseFloat(prompt('Digite o outro numero: '))

let resultado

if(operacao == '+'){                                                      //Soma
    resultado = num1 + num2
        document.write(`${num1} + ${num2} = ${resultado}`)
}

if(operacao == '-'){                                                      //Subtração
    resultado = num1 - num2
        document.write(`${num1} - ${num2} = ${resultado}`)
}

if(operacao == '*'){                                                      //Multiplicação
    resultado = num1 * num2
        document.write(`${num1} x ${num2} = ${resultado}`)
}

if(operacao == '/'){                                                      //Divisão
    if (num2 !== 0) {
        resultado = num1 / num2  
            let resto = num1 % num2
                document.write(`${num1} / ${num2} = ${resultado} Resto: ${resto}`)
    }
}