/**
 * Exercício 11: Uso do debugger
 * Unidade Curricular: Programação Front-end
 * Professor: Esp. Leandro Gaudio Rosa
 * 
 * Enunciado:
 * Insira a instrução debugger dentro de uma função qualquer — por exemplo:
 * function testeDebug(x) {
 *   const y = x * 2;
 *   debugger;
 *   return y;
 * }
 * testeDebug(5);
 * No navegador, recarregue a página e verifique o que acontece quando a execução atingir debugger.
 * Escreva um pequeno relatório (2–3 linhas) sobre sua experiência.
 */

console.log("=== Exercício 11: Uso da instrução 'debugger' ===\n");

function testeDebug(x) {
  const y = x * 2;
  debugger; // Ponto de parada programático (breakpoint de código)
  return y;
}

const resultado = testeDebug(5);
console.log("Resultado da função testeDebug(5):", resultado);

console.log("\n--- Relatório de Experiência com 'debugger' ---");
const relatorio = `1. Com as Ferramentas do Desenvolvedor (DevTools) abertas no navegador, o motor JavaScript interrompe automaticamente a execução na linha onde a instrução 'debugger' foi declarada, como um breakpoint físico.
2. A tela do navegador é pausada ('Paused in debugger'), permitindo inspecionar no painel Scope as variáveis locais (x: 5, y: 10) e navegar pelo fluxo usando os controles de Step Over/Into.
3. Se o DevTools estiver fechado (ou rodando via Node.js padrão), a instrução 'debugger' é ignorada silenciosamente e o código segue seu fluxo normal.`;

console.log(relatorio);
