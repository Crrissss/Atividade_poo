import Imovel from "./Imovel";

class Novo extends Imovel{
    adicional: number;

    constructor(endereco: string, valor: number, adicional: number){
    super(endereco, valor);
       this.adicional = adicional;
    }
    imprimirValor() {
        console.log(`Endereço do imovel: ${this.endereco}`);
        console.log(`Novo valor do imovel NOVO: ${this.preco + this.adicional}`);
      }
    
}
export default Novo