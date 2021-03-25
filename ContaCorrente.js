import { Conta } from "./Conta.js";

//extends significa que tudo que estiver na classe conta, vai ta aqui tambem//
export class ContaCorrente extends Conta{
  //toda vez que for chamado, ele vai contar, olhe no constructor//
  static numeroDeContas = 0;
  constructor(cliente, agencia){
    //o this refere-se a algo especifico, ja o ContaCorrente refere-se a todas as contas e todas vez//
    //que for chamado ele vai contar o numero de contas//
    super(0, cliente, agencia);
    ContaCorrente.numeroDeContas += 1
  }

  //caso precisar fazer um metodo diferente da classe geral conta, voce declara ela na filha e// 
  //ela sobreescreve a pai no caso o valor da taxa foi alterado//
  sacar(valor){
    let taxa = 1.1 ;
    return this._sacar(valor, taxa);
  }

}