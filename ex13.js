/**
 * Exercício 13: Call Stack
 * Unidade Curricular: Programação Front-end
 * Professor: Esp. Leandro Gaudio Rosa
 * 
 * Enunciado:
 * Com base no exercício anterior, faça um diagrama simples (em texto) mostrando
 * a call stack no momento em que interno está sendo executado.
 * Exemplo de formato:
 * ▶ externo
 *   ▶ interno
 */

console.log("=== Exercício 13: Call Stack (Pilha de Chamadas) ===\n");

function externo(n) {
  return interno(n) + 1;
}

function interno(m) {
  // Impressão da Call Stack real em tempo de execução via console.trace()
  console.log("Rastreamento real gerado pelo motor JavaScript (console.trace):");
  console.trace("Call Stack ativa em interno()");
  return m * 3;
}

// Diagrama textual solicitado pelo enunciado:
const diagramaCallStack = `
--------------------------------------------------------------------------------
DIAGRAMA DA CALL STACK NO MOMENTO DE EXECUÇÃO DE 'interno':
--------------------------------------------------------------------------------

Formato hierárquico solicitado:
▶ (escopo global / script principal)
  ▶ externo (linha do return interno(n) + 1)
    ▶ interno (linha do return m * 3) <-- FRAME ATIVO (em execução no topo da pilha)

Visão clássica do painel 'Call Stack' das Ferramentas do Desenvolvedor (DevTools):
+-------------------------------------------------------------+
| CALL STACK (LIFO - Last In, First Out)                     |
+-------------------------------------------------------------+
| [Frame 3] interno (m = 4)         <-- TOPO (executando)     |
| [Frame 2] externo (n = 4)         <-- Chamou interno        |
| [Frame 1] (anonymous / global)    <-- Chamou externo(4)     |
+-------------------------------------------------------------+

Explicação do ciclo de vida da pilha:
1. O script global chama externo(4), empilhando o frame de 'externo'.
2. Dentro de 'externo', é chamado interno(4), empilhando o frame de 'interno'.
3. Ao finalizar, 'interno' retorna 12 e é desempilhado (pop).
4. O controle volta a 'externo', que calcula 12 + 1 = 13 e também é desempilhado.
--------------------------------------------------------------------------------
`;

console.log(diagramaCallStack);

// Executando para demonstrar a pilha real:
externo(4);
