export function validateEmail (value: string) {
  const emailValid = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(value)
  return emailValid
}

export function validatePhone (value: string) {
  const phoneValid = /\(\d{0,2}\) (\d{5})-(\d{4})/i.test(value)
  return phoneValid
}
