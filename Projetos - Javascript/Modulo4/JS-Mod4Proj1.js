// Modulo 4 - Projeto 1

// Objetos

class Banco{

    constructor(){
    this.conta = 123456
    this.tipoDeConta = "Conta Corrente"
    this.saldo = 2000
    this.agencia = 432.1
    }

    buscarSaldo(){
        return this.saldo
    }

    depositar(valorDeposito){
        this.saldo += valorDeposito
    }

    sacar(valorSaque){
        this.saldo -= valorSaque
    }

    mostrarConta(){
        return this.conta
    }
}

let contaBancaria = new Banco()

console.log(`Seu Saldo é: R$${contaBancaria.buscarSaldo()}`)
contaBancaria.depositar(500)
contaBancaria.sacar(200)
console.log(`O numero da sua conta bancaria é: ${contaBancaria.mostrarConta()}`)
console.log(`Seu saldo é: R$${contaBancaria.buscarSaldo()}`)