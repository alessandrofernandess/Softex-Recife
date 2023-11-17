// Modulo 1 - Projeto 2

/*

Crie uma fábrica de veículos utilizando o padrão Prototype com base no exemplo apresentado no Hipertexto 2.

Os requisitos do projeto devem ser:

- Implemente uma classe abstrata Veículo com um construtor padrão e os métodos clone e represent
- O construtor da classe Veículo deve receber modelo, marca, cor e numeroRodas como parâmetros
- Crie pelo menos duas subclasses da classe Veículo, que acrescentem um ou mais atributos, por exemplo: carro que tem dois campos a mais,
como numeroRodas e numeroPortas
- Desenvolva uma classe Aplicação que deve criar um array com seis veículos com dois tipos de veículos diferentes (subclasses), 
utilizando o método clone dos objetos para preencher o array
- Na classe Aplicação, implemente um método que retorne um array com o mesmo tamanho do array de veículos, onde cada elemento deve ser um clone dos elementos do array 
veículos
- No final, deve imprimir na tela o retorno da função represent de cada elemento desse novo array de clones de veículos*/

// Resolução

// Definição da função construtora Veiculo

function Veiculo(modelo, marca, cor, numeroRodas) { // Criando atributos comuns a todos os veículos
    
    this.modelo = modelo;
    this.marca = marca;
    this.cor = cor;
    this.numeroRodas = numeroRodas;
}
  
Veiculo.prototype.clone = function () { // Adicionando método clone ao protótipo de Veiculo
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this); // Criando uma cópia do objeto usando Object.assign e Object.create
}

Veiculo.prototype.represent = function () { // Adicionando método represent ao protótipo de Veiculo
    return `${this.marca} ${this.modelo} (${this.cor}, ${this.numeroRodas} rodas)` 
};
  
function Carro(modelo, marca, cor, numeroRodas, numeroPortas) { // Definição da função construtora Carro que herda de Veiculo
    Veiculo.call(this, modelo, marca, cor, numeroRodas); // Chamando o construtor de Veiculo para inicializar atributos comuns
        this.numeroPortas = numeroPortas;
}
  
  
    Carro.prototype = Object.create(Veiculo.prototype)
    Carro.prototype.constructor = Carro; // Corrigindo a referência do construtor para Carro
    Carro.prototype.represent = function () {
        return `${this.marca} ${this.modelo} (${this.cor}, ${this.numeroRodas} rodas, ${this.numeroPortas} portas)`;
};
  
function Aplicacao() {
    this.veiculos = [] // Array para armazenar instâncias de veículos
    
    var carro1 = new Carro('A3', 'Audi', 'Prata', 4, 5); // Criando instâncias de Carro e adicionando ao array
    var carro2 = new Carro('Fiesta', 'Ford', 'Vermelho', 4, 4);
    this.veiculos.push(carro1);
    this.veiculos.push(carro2);
  
    this.veiculos.push(carro1.clone()); // Clonando instâncias de Carro e adicionando ao array
    this.veiculos.push(carro2.clone());
}
  
// Exemplo de uso
    const app = new Aplicacao();
    console.log(app.veiculos[0].represent());
    console.log(app.veiculos[1].represent());
    console.log(app.veiculos[2].represent());
    console.log(app.veiculos[3].represent());