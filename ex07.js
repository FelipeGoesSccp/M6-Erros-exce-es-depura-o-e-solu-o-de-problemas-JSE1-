/**
 * Exercício 7: Bloco Finally
 * Unidade Curricular: Programação Front-end
 * Professor: Esp. Leandro Gaudio Rosa
 * 
 * Enunciado:
 * Altere safeParse para escrever no console (com console.log) a mensagem
 * "Parse attempt finished" SEMPRE, independentemente de ter ocorrido erro ou não.
 * Utilize finally para isso e teste ambos os cenários.
 */

console.log("=== Exercício 7: Bloco Finally ===\n");

function safeParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    if (error instanceof SyntaxError) {
      return null;
    }
    throw error;
  } finally {
    // O bloco finally é executado SEMPRE, ocorrendo erro ou não, mesmo com return prévio
    console.log("Parse attempt finished");
  }
}

// Cenário 1: Entrada válida (sem erro)
console.log("--- Cenário 1: JSON Válido ---");
const resultado1 = safeParse('{"nome": "Leandromeda"}');
console.log("Resultado retornado:", resultado1);

console.log("\n--- Cenário 2: JSON Inválido ---");
// Cenário 2: Entrada inválida (com erro)
const resultado2 = safeParse('texto inválido');
console.log("Resultado retornado:", resultado2);
