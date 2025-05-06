// ## Jogo de Adivinhação (1 ponto)

// **Enunciado:**

// Implemente a função adivinharNumero, que receba um número máximo e um palpite. A função deve gerar um número aleatório entre 0 e `max`. A função deve:

// - Retornar `"Acertou!"` se o número gerado for igual ao `palpite`;
// - Retornar `"Errou! Tente novamente!"` se o palpite estiver incorreto.

function adivinharNumero(max, palpite) {
  numAleatorio = Math.round(Math.random() * (max + 1))
  if (numAleatorio === palpite) {
    return "Acertou!"
  }
  return "Errou! Tente novamente!"
}


// NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { adivinharNumero };