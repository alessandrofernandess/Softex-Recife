/*Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021. A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2023).

Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.*/

function entrarAnoValido() {
    
    while (true) {
    
    var anoNascimento = prompt("Digite o ano de nascimento (entre 1922 e 2023): ")
    var ano = parseInt(anoNascimento)

    if (!isNaN(ano) && ano >= 1922 && ano <= 2023) {
    
        return ano

    } else {
        
        alert("Tente novamente, o ano deve estar entre 1922 e 2023.")

        }
    }
}

function calcularIdade() {
    
    var nome = prompt("Digite seu nome completo: ")
    var anoDeNascimento = entrarAnoValido()
    var anoAtual = new Date().getFullYear()
    var idade = anoAtual - anoDeNascimento


    alert('Olá, ' + nome + '! Você completou ou completará ' + idade + ' anos em ' + anoAtual + '.')
}

calcularIdade()

