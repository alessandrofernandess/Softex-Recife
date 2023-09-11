// Modulo 4 - Projeto 1

// Objetos

let banco = {
    conta: 123456,
    saldo: 20000,
    tipoDeConta: 'Corrente',
    agencia: 4321.0,

    buscarSaldo: function(){
        return this.saldo
    },

    depositar: function(valor){
        this.saldo += valor
    },

    sacar: function(valor){
        this.saldo -= valor
    },

    mostrarConta: function(){
        return this.conta
    }
}

console.log(`Seu Saldo é: R$${banco.buscarSaldo()}`)
banco.depositar(500)
console.log(`Seu Saldo é: R$${banco.buscarSaldo()}`)
banco.sacar(200)
console.log(`Seu saldo é: R$${banco.buscarSaldo()}`)
console.log(`O numero da sua conta bancaria é: ${banco.mostrarConta()}`)