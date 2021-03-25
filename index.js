import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import {Conta} from "./Conta.js"
import { ContaSalario } from "./ContaSalario.js";

const cliente1 = new Cliente("Gabriel", 11122233309);

const contaCorrenteGabriel = new ContaCorrente(cliente1, 1001);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001)

const contaSalarioGabriel = new ContaSalario(cliente1)
contaSalarioGabriel.depositar(100);
contaSalarioGabriel.sacar(10)

console.log(contaSalarioGabriel);







