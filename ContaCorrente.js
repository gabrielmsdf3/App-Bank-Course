export class ContaCorrente{
  agencia;
  // #saldo = 0//
  //o atributo com underline, significa que ele só pode ser acessado de dentro da classe//
  _saldo = 0;

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
}