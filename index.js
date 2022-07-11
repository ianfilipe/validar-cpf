function validarCpf(cpf) {
  let resultado = []
  let somaResultado = 0
  let primeiroDigito
  let resultadoDois = []
  let somaResultadoDois = 0
  let segundoDigito
  for(let i = 1; i < 10; i++) {
    resultado.push((cpf[i-1]) * [i])
    resultadoDois.push(cpf[i] * [i])
  }
  for(let j = 0; j < resultado.length; j++) {
    somaResultado += resultado[j]
    somaResultadoDois += resultadoDois[j]
  }
  resultado.push((somaResultado%11).toString().split('').pop())
  primeiroDigito = (somaResultado%11).toString().split('').pop()
  resultadoDois.push((somaResultadoDois%11).toString().split('').pop())
  segundoDigito = (somaResultadoDois%11).toString().split('').pop()
  return primeiroDigito == cpf[9] && segundoDigito == cpf[10] ? "Válido" : "Inválido"
}
console.log(validarCpf('03035637539'))
