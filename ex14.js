/**
 * Exercício 14: Depuração Sem debugger
 * Unidade Curricular: Programação Front-end
 * Professor: Esp. Leandro Gaudio Rosa
 * 
 * Enunciado:
 * Explique como você retomaria a execução normalmente depois de usar o breakpoint
 * no painel de ferramentas (sem usar a instrução debugger), e como removeria todos
 * os breakpoints de uma vez.
 */

console.log("=== Exercício 14: Depuração Sem 'debugger' ===\n");

const explicacao = `
1. COMO RETOMAR A EXECUÇÃO NORMALMENTE APÓS PAUSAR EM UM BREAKPOINT:
   - Pelo botão visual: Clique no botão "Resume script execution" (ícone azul de Play/Continuar ▶️) localizado na barra de controle de depuração no canto superior direito do DevTools.
   - Pelo atalho de teclado: Pressione a tecla F8 (no Google Chrome, Microsoft Edge, Brave e Firefox).
   - O que acontece: O JavaScript continuará sua execução em velocidade normal até encontrar outro breakpoint ativo ou até a conclusão total do script.

2. COMO REMOVER TODOS OS BREAKPOINTS DE UMA VEZ:
   - Passo 1: No painel direito da aba "Sources" (ou "Depurador"), localize a seção recolhível chamada "Breakpoints".
   - Passo 2: Clique com o botão direito do mouse (botão de contexto) sobre qualquer um dos breakpoints listados nessa seção.
   - Passo 3: No menu de contexto que surgir, selecione a opção "Remove all breakpoints" (Remover todos os pontos de interrupção).
   - Resultado: Todos os breakpoints marcados em qualquer linha de código serão deletados simultaneamente.

* Dica adicional: Se você desejar apenas ignorá-los temporariamente sem precisar deletá-los, pode clicar no botão "Deactivate breakpoints" (ícone de círculo riscado ou pressionar Ctrl + F8).
`;

console.log(explicacao);
