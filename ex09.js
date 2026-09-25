/**
 * Exercício 9: Depuração com console.log
 * Unidade Curricular: Programação Front-end
 * Professor: Esp. Leandro Gaudio Rosa
 * 
 * Enunciado:
 * Considere este código:
 * function soma(a, b) {
 *   return a + b;
 * }
 * console.log(soma(2, undefined));
 * 
 * Use console.log em outros pontos (antes e depois da soma) para entender
 * por que o resultado é NaN. Escreva um comentário apontando a causa.
 */

console.log("=== Exercício 9: Depuração com console.log ===\n");

function soma(a, b) {
  // Ponto de depuração 1: inspecionando os valores e tipos dos parâmetros recebidos
  console.log("[DEBUG - Entrada na função]");
  console.log(" -> Parâmetro 'a':", a, "| Tipo:", typeof a);
  console.log(" -> Parâmetro 'b':", b, "| Tipo:", typeof b);

  // Ponto de depuração 2: inspecionando o que a operação a + b produz antes de retornar
  const resultado = a + b;
  console.log("[DEBUG - Após a operação]");
  console.log(" -> Expressão a + b:", resultado, "| Tipo:", typeof resultado);

  return resultado;
}

console.log("[DEBUG - Antes da chamada de soma]");
const retorno = soma(2, undefined);

console.log("[DEBUG - Depois da chamada de soma]");
console.log("Resultado final impresso:", retorno);

/*
================================================================================
EXPLICAÇÃO / CAUSA DO NaN:
--------------------------------------------------------------------------------
1. O segundo argumento passado para a função foi o valor primitivo 'undefined'.
2. Em JavaScript, o operador aritmético de soma (+) tenta converter ambos os
   operandos para valores numéricos quando não há strings envolvidas na concatenação.
3. A conversão implícita de 'undefined' para número (Number(undefined)) resulta em NaN (Not-a-Number).
4. Qualquer operação aritmética envolvendo NaN resulta obrigatoriamente em NaN (2 + NaN = NaN).
5. Como boa prática, o problema pode ser evitado usando valores padrão nos parâmetros,
   como: function soma(a = 0, b = 0) { ... }
================================================================================
*/
