const estoque = { 
 "teclado": true, 
 "monitor": false, 
 "mouse": true, 
 "servidor": false 
}; 

function verificarStatusItem(item, callback){
    return callback(item);
}
function buscarstatus(item){
    if (estoque[item]){
        return "Item disponível para despacho";
    } else {
        return "Item em falta no estoque"
    }
}

console.log(verificarStatusItem("servidor", buscarstatus));
console.log(verificarStatusItem("teclado", buscarstatus));
 
///////////////


class Tarefa { 
    constructor(descricão, prioridade, duracaoEstimada) { 
        this.descricão=descricão

        this.prioridade=prioridade

        this.duracaoEstimada= duracaoEstimada

    } 
    
    detalharTarefa(){
        return `A tarefa é: ${this.descricão}, sua prioridade é: ${this.prioridade},e sua duração é de: ${this.duracaoEstimada}`
    }

    alterarPrioridade(novaPrioridade){
        return `A prioridade agora é:${this.prioridade=novaPrioridade}`
    }
}


const tarefa1 = new Tarefa( "Jogar bola", "Alta", "Em torno de 3hora")

console.log(`${tarefa1.detalharTarefa()}`)

console.log(tarefa1.alterarPrioridade("Baixa"))


////////////////////


class CustoProjeto { 

     constructor(nomeProjeto,orcamentoBase,diasPlanejados) { 

        this.nomeProjeto = nomeProjeto
        this.orcamentoBase = orcamentoBase

        this. diasPlanejados = diasPlanejados

    } 

   resumoCusto() { 
    return `Esse é o nome do projeto: ${this.nomeProjeto}, seu orçamento base é: ${this.orcamentoBase},e sua duração é de: ${this.diasPlanejados}`

    } 
    
   calcularCustoDiario(){
      return this.orcamentoBase / this.diasPlanejados;
    }
}


const projeto1 = new CustoProjeto("Cyberzinhos", 100000, 100)

console.log(`${projeto1.resumoCusto()}`);
console.log(`Seu custo diario é de: ${projeto1.calcularCustoDiario()}`);

////////////////

class Ativo { 

    constructor(nome, valorInicial, dataAquisicao) { 

        this.nome = nome

        this.valorInicial = valorInicial

        this.dataAquisicao = dataAquisicao

    } 
    calcularDepreciacao(){
        return 0;
    }


} 

class Eletronico extends Ativo { 

    constructor(nome, vidaUtilAnos) { 

        super(nome, 3000, "06/12/08") 

        this.vidaUtilAnos = vidaUtilAnos;
    
    } 

    calcularDepreciacao(){
        return this.valorInicial / this.vidaUtilAnos;
    }

        fichaTecnica(){
            return `O nome do Ativo é: ${this.nome}, seu valor inicial foi de: ${this.valorInicial}, foi adquirido em: ${this.dataAquisicao},`
        }

} 

class Software extends Ativo { 
    
    constructor(nome, licencaMensal) { 

        super(nome, 2000, "06/12/08") 

        this.licencaMensal = licencaMensal ;
    } 

    calcularDepreciacao(){
        return this.licencaMensal
    }
    
    fichaTecnica(){
        return `O nome do Ativo é: ${this.nome}, seu valor inicial foi de: ${this.valorInicial}, foi adquirido em: ${this.dataAquisicao}, e sua licença mensal é de: ${this.licencaMensal}`
    }

} 

 const eletronico1 = new Eletronico ("CLL", 30);
 const software1 = new Software ("Lynux", 300);

console.log(` ${eletronico1.fichaTecnica()}e sua drepeciação linear é de: ${eletronico1.calcularDepreciacao()} `); 
console.log(` ${software1.fichaTecnica()}`);
 
///////////////////



class Atividade {
  constructor(nome, custoBase) {
    this.nome = nome;
    this.custoBase = custoBase;
  }

  calcularCustoTotal() {
   
    return 0;
  }
}

class BaixoRisco extends Atividade {
  constructor(nome, custoBase,custototal) {
    super(nome, custoBase);
    this.custototal = custototal;
  }

  calcularCustoTotal() {
    return (this.custototal = this.custoBase *10 /100 );
  }
}

class MedioRisco extends Atividade {
  constructor(nome, custoBase) {
    super(nome, custoBase);
  }

  calcularCustoTotal() {
    return this.custoBase ;
  }
}
class AltoRisco extends Atividade {
  constructor(nome, custoBase, custototal) {
    super(nome, custoBase);
    this.custototal= custototal
  }
  calcularCustoTotal(){
    return (this.custototal + 500) ;
}
}
const Atividades = [
  new BaixoRisco("Bolsa de valores", 200, ),
  new BaixoRisco("Mega", 200, ),
  new MedioRisco("Investir", 200, ),
  new MedioRisco("Cripto", 200, ),
  new AltoRisco("Investir bolsa", 200, ),
];

for(let i = 0; i < Atividades.length; i++) {
  let A = Atividades[i];
  console.log(`${A.descricao}, ${A.calcularCustoTotal()} `);
}

////////////////////////

class OrcamentoProjeto {

  #verbaAlocada;
  nomeProjeto;
  constructor(nomeProjeto, verbaAlocada) {
    this.nomeProjeto = nomeProjeto;
    this.#verbaAlocada  = verbaAlocada;
  }
  registrarVerbaInicial(valor){
    if(valor > 0){
      this.quantidade += qtd;
    } else {
      return "Quantidade inválida";
    }
   }
  retiraPedido(qtd){
    if(qtd <= this.quantidade){
      this.quantidade -= qtd;
    }
  }
  consultarEstoque(){
    return `Você tem ${this.quantidade} unidades de ${this.nome} em estoque.`
  }
}

let produto2 = new Almoxarifado("Parafusos", 100);
console.log(produto1.consultarEstoque());
produto1.adicionarEstoque(50);
console.log(produto1.consultarEstoque());
produto1.retiraPedido(30);
console.log(produto1.consultarEstoque());