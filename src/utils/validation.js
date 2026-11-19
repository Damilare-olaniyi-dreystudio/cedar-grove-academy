export const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || '').trim())
export const isValidPhone = (value) => {
  const phone = String(value || '').trim()
  const digits = phone.replace(/\D/g, '')
  return /^\+?[\d\s().-]{7,20}$/.test(phone) && digits.length >= 7 && digits.length <= 15
}
export const isValidDate = (value) => {
  if (!value || Number.isNaN(Date.parse(value))) return false
  const date = new Date(`${value}T00:00:00`)
  return date <= new Date()
}
