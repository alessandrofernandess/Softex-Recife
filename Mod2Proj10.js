/* 

Desenvolva um código que simule uma eleição com três candidatos.

- candidato_X => 889
- candidato_Y => 847
- candidato_Z => 515
- branco => 0

O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo. Se for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente.

Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, também, a quantidade de votos de cada candidato, os brancos e nulos. // Variáveis para armazenar os votos de cada candidato */


// Resolucao em Javascript


var candidatoA = 0;
var candidatoB = 0;
var candidatoC = 0;
var brancos = 0;
var nulos = 0;

function votar() {
  var voto = prompt(`------------------- Votação ------------------- \n
  - Digite 889 para votar no candidato A\n
  - Digite 847 para votar no candidato B\n
  - Digite 515 para votar no candidato C\n
  - Digite 0 para votar em branco \n
  - Digite qualquer outro numero para anular seu voto.`) 
  
  if (isNaN(voto)) {
    
    alert("Opção errada, por favor, escolha uma das opcoes para votar.")

    votar()

    return
  }
  
  var votoInt = parseInt(voto)
  
  
  switch (votoInt) {

    case 889:
      candidatoA++
      break

    case 847:
      candidatoB++
      break

    case 515:
      candidatoC++
      break

    case 0:
      brancos++
      break

    default:
      nulos++
      break
  }
  
exibirResultado()
}

function exibirResultado() {
  var votosCandidatoA = candidatoA
  var votosCandidatoB = candidatoB
  var votosCandidatoC = candidatoC
  var votosBranco = brancos
  var votosNulo = nulos
  
  var vencedor = "Candidato A"
  var maiorVotos = votosCandidatoA

  if (votosCandidatoB > maiorVotos) {
    vencedor = "Candidato B"
    maiorVotos = votosCandidatoB;
  }

  if (votosCandidatoC > maiorVotos) {
    vencedor = "Candidato C"
    maiorVotos = votosCandidatoC
  }
  
  if (votosBranco > maiorVotos){
    vencedor = " Votos Brancos"
    maiorVotos = votosBranco
  }
  
  if (votosNulo > maiorVotos){
    vencedor = " Votos Nulos"
    maiorVotos = votosNulo
  }

alert(`Resultado da eleição:\n
    Candidato A: ${votosCandidatoA}\n
    Candidato B: ${votosCandidatoB}\n
    Candidato C: ${votosCandidatoC}\n
    Votos Brancos: ${votosBranco}\n
    Votos Nulos: ${votosNulo}\n
    Vencedor: ${vencedor}`);
}

votar()
