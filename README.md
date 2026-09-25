# Exercícios: Erros, Exceções, Depuração e Solução de Problemas 👾

**Unidade Curricular:** Programação Front-end  
**Professor:** Esp. Leandro Gaudio Rosa  
**Recurso Base:** JavaScript Essentials 1 – Módulo 6: Erros, exceções, depuração e solução de problemas  

---

## 🎯 Status da Entrega
- **Critério Atendido:** 14/14 exercícios solucionados (Crítico e Desejável = **100 pontos**)
- Todos os arquivos testados via Node.js v22 e no navegador.

---

## 📁 Estrutura dos Arquivos

| Arquivo | Título do Exercício | Descrição Resumida |
|---|---|---|
| [`ex01.js`](./ex01.js) | Definições Básicas | Conceito de Erro, Exceção e a diferença entre erro em linguagem natural e exceção em JS. |
| [`ex02.js`](./ex02.js) | Erros sem Exceções? | Exemplos de comportamentos permissivos do JS (divisão por zero gerando `Infinity`, cálculo inválido gerando `NaN`, acesso a propriedade inexistente gerando `undefined`). |
| [`ex03.js`](./ex03.js) | Confiabilidade Limitada | Cenários onde não confiar em dados do usuário e implementação de validação com `Number.isNaN()` e `TypeError`. |
| [`ex04.js`](./ex04.js) | Tipos de Erros em JS | Explicação e demonstração prática de `ReferenceError`, `TypeError` e `SyntaxError`. |
| [`ex05.js`](./ex05.js) | Try…Catch Básico | Implementação da função `safeParse(jsonString)` retornando objeto ou `null`. |
| [`ex06.js`](./ex06.js) | Tratamento Condicional de Exceções | `safeParse` tratando especificamente `SyntaxError` com `instanceof` e relançando (`throw`) outros erros. |
| [`ex07.js`](./ex07.js) | Bloco Finally | `safeParse` com `finally` executando sempre a mensagem `"Parse attempt finished"`. |
| [`ex08.js`](./ex08.js) | Lançando Erros Customizados | Classe `InvalidAgeError extends Error` e função `checkAge(age)` com validação do intervalo `[0, 120]`. |
| [`ex09.js`](./ex09.js) | Depuração com console.log | Instrumentação com `console.log` para identificar a causa do retorno `NaN` em `soma(2, undefined)`. |
| [`ex10.js`](./ex10.js) | Preparação do Ambiente de Depuração | Passo a passo detalhado para abrir o DevTools (F12) e acessar a aba "Sources" / "Depurador". |
| [`ex11.js`](./ex11.js) | Uso do `debugger` | Função `testeDebug` com instrução `debugger` e relatório sobre o comportamento no navegador. |
| [`ex12.js`](./ex12.js) | Step Over, Step Into e Step Out | Análise prática da diferença entre F10 (Step Over), F11 (Step Into) e Shift+F11 (Step Out). |
| [`ex13.js`](./ex13.js) | Call Stack | Diagrama textual da pilha de chamadas e demonstração com `console.trace()`. |
| [`ex14.js`](./ex14.js) | Depuração Sem `debugger` | Como retomar a execução (`F8` / Play) e como remover todos os breakpoints simultaneamente. |

---

## 🚀 Como Executar

### Opção 1: Via Node.js (Terminal / VS Code)
Para rodar um exercício específico:
```bash
node ex01.js
node ex05.js
node ex08.js
```

Para rodar todos os exercícios sequencialmente:
```powershell
1..14 | ForEach-Object { node ("ex{0:d2}.js" -f $_) }
```

### Opção 2: No Navegador
Abra o arquivo [`index.html`](./index.html) no seu navegador ou via extensão **Live Server** no VS Code e abra o console do desenvolvedor (`F12`).
