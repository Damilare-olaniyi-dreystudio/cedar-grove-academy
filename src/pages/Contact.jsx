import { useState } from 'react'
import { MapPin, Phone } from 'lucide-react'
import { PageIntro, AdmissionsBand } from '../components/Shared'
import { isValidEmail, isValidPhone } from '../utils/validation'

const emptyForm = { name: '', phone: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')

  const update = event => {
    const { name, value } = event.target
    setForm(current => ({ ...current, [name]: value }))
    setErrors(current => ({ ...current, [name]: '' }))
    setStatus('')
  }

  const submit = event => {
    event.preventDefault()
    const next = {}
    if (!form.name.trim()) next.name = 'Enter your full name.'
    if (!isValidPhone(form.phone)) next.phone = 'Enter a valid phone number with 7 to 15 digits.'
    if (form.email && !isValidEmail(form.email)) next.email = 'Enter a valid email address.'
    if (!form.subject) next.subject = 'Choose an enquiry type.'
    if (!form.message.trim()) next.message = 'Write a short message.'
    setErrors(next)
    if (Object.keys(next).length) {
      setStatus('Complete the highlighted fields before continuing to WhatsApp.')
      return
    }

    const message = [
      'Hello Cedar Grove Academy. I have an enquiry.',
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Email: ${form.email.trim() || 'Not provided'}`,
      `Enquiry type: ${form.subject}`,
      `Message: ${form.message.trim()}`
    ].join('\n')
    window.location.assign(`https://wa.me/2349075593974?text=${encodeURIComponent(message)}`)
  }

  const error = key => errors[key] && <small className="field-error" id={`${key}-error`}>{errors[key]}</small>
  const fieldAttrs = key => ({ 'aria-invalid': Boolean(errors[key]), 'aria-describedby': errors[key] ? `${key}-error` : undefined })

  return <>
    <PageIntro title="Let's start a conversation." text="Ask about Nursery, Primary, Secondary or the application process. We'll be glad to hear from you." tint="peach" imageId={3}><a className="button button-blue" href="#enquiry">Send an enquiry</a></PageIntro>
    <section className="section-pad contact-details"><div className="wrap contact-cards">
      <a className="contact-card contact-phone" href="tel:+2349075593974"><span><Phone/></span><small>CALL THE SCHOOL</small><b>+234 907 559 3974</b><i>Call now</i></a>
      <a className="contact-card contact-wa" href="https://wa.me/2349075593974" target="_blank" rel="noreferrer"><span><i className="whatsapp-brand-glyph" aria-hidden="true"/></span><small>MESSAGE US</small><b>WhatsApp</b><i>Start a chat</i></a>
      <div className="contact-card contact-place"><span><MapPin/></span><small>OUR LOCATION</small><b>Apata, Ibadan</b><p>Oyo State, Nigeria</p></div>
    </div></section>
    <section id="enquiry" className="section-pad enquiry-section"><div className="wrap enquiry-grid">
      <div><span className="eyebrow">WE'RE HERE TO HELP</span><h2>What would you like to know?</h2><p>Fill in the form and continue to WhatsApp with your message ready to send.</p><div className="location-note"><MapPin size={20}/><span><b>Cedar Grove Academy</b><small>Apata, Ibadan, Oyo State, Nigeria</small></span></div></div>
      <form className="enquiry-form" onSubmit={submit} noValidate>
        <h3>Send an enquiry</h3>
        <label className="form-field"><span>Full name *</span><input name="name" value={form.name} onChange={update} autoComplete="name" required {...fieldAttrs('name')}/>{error('name')}</label>
        <div className="form-grid"><label className="form-field"><span>Phone number *</span><input name="phone" type="tel" value={form.phone} onChange={update} autoComplete="tel" required {...fieldAttrs('phone')}/>{error('phone')}</label><label className="form-field"><span>Email address</span><input name="email" type="email" value={form.email} onChange={update} autoComplete="email" {...fieldAttrs('email')}/>{error('email')}</label></div>
        <label className="form-field"><span>Enquiry type *</span><select name="subject" value={form.subject} onChange={update} required {...fieldAttrs('subject')}><option value="">Choose a subject</option><option>Admissions</option><option>Nursery</option><option>Primary</option><option>Secondary</option><option>General enquiry</option></select>{error('subject')}</label>
        <label className="form-field"><span>Message *</span><textarea name="message" rows="4" value={form.message} onChange={update} required {...fieldAttrs('message')}/>{error('message')}</label>
        {status && <p className="form-status form-error" role="alert">{status}</p>}
        <button className="button button-green" type="submit"><span className="whatsapp-brand-glyph" aria-hidden="true"/> Continue to WhatsApp</button>
      </form>
    </div></section>
    <section className="location-section"><div className="wrap location-inner"><span className="location-pin"><MapPin/></span><div><span className="eyebrow">FIND US IN IBADAN</span><h2>Apata, Ibadan.</h2><p>We're located in Apata, Oyo State. Contact us directly for directions to the school.</p></div><a className="button button-outline" href="https://www.google.com/maps/search/?api=1&query=Apata%2C+Ibadan%2C+Nigeria" target="_blank" rel="noreferrer">View area map</a></div></section>
    <AdmissionsBand/>
  </>
}
