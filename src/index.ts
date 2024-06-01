/*1. Crie uma classe abstrata chamada Ingresso que possui um valor
em reais e um método imprimeValor()
a. crie uma classe Normal, que herda Ingresso..
b. crie uma classe VIP, que herda Ingresso e possui um valor
adicional. Altere o método imprimeValor para mostrar o valor
do ingresso somado com o adicional.




3. Dado o seguinte diagrama:

Identifique os atributos e comportamentos que são comuns entre os
3 animais e encapsule-os na superclasse Animal. Crie pelo menos 1
comportamento diferente para cada animal. */

import Normal from "./model/ingressos/Normal";
import Vip from "./model/ingressos/Vip";
import Camarote from "./model/ingressos/Camarote";
import Novo from "./model/ingressos/imovel/Novo";

const ingressoNormal = new Normal(20);
const ingressoVip = new Vip(20,5);
const ingressoCamarote = new Camarote(20);


ingressoNormal.imprimeValor();
ingressoVip.imprimeValor();
ingressoCamarote.imprimeValor();


const imovelNovo = new Novo("ue", 2000, 1000);
imovelNovo.imprimirValor();