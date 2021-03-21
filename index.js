class Cliente {
  nome;
  cpf;
}

class ContaCorrente{
  agencia;
  saldo;

  sacar(valor){
    if(this.saldo >= valor){
      this.saldo -=valor;
    }
  }
}



const cliente1 = new Cliente();
cliente1.nome = "Gabriel";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Larisse";
cliente2.cpf = 88822233309;

const contaCorrenteGabriel = new ContaCorrente();
contaCorrenteGabriel.saldo = 0;
contaCorrenteGabriel.agencia = 1001;

console.log(contaCorrenteGabriel.saldo);
contaCorrenteGabriel.saldo = 100;
console.log(contaCorrenteGabriel.saldo);
contaCorrenteGabriel.sacar(50);




console.log(contaCorrenteGabriel.saldo);
console.log(cliente1);
console.log(cliente2);