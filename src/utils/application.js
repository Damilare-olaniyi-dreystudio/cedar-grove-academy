export const entryOptions = {
  Nursery: ['Nursery 1', 'Nursery 2', 'Nursery 3'],
  Primary: ['Primary 1', 'Primary 2', 'Primary 3', 'Primary 4', 'Primary 5', 'Primary 6'],
  Secondary: ['JSS 1', 'JSS 2', 'JSS 3', 'SS 1', 'SS 2', 'SS 3']
}
export function referenceNumber() {
  const alphabet = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ'
  const bytes = new Uint8Array(8)
  if (globalThis.crypto?.getRandomValues) globalThis.crypto.getRandomValues(bytes)
  else for (let i = 0; i < bytes.length; i++) bytes[i] = Math.floor(Math.random() * 256)
  const code = Array.from(bytes, byte => alphabet[byte % alphabet.length]).join('')
  return `CGA-${new Date().toISOString().slice(0,10).replaceAll('-','')}-${code}`
}
function downloadRecord(title, data, reference, suffix) {
  const lines = ['CEDAR GROVE ACADEMY', title, `Reference: ${reference}`, `Prepared: ${new Date().toLocaleString()}`, '', ...Object.entries(data).map(([key,value]) => `${key.replace(/[A-Z]/g, m => ` ${m.toLowerCase()}`).replace(/^./, m => m.toUpperCase())}: ${value || 'Not provided'}`), '', 'This copy was prepared on your device. It has not been sent to or stored by the school. Send it to the school on WhatsApp to share these details.']
  const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `${reference}-${suffix}.txt`
  document.body.append(link)
  link.click()
  link.remove()
  window.setTimeout(() => URL.revokeObjectURL(url), 1000)
}
export function downloadApplication(data, reference) { downloadRecord('Application details summary', data, reference, 'application-summary') }
export function downloadEnquiry(data, reference) { downloadRecord('Contact enquiry summary', data, reference, 'contact-enquiry') }
