// Modulo 3 - Projeto 2

/*

Aplique o padrão de projeto Observer para criar um simples editor de texto. Considere a solução apresentada no 
Hipertexto 6 e utilize o código visto para implementar novas classes. Os requisitos para avaliar o projeto são:

- Implementar uma subclasse da classe Editor chamada TextEditor.
- Aplicar o método insertLine, que recebe os parâmetros lineNumber e text.
- Inserir o texto na ordem correspondente a lineNumber e deslocar as linhas posteriores se necessário.
- Aplicar o método removeLine, que recebe lineNumber como parâmetro, deleta o texto da linha correspondente e 
desloca as linhas posteriores se necessário
- Instanciar um TextEditor e disparar o evento "open".
- Receber as linhas de texto, que serão inseridas no objeto textEditor>, do usuário até que ele envie o texto “EOF”, que 
não deve ser inserido no objeto textEditor.
- Por fim, o textEditor deve disparar o evento “save” para que o conteúdo seja salvo no arquivo configurado e imprimir 
todo o conteúdo do arquivo na tela

*/

// Resolução

// Implementação do padrão Observer

// Classe Subject (Editor)

class Editor {
    constructor() {
        this.observers = [];
    }
  
    addObserver(observer) {
        this.observers.push(observer);
    }
  
    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
  
    notify(event) {
        this.observers.forEach(observer => observer.update(event));
    }
}
  
// Classe Observer (TextObserver)

class TextObserver {
    constructor() {
        this.text = [];
    }
  
    update(event) {
        if (event === 'open') {
            console.log('Editor aberto');
        } else if (event === 'save') {
            console.log('Conteúdo salvo:', this.text.join('\n'));
        }
    }
  
    insertLine(lineNumber, text) {
        this.text.splice(lineNumber - 1, 0, text);
    }
  
    removeLine(lineNumber) {
        this.text.splice(lineNumber - 1, 1);
    }
}

// Subclasse de Editor (TextEditor)

class TextEditor extends Editor {
    constructor() {
        super();
        this.textObserver = new TextObserver();
        this.addObserver(this.textObserver);
    }
  
    insertLine(lineNumber, text) {
        super.notify('insertLine');
        this.textObserver.insertLine(lineNumber, text);
    }
  
    removeLine(lineNumber) {
        super.notify('removeLine');
        this.textObserver.removeLine(lineNumber);
    }
  
    open() {
        super.notify('open');
        console.log('Digite suas linhas de texto. Digite "EOF" para finalizar:');
        let lineNumber = 1;
        let userInput;
        do {
            userInput = prompt(`Linha ${lineNumber}: `);
                if (userInput !== 'EOF') {
                    this.insertLine(lineNumber, userInput);
                    lineNumber++;
                }
        } while (userInput !== 'EOF');
    }
  
    save() {
        super.notify('save');
    }
}
  
// Exemplo de uso
    const textEditor = new TextEditor();
  
// Usuário abre o editor
    textEditor.open();
  
// Usuário remove uma linha
    textEditor.removeLine(2);
  
// Usuário insere uma nova linha
    textEditor.insertLine(2, 'Nova linha inserida');
  
// Usuário salva o conteúdo
    textEditor.save();
  