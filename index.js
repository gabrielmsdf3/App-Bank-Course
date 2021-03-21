class Cliente {
  nome;
  cpf;
}

class ContaCorrente{
  agencia;
  // #saldo = 0//
  //o atributo com underline, significa que ele só pode ser acessado de dentro da classe//
  _saldo = 0;

  sacar(valor){
    if(this._saldo >= valor){
      this._saldo -=valor;
    }
  }

  depositar(valor){
    if(valor > 0){
      this._saldo += valor;
      console.log(this._saldo);
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
contaCorrenteGabriel.agencia = 1001;

contaCorrenteGabriel.depositar(100);
contaCorrenteGabriel.depositar(100);
contaCorrenteGabriel.sacar(50);

console.log(contaCorrenteGabriel);
