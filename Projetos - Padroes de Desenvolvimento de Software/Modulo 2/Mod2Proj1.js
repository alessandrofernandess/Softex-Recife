// Modulo 2 - Projeto 1

/*

Aplique o padrão de projeto decorator para criar um sanduíche de frango assado com pepperoni e queijo mussarela ralado.

O projeto deve seguir os seguintes critérios:

- Deve imprimir no console: Sanduíche de Carne, Bacon, QueijoMussarelaRalado custa $7,49.
- O sanduíche de frango assado custa $4,50.
- O ingrediente adicional pepperoni custa $0,99.
- O ingrediente adicional queijo mussarela ralado custa $2,00.
- Crie as classes necessárias: FrangoAssado, Pepperoni e QueijoMussarelaRalado.

*/

// Resolução

// Interface

function Componente() {}

Componente.prototype.getPreco = function () {
    throw new Error("Método não implementado");
};

Componente.prototype.getNome = function () {
    throw new Error("Método não implementado");
};

// Classe concreta FrangoAssado

function FrangoAssado() {}

    FrangoAssado.prototype = Object.create(Componente.prototype);
    FrangoAssado.prototype.constructor = FrangoAssado;

    FrangoAssado.prototype.getPreco = function () {
        return 4.5;
};

    FrangoAssado.prototype.getNome = function () {
        return "Frango Assado";
};

// Classe Decorator abstrata

function Decorador(componente) {
    this.componente = componente;
}

Decorador.prototype.getPreco = function () {
    return this.componente.getPreco();
};

Decorador.prototype.getNome = function () {
    return this.componente.getNome();
};

// Classe concreta Pepperoni

function Pepperoni(componente) {
    Decorador.call(this, componente);
}

    Pepperoni.prototype = Object.create(Decorador.prototype);
    Pepperoni.prototype.constructor = Pepperoni;

    Pepperoni.prototype.getPreco = function () {
        return this.componente.getPreco() + 0.99;
};

    Pepperoni.prototype.getNome = function () {
        return this.componente.getNome() + ", Pepperoni";
};

// Classe concreta QueijoMussarelaRalado

function QueijoMussarelaRalado(componente) {
    Decorador.call(this, componente);
}

    QueijoMussarelaRalado.prototype = Object.create(Decorador.prototype);
    QueijoMussarelaRalado.prototype.constructor = QueijoMussarelaRalado;

    QueijoMussarelaRalado.prototype.getPreco = function () {
        return this.componente.getPreco() + 2;
};

    QueijoMussarelaRalado.prototype.getNome = function () {
        return this.componente.getNome() + ", Queijo Mussarela Ralado";
};

// Função para exibir o sanduíche no console

function exibirSanduiche(sanduiche) {
    console.log(`Sanduíche: ${sanduiche.getNome()} custa $${sanduiche.getPreco().toFixed(2)}`);
}

// Instanciando e personalizando o sanduíche

let sanduiche = new FrangoAssado();
    sanduiche = new Pepperoni(sanduiche); // Adicionando Pepperoni ao FrangoAssado
    sanduiche = new QueijoMussarelaRalado(sanduiche); // Adicionando QueijoMussarelaRalado ao sanduíche

// Exibindo o sanduíche no console

exibirSanduiche(sanduiche);
