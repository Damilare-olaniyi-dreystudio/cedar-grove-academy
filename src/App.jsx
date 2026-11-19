import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import { WhatsAppButton } from './components/Shared'
import Home from './pages/Home'
import About from './pages/About'
import Academics from './pages/Academics'
import Admissions from './pages/Admissions'
import SchoolLife from './pages/SchoolLife'
import Contact from './pages/Contact'

const titles = {
  '/': ['Cedar Grove Academy | Every child has room to grow','A welcoming Nigerian school in Apata, Ibadan, with Nursery, Primary and Secondary learning.'],
  '/about': ['About Cedar Grove Academy | Our purpose and values','Learn about Cedar Grove Academy, our purpose, vision and values.'],
  '/academics': ['Academics | Cedar Grove Academy','Explore Nursery, Primary and Secondary learning at Cedar Grove Academy.'],
  '/admissions': ['Admissions | Cedar Grove Academy','Learn how to prepare an application enquiry for Cedar Grove Academy.'],
  '/school-life': ['School Life | Cedar Grove Academy','See the spaces, learning and experiences that shape school life at Cedar Grove Academy.'],
  '/contact': ['Contact | Cedar Grove Academy','Call or WhatsApp Cedar Grove Academy in Apata, Ibadan.']
}
function Site(){const {pathname,hash}=useLocation();useEffect(()=>{const [title,description]=titles[pathname]||titles['/'];document.title=title;document.querySelector('meta[name="description"]')?.setAttribute('content',description);if(hash){requestAnimationFrame(()=>document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({behavior:'smooth'}))}else window.scrollTo({top:0,behavior:'instant'})},[pathname,hash]);return <><Header/><main id="main"><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/academics" element={<Academics/>}/><Route path="/admissions" element={<Admissions/>}/><Route path="/school-life" element={<SchoolLife/>}/><Route path="/contact" element={<Contact/>}/></Routes></main><Footer/><WhatsAppButton/></>}
export default function App(){return <MotionConfig reducedMotion="user"><BrowserRouter><Site/></BrowserRouter></MotionConfig>}
