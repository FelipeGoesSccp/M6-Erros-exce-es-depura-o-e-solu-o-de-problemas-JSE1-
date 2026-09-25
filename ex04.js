/**
 * Exercício 4: Tipos de Erros em JS
 * Unidade Curricular: Programação Front-end
 * Professor: Esp. Leandro Gaudio Rosa
 * 
 * Enunciado:
 * Para cada um dos seguintes erros nativos de JS, explique em qual situação eles ocorrem:
 * - ReferenceError
 * - TypeError
 * - SyntaxError
 */

console.log("=== Exercício 4: Tipos de Erros Nativos em JS ===\n");

// 1. ReferenceError
console.log("1. ReferenceError:");
console.log("Situação: Ocorre quando se tenta acessar uma variável ou identificar um identificador que não foi declarado ou não existe no escopo atual.");
try {
  // Tentando acessar uma variável que nunca foi declarada
  console.log(variavelInexistente);
} catch (error) {
  console.log(`Exemplo capturado: [${error.name}] ${error.message}\n`);
}

// 2. TypeError
console.log("2. TypeError:");
console.log("Situação: Ocorre quando uma operação é realizada em um valor de tipo inadequado (ex: tentar invocar um número como função, ou acessar propriedades de null/undefined).");
try {
  const numero = 42;
  // Tentando chamar método de string em um número ou executar o número como função
  numero.toUpperCase();
} catch (error) {
  console.log(`Exemplo capturado: [${error.name}] ${error.message}\n`);
}

// 3. SyntaxError
console.log("3. SyntaxError:");
console.log("Situação: Ocorre quando as regras gramaticais e sintáticas do JavaScript são violadas. Em tempo de execução, é comumente gerado ao fazer parse de dados malformados com JSON.parse() ou eval().");
try {
  // JSON malformado (falta de aspas duplas nas chaves e valor não delimitado)
  JSON.parse("{ nome: invalido }");
} catch (error) {
  console.log(`Exemplo capturado: [${error.name}] ${error.message}\n`);
}
