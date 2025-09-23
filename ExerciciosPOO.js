// class InstrumentoMusical {
//   tocar() {
//     console.log("Tocando um instrumento musical");
  
// }
// }
// class Violao extends InstrumentoMusical {
//   tocar() {
//     console.log("Tocando o violão: Strum, strum...");
//   }
// }

// class Piano extends InstrumentoMusical {
//   tocar() {
//     console.log("Tocando o piano: Do, Re, Mi...");
//   }
// }


// const violao = new Violao();
// violao.tocar(); 

// const piano = new Piano();
// piano.tocar(); 


// class funcionario {    
//     constructor(nome, salario, bonus){
//         this.nome = nome
//         this.salario = salario
//         this.bonus = bonus
//     }
// }
// class Gerente extends funcionario {
//     constructor(nome, salario, bonus){
//         super(nome, salario, bonus)
//     }   
// }

// let gerente = new Gerente("Gustavo", 5000, 1000)

// console.log(`O nome do meu gerente é ${gerente.nome} tem um ${gerente.salario} e teve um bonus de ${gerente.bonus}`);




// class Veiculo {
//     constructor(marca, ano, portas, cilindradas){
//         this.marca = marca
//         this.ano = ano
// }
// }

// class Carro extends Veiculo {
//     constructor (marca, ano, portas){
//         super(marca, ano, portas )
//         this.portas = portas
//     }
// }
// class Moto extends Veiculo {
//     constructor (marca, ano, cilindradas){
//         super(marca, ano, cilindradas )
//         this.cilindradas = cilindradas
//     }
//     } 

// let carro1 = new Carro ("mitshubichi", 2015, 4)
// console.log(`O carro Lancer da marca ${carro1.marca} do ano de ${carro1.ano} com ${carro1.portas} portas`)

// let moto1 = new Moto ("kawasaki", 2015, 7)
// console.log(`A moto ${moto1.marca} ninja do ano de ${moto1.ano} com ${moto1.cilindradas} cilindradas`)




// class funcionario {
//     constructor(salario){
//         this.salario = salario
//     }
// }

// class Gerente extends funcionario {
//     constructor (salario){
//         super(salario)
//     }
//     calcularSalario(){
//         return this.salario + (this.salario * 30/100)
//     }

// }
// class desenvolvedor extends funcionario {
//     constructor (salario){
//         super(salario)
//     }
//     calcularSalario(){
//         return this.salario + (this.salario * 20/100)
//     }
// }
// let gerente1 = new Gerente(2000)
// let desenvolvedor1 = new desenvolvedor(2000)
// console.log(`O salario do gerente é ${gerente1.calcularSalario()}`)
// console.log(`O salario do desenvolvedor é ${desenvolvedor1.calcularSalario()}`)



// class ContaBancaria{
//     constructor (titular,saldo){
//         this.titular = titular
//         this.saldo = saldo
//     }

//     depositar(){
//         return "depósito"
//     }

//     sacar(){
//         return"saque"
//     }
// }

// class ContaCorrente extends ContaBancaria{
//     constructor(titular, saldo, saque){
//         super(titular,saldo)
//         this.saque = saque
//     }
//     sacar(){
//         return this.saque + 2
//     }
// }

// class ContaPoupanca extends ContaBancaria{
//         constructor(titular, saldo, valor){
//             super(titular, saldo)
//             this.valor = valor
//         }      
//             AtualizarSaldo(valor){
//                 return this.valor + (this.valor * 5 / 100)

// }
// }

// let corrente1 = new ContaCorrente ('Ana Carla', 5000, 90)
// let poupanca1 = new ContaPoupanca ('Kátia', 3000, 30)

// console.log(`A ${corrente1.titular} tem ${corrente1.saldo} de saldo e vai sacar ${corrente1.sacar()}.`)

// console.log(`A ${poupanca1.titular} tem ${poupanca1.saldo} de saldo e tem uma renda de ${poupanca1.AtualizarSaldo()}.`)




class Produto {
    constructor(nome, preco){
        this.#nome = nome;
        this.#preco = preco;
    }

    get getNome(){
        return this.#nome;
    }
    get getPreco(){
        return this.#preco;
    }   
    set nome(novoNome){
        this.#nome = novoNome
    }
    set preco(novoPreco){
        if (novoPreco >= 0){
            console.log("Preço invalido")
            return
        }
        this.#preco = novoPreco
    }   
}
    let produto1 = new Produto("Camiseta",79.90)
    console.log(`O produto é ${produto1.getNome} e custa ${produto1.getPreco}`);

    