function ValidateCPF (sentCPF) {
  Object.defineProperty(this, 'cleanCPF', {
    enumerable: true,
    get: function () {
      return sentCPF.replace(/\D+/g, '')
    }
  })
}

ValidateCPF.prototype.validate = function () {
  if (typeof this.cleanCPF === 'undefined') return false
  if (this.cleanCPF.length !== 11) return false
  return true
}

ValidateCPF.prototype.createDigit = function (partialCPF) {
  const arrCPF = Array.from(partialCPF)
  console.log(arrCPF)
}

const cpf = new ValidateCPF('705.484.450-52')
console.log(cpf.validate())
