// Classificador de Nota (1 ponto)

// **Enunciado:**

// Implemente a função classificarNota, que receba uma nota e:

// - Retorna `"Aprovado"` se nota ≥ 6;
// - Retorna `"Reprovado"` se nota < 6;
// - Retorna `"Nota inválida"` se for um valor fora de 0 a 10 ou não numérico.

function classificarNota(nota) {
  if (nota < 0 || nota > 10 || isNaN(nota) === true) {
    return "Nota inválida"
  }
  else if (nota >= 6) {
    return "Aprovado"
  }
  else if (nota < 6) {
    return "Reprovado"
  }
}

//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { classificarNota };