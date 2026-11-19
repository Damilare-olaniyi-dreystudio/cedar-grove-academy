import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navigation } from '../data/navigation'
import Brand from './Brand'

export default function Header() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])
  useEffect(() => { const close = (e) => e.key === 'Escape' && setOpen(false); window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close) }, [])
  return <>
    <header className="site-header">
      <div className="nav-wrap wrap"><Brand />
        <nav className="desktop-nav" aria-label="Main navigation">{navigation.map((n) => <NavLink key={n.to} to={n.to} end={n.to === '/'}>{n.label}</NavLink>)}</nav>
        <Link className="button button-blue nav-apply" to="/admissions">Apply Now</Link>
        <button className="menu-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
    </header>
    <div id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open} onClick={event => { if (event.target === event.currentTarget) setOpen(false) }}>
      <nav aria-label="Mobile navigation">{navigation.map((n) => <NavLink key={n.to} to={n.to} end={n.to === '/'} onClick={() => setOpen(false)}>{n.label}</NavLink>)}<Link className="button button-blue" to="/admissions" onClick={() => setOpen(false)}>Apply Now</Link></nav>
    </div>
  </>
}
