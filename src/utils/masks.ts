export function onlyNumber (value: string) {
  const formattedValue = value.replace(/\D/g, '')
  return formattedValue
}

export function maskPhone (value: string) {
  let formattedValue = value.replace(/\D/g, '')
  formattedValue = formattedValue.replace(/(\d{2})(\d)/, '($1) $2')
  formattedValue = formattedValue.replace(/(\d{4,5})(\d{4}).*/, '$1-$2')
  return formattedValue
}
