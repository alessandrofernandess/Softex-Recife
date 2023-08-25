// Modulo 2 - Projeto 3

// 2 programas de sistemas de notas para uma escola

// Informar se o aluno reprovou ou nao.

let nota1 = parseFloat(prompt('Digite sua primeira nota: '))
let nota2 = parseFloat(prompt('Digite sua segunda nota: '))
let nota3 = parseFloat(prompt('Digite sua terceira nota: '))

let media = (nota1 + nota2 + nota3)/3

if (media >= 7 && media <= 10){
    document.write(`Media: ${media} - Aluno Aprovado`)
} else{
    document.write(`Media: ${media} - Aluno Reprovado`)
}

// Nota minima para media 7

let valor1 = parseFloat(prompt('Digite sua primeira nota: '))
let valor2 = parseFloat(prompt('Digite sua segunda nota: '))
let mediaAtual = (valor1 + valor2)/2
let mediaDesejada = 7

if(mediaAtual < mediaDesejada){
    let notaMinima = (mediaDesejada * 2) - mediaAtual
        console.log(`O aluno precisa tirar ${notaMinima} para passar com a media 7 `)
}else{
    console.log('Aluno ja Aprovado')
}