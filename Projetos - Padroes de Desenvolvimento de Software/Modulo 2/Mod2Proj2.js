// Modulo 2 - Projeto 2

/*

Crie um adaptador que permita que um objeto do tipo Pato seja usado como se fosse um objeto do tipo Galinha.

Siga o exemplo apresentado no Hipertexto 4 e crie as classes AdaptadorPato e AdaptadorPatoDemo para demonstrar
o uso da classe AdaptadorPato.

*/

// Resolução

class Galinha {

    andar() {
        console.log("A galinha anda");
    }

    falar() {
        console.log("A galinha fala");
    }
}
   class Pato {

    voar() {
        console.log("O pato voa");
    }
    falar() {
        console.log("O pato fala");
    }
}

class AdaptadorP extends Galinha {

    constructor(pato) {
    super();
        this.pato = pato;
    }
    
    andar() {
        this.pato.voar();
    }
    falar() {
        super.falar();
        this.pato.falar();
    }
}

// Instanciando um Pato

   let pato = new Pato();
   let adaptadorP = new AdaptadorP(pato);

// Chamando os métodos do AdaptadorP para testar a adaptação

   adaptadorP.andar();
   adaptadorP.falar()