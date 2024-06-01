abstract class Ingresso{
    valor : number
    constructor(valor : number){
        this.valor = valor
        }

        imprimeValor(){
            console.log(`O valor do ingresso é R$ ${this.valor}`)
        }
}
export default Ingresso