/**
 * Exercício 2: Erros sem Exceções?
 * Unidade Curricular: Programação Front-end
 * Professor: Esp. Leandro Gaudio Rosa
 * 
 * Enunciado:
 * Dê um exemplo de situação em que algo "deu errado" no seu código mas não gerou uma exceção
 * (isto é, não disparou throw).
 */

console.log("=== Exercício 2: Erros sem Exceções ===\n");

// Exemplo 1: Divisão por zero em JavaScript
// Em linguagens como Python ou Java, dividir por zero lança uma exceção (ZeroDivisionError / ArithmeticException).
// Em JavaScript, a operação falha logicamente mas retorna 'Infinity', sem disparar throw.
const divisaoPorZero = 100 / 0;
console.log("Exemplo 1 (Divisão por zero): 100 / 0 =", divisaoPorZero); 
// Saída: Infinity (não lança exceção, mas provavelmente não é o resultado esperado)

// Exemplo 2: Operação aritmética inválida gerando NaN
// Tentar multiplicar um texto não numérico por um número gera NaN silenciosamente.
const operacaoInvalida = "texto_qualquer" * 3;
console.log("Exemplo 2 (Cálculo inválido): 'texto_qualquer' * 3 =", operacaoInvalida);
// Saída: NaN (Not-a-Number, o fluxo continua mesmo com o dado corrompido)

// Exemplo 3: Acesso a propriedade inexistente de um objeto
const usuario = { nome: "Carlos" };
console.log("Exemplo 3 (Propriedade inexistente): usuario.idade =", usuario.idade);
// Saída: undefined (não quebra o programa, mas pode causar falhas em cascata)

console.log("\nExplicação:");
console.log("JavaScript possui comportamentos permissivos para certas falhas: em vez de lançar exceções com throw, retorna valores sentinela como Infinity, NaN ou undefined, permitindo que a execução continue mesmo com dados inconsistentes.");
