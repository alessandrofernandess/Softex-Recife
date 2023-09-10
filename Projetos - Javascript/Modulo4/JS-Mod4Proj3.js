// Modulo 4 - Projeto 3

// Array de Objetos

const pessoas = [
    { nome: 'Bruna', idade: 34, profissao: 'Artesa', cidade: 'Recife' },
    { nome: 'Lucas', idade: 20, profissao: 'Jogador', cidade: 'Sao Paulo' },
    { nome: 'Carolina', idade: 20, profissao: 'Chef', cidade: 'Belo Horizonte' },
    { nome: 'Ana', idade: 28, profissao: 'Professora', cidade: 'Porto Alegre' }
  ]
  
  // Usando o 'for...in'

    for (let i = 0; i < pessoas.length; i++) {
        console.log(`Pessoa ${i + 1}:`);
    for (const propriedade in pessoas[i]) {
        console.log(`${propriedade}: ${pessoas[i][propriedade]}`);
    }
    console.log('------------------------');
  }
  
  // Usando o loop 'for...of'

  let indice = 1;

    for (const pessoa of pessoas) {
        console.log(`Pessoa ${indice}:`);
    for (const propriedade in pessoa) {
        console.log(`${propriedade}: ${pessoa[propriedade]}`);
    }
    console.log('------------------------');
        indice++;
  }
  
  