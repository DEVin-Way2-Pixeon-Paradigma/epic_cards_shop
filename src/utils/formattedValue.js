import { mask } from 'remask'

export function formattedValue(value, type) {
  switch (type) {
    case 'cpf':
      return mask(value, '999.999.999-99')
    case 'cnpj':
      return mask(value, '99.999.999/9999-99')
    case 'cep':
      return mask(value, '99999-999')
    case 'phone':
      return mask(value, '(99) 99999-9999')
    case 'number-card':
      return mask(value, '9999 - 9999 - 9999 - 9999')
    case 'cvv':
      return mask(value, '999')
    default:
      return value
  }
}
