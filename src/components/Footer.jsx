import { Link } from 'react-router-dom'
import { MapPin, Phone } from 'lucide-react'
import { navigation } from '../data/navigation'
import Brand from './Brand'

export default function Footer() {
  return <footer className="site-footer"><div className="wrap footer-grid">
    <div className="footer-brand"><Brand footer /><p>Every child has room to grow. A welcoming place to learn, discover and find confidence.</p><Link className="footer-text-link" to="/about">Get to know us</Link></div>
    <div><h3>Explore</h3><ul>{navigation.slice(1, 5).map((n) => <li key={n.to}><Link to={n.to}>{n.label}</Link></li>)}</ul></div>
    <div><h3>Learning stages</h3><ul><li><Link to="/academics#nursery">Nursery</Link></li><li><Link to="/academics#primary">Primary</Link></li><li><Link to="/academics#secondary">Secondary</Link></li></ul></div>
    <div className="footer-contact"><h3>Talk to us</h3><a href="tel:+2349075593974"><Phone size={17}/> +234 907 559 3974</a><a href="https://wa.me/2349075593974" target="_blank" rel="noreferrer"><span className="whatsapp-brand-glyph" aria-hidden="true"/> WhatsApp us</a><p><MapPin size={17}/> Apata, Ibadan, Oyo State, Nigeria</p></div>
  </div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} Cedar Grove Academy</span><span>Every child has room to grow.</span></div></footer>
}
