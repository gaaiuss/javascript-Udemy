const rawCpf = '705.484.450-52'
const cpf = rawCpf.replace(/\D+/g, '')

const arrCpf = Array.from(cpf)

let counter = 10
let cpfSum = 0

for (let i = 0; i <= 8; i++) {
  cpfSum += Number(arrCpf[i]) * counter
  counter--
}

let firstDigit = 11 - (cpfSum % 11)
if (firstDigit > 9) {
  firstDigit = 0
}

if (firstDigit !== Number(arrCpf[9])) {
  console.log(Number(arrCpf[9]), 'invalid CPF')
}

// second digit
cpfSum = 0
counter = 11

for (let i = 0; i <= 9; i++) {
  cpfSum += Number(arrCpf[i]) * counter
  counter--
}

let secondDigit = 11 - (cpfSum % 11)
if (secondDigit > 9) secondDigit = 0

if (secondDigit !== Number(arrCpf[10])) {
  console.log(Number(arrCpf[10]), 'invalid CPF')
}

console.log('valid CPF')
