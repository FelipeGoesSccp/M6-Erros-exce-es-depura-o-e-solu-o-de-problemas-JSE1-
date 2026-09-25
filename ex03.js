/**
 * Exercício 3: Confiabilidade Limitada
 * Unidade Curricular: Programação Front-end
 * Professor: Esp. Leandro Gaudio Rosa
 * 
 * Enunciado:
 * Em que cenários seu programa deve assumir que não pode confiar plenamente em dados de entrada
 * do usuário? Escreva um pequeno comentário indicando como você trataria validações simples
 * (tipo "número esperado, string recebida").
 */

console.log("=== Exercício 3: Confiabilidade Limitada ===\n");

/*
Cenários em que o programa NÃO deve confiar em entradas de dados:
1. Formulários web (campos de texto <input> onde o usuário pode digitar qualquer caractere ou deixar vazio).
2. Parâmetros de URL (query params e rotas) que podem ser manipulados livremente no navegador.
3. Entradas via prompt() ou terminal que sempre retornam dados como string ou null se cancelado.
4. Upload de arquivos e integrações com APIs externas de terceiros.
5. Dados salvos no LocalStorage/SessionStorage ou Cookies (facilmente alteráveis via DevTools).
*/

// Como tratar validações simples:
// Exemplo: Função que espera receber um número para processar um cálculo de desconto.
function validarEConverterNumero(entrada) {
  // 1. Verificar se a entrada é nula, indefinida ou string vazia
  if (entrada === null || entrada === undefined || (typeof entrada === "string" && entrada.trim() === "")) {
    throw new TypeError("Entrada inválida: valor não pode ser vazio ou nulo.");
  }

  // 2. Tentar converter para número
  const numero = Number(entrada);

  // 3. Verificar se a conversão resultou em NaN (isto é, string não numérica)
  if (Number.isNaN(numero)) {
    throw new TypeError(`Esperava um número, mas recebeu um valor não numérico: "${entrada}".`);
  }

  return numero;
}

// Testando a validação em diferentes cenários
const casosDeTeste = ["150", 42, "abc", "", null, undefined];

casosDeTeste.forEach((caso) => {
  try {
    const resultado = validarEConverterNumero(caso);
    console.log(`[SUCESSO] Entrada: ${JSON.stringify(caso)} -> Convertido com sucesso: ${resultado} (tipo: ${typeof resultado})`);
  } catch (erro) {
    console.log(`[ERRO TRATADO] Entrada: ${JSON.stringify(caso)} -> ${erro.message}`);
  }
});
