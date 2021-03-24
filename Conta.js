export class Conta {
  constructor(saldoInicial, cliente, agencia){
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
  let taxa = 1.1 
  const valorSacado = taxa * valor
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