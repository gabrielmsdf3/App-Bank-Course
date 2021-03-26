import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionarios/Gerente.js"
import {Diretor} from "./Funcionarios/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

const diretor = new Diretor("Ícaro", 10000, 12345678900);
diretor.cadastrarSenha("123456")
const gerente = new Gerente("Gabriel", 5000, 1234567898);
gerente.cadastrarSenha("1234")

const cliente = new Cliente("Laís", 29008767891, "456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "1234");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(clienteEstaLogado);
console.log(gerenteEstaLogado);
console.log(diretorEstaLogado);


