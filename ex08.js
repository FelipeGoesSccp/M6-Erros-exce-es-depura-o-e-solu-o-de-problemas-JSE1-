/**
 * Exercício 8: Lançando Erros Customizados
 * Unidade Curricular: Programação Front-end
 * Professor: Esp. Leandro Gaudio Rosa
 * 
 * Enunciado:
 * Crie uma classe InvalidAgeError extends Error e uma função checkAge(age) que:
 * - Se age < 0 ou age > 120, faz throw new InvalidAgeError("Idade fora do intervalo").
 * - Caso contrário, retorna "Idade válida".
 * Teste com idades como -5, 30 e 200.
 */

console.log("=== Exercício 8: Lançando Erros Customizados ===\n");

// Definição da classe de erro customizada
class InvalidAgeError extends Error {
  constructor(message = "Idade fora do intervalo") {
    super(message);
    this.name = "InvalidAgeError";
  }
}

// Função de validação de idade
function checkAge(age) {
  if (age < 0 || age > 120) {
    throw new InvalidAgeError("Idade fora do intervalo");
  }
  return "Idade válida";
}

// Testes com idades -5, 30 e 200
const idadesParaTestar = [-5, 30, 200];

idadesParaTestar.forEach((idade) => {
  try {
    const resultado = checkAge(idade);
    console.log(`Idade ${idade}: SUCESSO -> "${resultado}"`);
  } catch (error) {
    if (error instanceof InvalidAgeError) {
      console.log(`Idade ${idade}: EXCEÇÃO CUSTOMIZADA -> [${error.name}]: ${error.message}`);
    } else {
      console.log(`Idade ${idade}: OUTRO ERRO -> ${error.message}`);
    }
  }
});
