//Classe abstrata, ou seja, voce nao usa ela diretamenta, ela só serve para ser herdade//
export class Conta {
  constructor(saldoInicial, cliente, agencia){
    if(this.constructor == Conta){
      throw new Error("Você não deveria instanciar um objeto do tipo conta");
    }
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
    
}

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
get saldo(){
  return this._saldo;
}

sacar(valor){
  throw new Error("o método Sacar da conta é abstrato")
}

_sacar(valor, taxa){
  const valorSacado = taxa * valor
  if(this._saldo >= valorSacado){
    this._saldo -=valorSacado;
    return valorSacado;
  }
  return 0;
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