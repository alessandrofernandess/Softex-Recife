// Modulo 1 - Projeto 3

/* 

Você é um agente secreto altamente treinado da organização inglesa MI7 e recebeu uma missão crítica: proteger a Base Secreta contra invasões inimigas. O local contém informações vitais para a segurança mundial e só pode ser acessado por um único sistema de segurança confiável.

A sua tarefa é implementar um sistema de segurança para a Base Secreta usando o padrão Singleton em TypeScript. A ideia é que apenas uma instância do sistema de segurança possa ser criada, garantindo que o local esteja bem protegido

Instruções
1) Crie uma classe chamada SistemaSeguranca. Ela deve implementar o padrão Singleton. Certifique-se de que apenas uma instância da classe possa ser criada

2) A classe SistemaSeguranca deve ter um método chamado acessarBaseSecreta. Ele verifica se a senha inserida pelo agente coincide com a da Base Secreta. Se estiver correta, o acesso é concedido. Caso contrário, é negado

3) Crie um programa principal que demonstre o uso do Singleton SistemaSeguranca. No programa, um agente secreto tentará acessar a Base Secreta inserindo uma senha. Se a senha estiver correta, o acesso será concedido. Caso contrário, será negado.

*/

// Resolução

class SistemaSeguranca {
    private static instancia: SistemaSeguranca | null = null;
    private senhaBaseSecreta: string = "senha123";
  
    private constructor() {}
  
    public static getInstance(): SistemaSeguranca {
      if (!SistemaSeguranca.instancia) {
        SistemaSeguranca.instancia = new SistemaSeguranca();
      }
      return SistemaSeguranca.instancia;
    }
  
    public acessarBaseSecreta(senha: string): void {
      if (senha === this.senhaBaseSecreta) {
        console.log("Acesso concedido. Seja Bem-vindo!");
      } else {
        console.log("Acesso negado!");
      }
    }
  }
  
  // Programa principal
  const sistemaSeguranca = SistemaSeguranca.getInstance();
  
  // Tentativa de acesso
  sistemaSeguranca.acessarBaseSecreta("senhaIncorreta"); // Acesso negado
  
  // Tentativa de acesso com a senha correta
  sistemaSeguranca.acessarBaseSecreta("senhaSuperSecreta123"); // Acesso concedido