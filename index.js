import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionarios/Gerente.js"
import {Diretor} from "./Funcionarios/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

const diretor = new Diretor("Ícaro", 10000, 12345678900);
diretor.cadastrarSenha("12345678")
const gerente = new Gerente("Gabriel", 5000, 1234567898);
gerente.cadastrarSenha("1234")
const estaLogado = SistemaAutenticacao.login(gerente, "1234");

console.log(estaLogado);


