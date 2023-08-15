// Modulo 2 - Projeto 8

// Projeto feito em Javascript

/* Faça, utilizando o Google Blockly, uma função calculadora que os números e as operações serão feitas pelo usuário. O código deve ficar rodando infinitamente até que o usuário escolha a opção de sair. No início, o programa mostrará a seguinte lista de operações:

1: Soma
2: Subtração
3: Multiplicação
4: Divisão
0: Sair

Digite o número para a operação correspondente e caso o usuário introduza qualquer outro, o sistema deve mostrar a mensagem “Essa opção não existe” e voltar ao menu de opções.

Após a seleção, o sistema deve pedir para o usuário inserir o primeiro e segundo valor, um de cada. Depois precisa executar a operação e mostrar o resultado na tela. Quando o usuário escolher a opção “Sair”, o sistema irá parar. 

É necessário que o sistema mostre as opções sempre que finalizar uma operação e mostrar o resultado. */

// Resolução:

function calculadora() {

    while (true) {
      console.log(" Calculadora ")
      console.log("1 - Soma")
      console.log("2 - Subtração")
      console.log("3 - Multiplicação")
      console.log("4 -Divisão")
      console.log("0 - Sair")
  
      var operacao = parseFloat(prompt("Digite o número da operação:"))
  
      if (operacao === 0) {

        console.log("Saindo...")

        break;

      } else if (operacao >= 1 && operacao <= 4) {

        var valor1 = parseFloat(prompt("Digite o primeiro valor:"))
        var valor2 = parseFloat(prompt("Digite o segundo valor:"))
        var resultado
  
        switch (operacao) {
          case 1:
            resultado = valor1 + valor2;
            break;

          case 2:
            resultado = valor1 - valor2;
            break;

          case 3:
            resultado = valor1 * valor2;
            break;

          case 4:
            resultado = valor1 / valor2;
            break;
        }
  
        console.log("Resultado:" + resultado);

      } else {

        console.log("Opção invalida, tente novamente!");
      }
    }
  }
  
  calculadora();
  
