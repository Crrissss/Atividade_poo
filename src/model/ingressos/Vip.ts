import Ingresso from "./Ingresso";

class  Vip extends Ingresso{
    valorAdicional: number;


    constructor(valor: number, valorAdicional: number) {
        super(valor)
        this.valorAdicional = valorAdicional
        }

        mostrarValorAdicional(){

            console.log(`O valor adicional é de R$ ${this.valorAdicional}`)
        }

}
export default Vip