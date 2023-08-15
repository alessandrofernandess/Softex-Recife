// Modulo 3 - Projeto 4

// Crie uma lista encadeada em que cada elemento representa uma pessoa.

// Ela precisa conter informações como nome, idade e referência ao filho dela.

// Resolução:

class Pessoa {

    constructor(nome, idade, filho = null) {
      this.nome = nome;
      this.idade = idade;
      this.filho = filho;
    }
  }
  
  let pessoa2 = new Pessoa("Lucas", 10);
  let pessoa1 = new Pessoa("Alessandro", 35, pessoa2);
  
  pessoa1.next = pessoa2
  
  let pessoaAtual = pessoa1;
  
  while (pessoaAtual !== null) {
    
    console.log('Nome: ' + pessoaAtual.nome + ', Idade: ' + pessoaAtual.idade)
    
    if (pessoaAtual.filho !== null) {
  
      console.log('Filho: ' + pessoaAtual.filho.nome);
      
    }
    
    console.log('-------');
    
    pessoaAtual = pessoaAtual.next;
  }
  