/*2. Crie a classe Imovel, que possui um endereço e um preço.
a. crie uma classe Novo, que herda Imovel e possui um adicional
no preço. Crie métodos de acesso e impressão deste valor
adicional.
b. crie uma classe Velho, que herda Imovel e possui um desconto
no preço. Crie métodos de acesso e impressão para este
desconto. */
class Imovel {
    endereco:string
    preco:number

    constructor(endereco:string, preco:number){
        this.endereco = ""
        this.preco = 0

    }
}
export default Imovel