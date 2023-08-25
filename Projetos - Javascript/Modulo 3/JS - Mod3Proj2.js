// Modulo 3 - Projeto 2

// Funcões

///// Function sem parametros

function saudacao() {
    console.log("Olá, mundo!")
}

saudacao()

///// Function com parametros e retornando valor.

function somar(a, b) {
    return a + b
}

var resultado = somar(5, 3)

console.log(resultado)

///// Arrow Function com parametros e retornando valor.

const somarParametros = (a, b) => {
    return a + b;
};

const resultadoSoma = somarParametros(5, 3);

console.log(resultadoSoma)


