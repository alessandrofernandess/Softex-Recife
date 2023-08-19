// Modulo 1 - Projeto 4

// Cadastro de Pessoas

let nome = prompt('Digite seu nome: ')                                         //String 
let salario = parseFloat(prompt('Digite seu salario: '))                       //Number
let idade = parseInt(prompt('Digite sua idade: '))                             //Number
let diploma = prompt('Voce tem diploma? Digite Sim ou Nao')                    //Boolean


console.log('----- Cadastro -----')    
console.log('Nome: ' + nome + '\n' + 'Salario: $' + salario + '\n' + 'Idade: ' + idade + ' Anos')

if(diploma == 'Sim'){
    console.log('Usuario tem diploma')
}else{
    console.log('Usuario nao tem diploma')
}