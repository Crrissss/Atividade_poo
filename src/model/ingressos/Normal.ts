import Ingresso from "./Ingresso";

class Normal extends Ingresso {
    constructor(valor: number) {
      super(valor);
    }
    imprimeValor() {
      console.log(this.valor);
    }
  }
  export default Normal;