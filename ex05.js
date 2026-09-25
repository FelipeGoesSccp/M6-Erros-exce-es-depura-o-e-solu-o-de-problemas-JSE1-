/**
 * Exercício 5: Try…Catch Básico
 * Unidade Curricular: Programação Front-end
 * Professor: Esp. Leandro Gaudio Rosa
 * 
 * Enunciado:
 * Escreva uma função safeParse(jsonString) que tente converter uma string JSON em objeto:
 * - Use try…catch para retornar o objeto parseado, ou, em caso de erro, retornar null
 *   sem interromper a execução.
 * Teste com:
 * console.log(safeParse('{"nome": "Leandromeda"}')); // → { nome: "Leandromeda" }
 * console.log(safeParse('texto inválido'));     // → null
 */

console.log("=== Exercício 5: Try…Catch Básico ===\n");

function safeParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    // Em caso de qualquer falha na conversão, retorna null sem quebrar a execução
    return null;
  }
}

// Testes solicitados no enunciado:
console.log(safeParse('{"nome": "Leandromeda"}')); // → { nome: "Leandromeda" }
console.log(safeParse('texto inválido'));          // → null
