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
        return this.valorInicial;
    }


} 

class Eletronico extends Ativo { 

    constructor(nome, valorInicial, dataAquisicao, vidaUtilAnos) { 

      super(nome, valorInicial, dataAquisicao); 

        this.vidaUtilAnos = vidaUtilAnos;
    
    } 

    calcularDepreciacao(){
        const deprecicao = this.valorInicial / this.vidaUtilAnos;
        if(deprecicao < 0){
          return 0
        } else {
          return deprecicao
        }

    }

        fichaTecnica(){
            return `O nome do Ativo é: ${this.nome}, seu valor inicial foi de: ${this.valorInicial}, foi adquirido em: ${this.dataAquisicao}, sua vida útil: ${this.vidaUtilAnos} e sua depreciação anual é de:${this.calcularDepreciacao()}`
        }

} 

class Software extends Ativo { 
    
    onstructor(nome, valorInicial, dataAquisicao, licencaMensal) { 

        super(nome, valorInicial, dataAquisicao); 

        this.licencaMensal = licencaMensal ;
    } 

    calcularDepreciacao(){
        return this.licencaMensal
    }
    
    fichaTecnica(){
        return `O nome do Ativo é: ${this.nome}, seu valor inicial foi de: ${this.valorInicial}, foi adquirido em: ${this.dataAquisicao}, e sua licença mensal é de: ${this.licencaMensal}`
    }

} 

 const eletronico1 = new Eletronico ("CLL", 30, "06/12/2008", 8);
 const software1 = new Software ("Lynux", 300,"26/12/2008", 7 );

console.log(` ${eletronico1.fichaTecnica()}e sua drepeciação linear é de: ${eletronico1.calcularDepreciacao()} `); 
console.log(` ${software1.fichaTecnica()}`);
 
///////////////////



class Atividade {
  constructor(nome, custoBase) {
    this.nome = nome;
    this.custoBase = custoBase;
  }

  calcularCustoTotal() {
   
    return this.custoBase;
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
    #verbaAlocada = 0
    nome

    constructor(nome) {
        this.nome = nome
    }
    registrarValorInicial(valorI) {
        this.#verbaAlocada += valorI
        return this.#verbaAlocada
    }
    registrarDespesa(valorD) {
        if (valorD > this.#verbaAlocada) {
            return "Saldo insuficiente!"
        } else {
            return this.#verbaAlocada -= valorD
        }
    }
    consultarSaldo(){
        return `O saldo é de: ${this.#verbaAlocada}`
    }
}

const orcamento1 = new OrcamentoProjeto("PUBA")
console.log(orcamento1.registrarValorInicial(120))
console.log(orcamento1.registrarDespesa(12))
console.log(orcamento1.consultarSaldo())
