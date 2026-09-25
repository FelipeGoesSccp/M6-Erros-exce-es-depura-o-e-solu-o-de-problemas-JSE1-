/**
 * Exercício 12: Step Over, Step Into e Step Out
 * Unidade Curricular: Programação Front-end
 * Professor: Esp. Leandro Gaudio Rosa
 * 
 * Enunciado:
 * Dê um exemplo de duas funções aninhadas:
 * function externo(n) {
 *   return interno(n) + 1;
 * }
 * function interno(m) {
 *   return m * 3;
 * }
 * externo(4);
 * Ao depurar, descreva a diferença prática entre usar Step Over, Step Into e Step Out nesse cenário.
 */

console.log("=== Exercício 12: Step Over, Step Into e Step Out ===\n");

function externo(n) {
  return interno(n) + 1;
}

function interno(m) {
  return m * 3;
}

const resultado = externo(4);
console.log("Resultado de externo(4):", resultado); // Saída: 13 (4 * 3 + 1)

console.log("\n--- Diferença Prática Entre os Modos de Passo ---");

const explicacao = `
Cenário: Suponha que a execução esteja pausada na linha 'return interno(n) + 1;' dentro de externo(n):

1. Step Over (F10) - "Passar por cima":
   - O que faz: Executa a linha atual por inteiro sem entrar nos detalhes internos de funções chamadas.
   - Na prática: O depurador executa a chamada a interno(n) nos bastidores, calcula o resultado e avança diretamente para o retorno de externo, sem exibir linha por linha o que acontece dentro de interno(m).

2. Step Into (F11) - "Entrar":
   - O que faz: Adentra no corpo da função invocada na linha atual.
   - Na prática: O ponteiro de execução salta diretamente para a primeira linha da função interno(m), permitindo que você inspecione o valor do parâmetro m (4) e acompanhe o cálculo de m * 3.

3. Step Out (Shift + F11) - "Sair":
   - O que faz: Continua a execução do restante da função atual até que ela retorne, pausando na função chamadora.
   - Na prática: Estando dentro da função interno(m), acionar o Step Out executa o resto de interno de uma só vez e devolve o controle de volta à linha de chamada em externo(n), com o retorno 12 pronto para somar 1.
`;

console.log(explicacao);
