import Ingresso from "./Ingresso";

/*c. crie uma classe Camarote, que herda ingresso e possui um
valor adicional. Altere o método imprimeValor para mostrar o
valor do ingresso somado com o adicional. */
class Camarote extends Ingresso {
    constructor(valor: number) {
      super(valor);
    }
    imprimeValor() {
      console.log(this.valor + 10);
    }
  }
  export default Camarote;