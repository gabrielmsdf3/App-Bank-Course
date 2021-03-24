import { Cliente } from "./Cliente.js";

export class ContaCorrente{
  //toda vez que for chamado, ele vai contar, olhe no constructor//
  static numeroDeContas = 0;
  agencia;
  _cliente;

  set cliente(novoValor){
    if(novoValor instanceof Cliente){
      this._cliente = novoValor;
    }
  }

  get cliente(){
    return this._cliente;
  }
  // #saldo = 0//
  //o atributo com underline, significa que ele só pode ser acessado de dentro da classe//
  _saldo = 0;

  get saldo(){
    return this._saldo;
  }


  constructor(agencia, cliente){
    this.agencia = agencia;
    this.cliente = cliente;
    //o this refere-se a algo especifico, ja o ContaCorrente refere-se a todas as contas e todas vez//
    //que for chamado ele vai contar o numero de contas//
    ContaCorrente.numeroDeContas += 1
  }


  sacar(valor){
    if(this._saldo >= valor){
      this._saldo -=valor;
      return valor;
    }
  }

  depositar(valor){
    if(valor <= 0){
     return;
    }
     this._saldo += valor;
  }

  transferir(valor, conta){
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}