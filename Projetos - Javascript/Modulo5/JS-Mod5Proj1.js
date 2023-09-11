// Modulo 5 - Projeto 1

// Criar tipo abstrato de dado(TAD) para manipular numeros complexos em javascript.

class NumeroComplexo {

    constructor(real, imaginario) {
      this.real = real;
      this.imaginario = imaginario;
    }
  
    // Adicionar dois números complexos

    adicionar(outroComplexo) {
      const realPart = this.real + outroComplexo.real;
      const imaginaryPart = this.imaginario + outroComplexo.imaginario;
      return new NumeroComplexo(realPart, imaginaryPart);
    }
  
    // Subtrair dois números complexos

    subtrair(outroComplexo) {
      const realPart = this.real - outroComplexo.real;
      const imaginaryPart = this.imaginario - outroComplexo.imaginario;
      return new NumeroComplexo(realPart, imaginaryPart);
    }
  
    // Multiplicar dois números complexos

    multiplicar(outroComplexo) {
      const realPart =
        this.real * outroComplexo.real - this.imaginario * outroComplexo.imaginario;
      const imaginaryPart =
        this.real * outroComplexo.imaginario + this.imaginario * outroComplexo.real;
      return new NumeroComplexo(realPart, imaginaryPart);
    }
  
    // Dividir dois números complexos

    dividir(outroComplexo) {
      const denominador =
        outroComplexo.real * outroComplexo.real +
        outroComplexo.imaginario * outroComplexo.imaginario;
      const realPart =
        (this.real * outroComplexo.real + this.imaginario * outroComplexo.imaginario) /
        denominador;
      const imaginaryPart =
        (this.imaginario * outroComplexo.real - this.real * outroComplexo.imaginario) /
        denominador;
      return new NumeroComplexo(realPart, imaginaryPart);
    }
  
    // Imprimir as propriedades

    imprimirPropriedades() {
      console.log(`Número Complexo: ${this.real} + ${this.imaginario}i`);
    }
  }
  
  // Criar três números complexos

  const complexo1 = new NumeroComplexo(2, 3);
  const complexo2 = new NumeroComplexo(1, -1);
  const complexo3 = new NumeroComplexo(4, 2);
  
  // Operações

  const soma = complexo1.adicionar(complexo2);
  const diferenca = complexo1.subtrair(complexo2);
  const produto = complexo1.multiplicar(complexo2);
  const quociente = complexo1.dividir(complexo2);
  
  // Imprimir as propriedades dos números complexos e os resultados das operações

  console.log("Complexo 1:");
  complexo1.imprimirPropriedades();
  
  console.log("Complexo 2:");
  complexo2.imprimirPropriedades();
  
  console.log("Complexo 3:");
  complexo3.imprimirPropriedades();
  
  console.log("Soma de Complexo 1 e Complexo 2:");
  soma.imprimirPropriedades();
  
  console.log("Diferença de Complexo 1 e Complexo 2:");
  diferenca.imprimirPropriedades();
  
  console.log("Produto de Complexo 1 e Complexo 2:");
  produto.imprimirPropriedades();
  
  console.log("Quociente de Complexo 1 e Complexo 2:");
  quociente.imprimirPropriedades();
  