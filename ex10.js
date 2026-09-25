/**
 * Exercício 10: Preparação do Ambiente de Depuração
 * Unidade Curricular: Programação Front-end
 * Professor: Esp. Leandro Gaudio Rosa
 * 
 * Enunciado:
 * Descreva, em passos, como você abriria as ferramentas de desenvolvedor no navegador
 * e ativaria o painel "Sources" (ou "Depurador").
 */

console.log("=== Exercício 10: Preparação do Ambiente de Depuração ===\n");

const passosDepuracao = [
  "Passo 1: Abra a página web que deseja depurar no navegador (ex.: Google Chrome, Edge ou Firefox).",
  "Passo 2: Abra as Ferramentas do Desenvolvedor (DevTools) utilizando um dos métodos:",
  "         a) Pressione a tecla F12;",
  "         b) Ou utilize o atalho Ctrl + Shift + I (Windows/Linux) ou Cmd + Option + I (macOS);",
  "         c) Ou clique com o botão direito do mouse em qualquer área da página e selecione 'Inspecionar' (Inspect).",
  "Passo 3: Na barra superior de abas do DevTools, localize e clique na aba correspondente:",
  "         - 'Sources' (Fontes) caso esteja no Google Chrome, Microsoft Edge ou Brave;",
  "         - 'Depurador' (Debugger) caso esteja no Mozilla Firefox.",
  "Passo 4: No painel esquerdo ('Page' / 'Navigator'), navegue pelas pastas do seu projeto e selecione o arquivo JavaScript (ex: script.js).",
  "Passo 5: O código-fonte será exibido no editor central, onde você já pode clicar no número da linha para adicionar breakpoints e iniciar a depuração interativa."
];

passosDepuracao.forEach((passo) => console.log(passo));
