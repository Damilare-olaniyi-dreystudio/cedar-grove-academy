import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { photo, photoLabels } from '../data/assets'

export function WhatsAppButton() { return <a className="whatsapp-float" href="https://wa.me/2349075593974?text=Hello%20Cedar%20Grove%20Academy%2C%20I%27d%20like%20to%20make%20an%20enquiry." target="_blank" rel="noreferrer" aria-label="Chat with Cedar Grove Academy on WhatsApp"><span className="whatsapp-brand-glyph" aria-hidden="true"/></a> }
export function PageIntro({ title, text, tint = 'blue', imageId = 1, children }) { return <section className={`page-intro intro-${tint}`}><div className="wrap intro-grid"><motion.div className="intro-copy" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .45 }}><h1>{title}</h1><p>{text}</p>{children}</motion.div><figure className="intro-image"><Photo id={imageId} eager/></figure></div></section> }
export function SectionTitle({ eyebrow, title, text, centered = false }) { return <div className={`section-title ${centered ? 'center' : ''}`}>{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2>{text && <p>{text}</p>}</div> }
export function Photo({ id, className = '', eager = false, onClick, ...props }) { return <img className={className} src={photo(id)} alt={photoLabels[id]} loading={eager ? 'eager' : 'lazy'} decoding="async" fetchPriority={eager ? 'high' : 'auto'} onClick={onClick} {...props}/> }
export function VideoPlayer({ id, poster, title, className = '' }) { const file = ['CGA-VIDEO-01-a-place-to-grow.mp4_3f7c6695.mp4','CGA-VIDEO-02-learning-without-limits.mp4_02787a4c.mp4','CGA-VIDEO-03-more-than-the-classroom.mp4_b13b4519.mp4'][id-1]; const posterUrl=typeof poster==='number'?photo(poster):poster; return <div className={`video-frame ${className}`}><video autoPlay muted loop controls playsInline preload="metadata" poster={posterUrl} aria-label={title}><source src={`/video/${file}`} type="video/mp4"/>Your browser does not support video playback.</video><span className="video-caption">{title}</span></div> }
export function HomeHeroVideo() {
  const videoRef = useRef(null)
  const [fallback, setFallback] = useState(false)
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = true
    video.defaultMuted = true
    video.volume = 0
    const playback = video.play()
    playback?.catch(() => {})
    return () => video.pause()
  }, [])
  return <div className="home-video-background" aria-hidden="true">
    <img className="home-video-poster" src={photo(1)} alt="" fetchPriority="high"/>
    <video ref={videoRef} className={fallback ? 'video-unavailable' : ''} autoPlay muted loop playsInline preload="auto" poster={photo(1)} tabIndex={-1} onCanPlay={() => videoRef.current?.play().catch(() => {})} onError={() => setFallback(true)}>
      <source src="/video/CGA-VIDEO-01-a-place-to-grow.mp4_3f7c6695.mp4" type="video/mp4"/>
    </video>
  </div>
}
export function AdmissionsBand() { return <section className="admissions-band"><div className="wrap band-inner"><div><span className="eyebrow">TAKE THE NEXT STEP</span><h2>Ready to explore Cedar Grove?</h2><p>See how to begin an application for your child.</p></div><Link to="/admissions" className="button button-dark">Explore admissions</Link><span className="band-sun" aria-hidden="true">✳</span></div></section> }
export function ImageTile({ id, label, onClick, className = '' }) { return <button type="button" className={`image-tile ${className}`} onClick={onClick} aria-label={`View image: ${label || photoLabels[id]}`}><Photo id={id} alt=""/><span>{label || photoLabels[id]}</span></button> }
