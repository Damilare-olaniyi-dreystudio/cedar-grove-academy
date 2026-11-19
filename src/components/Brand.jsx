import { Link } from 'react-router-dom'

export default function Brand({ footer = false }) {
  return <Link className={`brand ${footer ? 'brand-footer' : ''}`} to="/" aria-label="Cedar Grove Academy home">
    <img src="/branding/icon.svg" alt="" width="54" height="54" />
    <span><b>Cedar Grove</b><small>ACADEMY</small></span>
  </Link>
}
