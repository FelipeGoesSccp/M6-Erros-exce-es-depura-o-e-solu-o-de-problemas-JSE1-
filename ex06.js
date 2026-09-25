/**
 * Exercício 6: Tratamento Condicional de Exceções
 * Unidade Curricular: Programação Front-end
 * Professor: Esp. Leandro Gaudio Rosa
 * 
 * Enunciado:
 * Melhore safeParse para que, no catch, você verifique se o erro é um SyntaxError.
 * - Se for SyntaxError, retorne null.
 * - Caso contrário, relance a exceção (usando throw) para não "engolir" erros inesperados.
 */

console.log("=== Exercício 6: Tratamento Condicional de Exceções ===\n");

function safeParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    // Verifica se a exceção é especificamente um SyntaxError
    if (error instanceof SyntaxError) {
      return null;
    }
    // Caso contrário, relança a exceção para não ocultar falhas imprevistas
    throw error;
  }
}

// Teste 1: JSON válido
console.log("Teste 1 (Válido):", safeParse('{"nome": "Leandromeda"}'));

// Teste 2: SyntaxError tratado condicionalmente (retorna null)
console.log("Teste 2 (SyntaxError):", safeParse('texto inválido'));

// Teste 3: Demonstração de relançamento de erro inesperado
// Se um erro diferente de SyntaxError for gerado (por exemplo, simulando um TypeError ou erro customizado)
function safeParseComValidacaoEstrita(jsonString) {
  try {
    if (typeof jsonString !== "string") {
      throw new TypeError("O argumento fornecido deve ser obrigatoriamente uma string.");
    }
    return JSON.parse(jsonString);
  } catch (error) {
    if (error instanceof SyntaxError) {
      return null;
    }
    // Relança outros tipos de erro (como o TypeError)
    throw error;
  }
}

try {
  console.log("\nTeste 3 (Relançamento de TypeError):");
  // Passando tipo incorreto para provocar um TypeError que deve ser relançado
  safeParseComValidacaoEstrita(12345);
} catch (error) {
  console.log(`Exceção não-SyntaxError relançada e capturada no escopo externo: [${error.name}] ${error.message}`);
}
