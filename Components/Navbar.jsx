import Link from 'next/link'
import Logo from '../Assets/creativehousewhite.png'
import React,{ useState } from 'react'
import nav from '../styles/Navbar.module.css'
import Image from 'next/image'
import ReorderIcon from '@mui/icons-material/Reorder'
import CloseIcon from '@mui/icons-material/Close'


const Navbar = () => {
  const [openLinks, setOpenLinks] = useState(false)

    const toggleNavbar = () => {
      setOpenLinks(!openLinks);
    };
    
  return (
  <div className = {nav.nav} id={openLinks ? nav.open : nav.close}>
    <div className = {nav.hiddenLinks} onClick={toggleNavbar}>
        <button className = {nav.bruh} onClick={toggleNavbar}>
          <CloseIcon/>
        </button>
        <Link href ="/" onClick={toggleNavbar}> Home </Link>
        <Link href ="/work" onClick={toggleNavbar}> Work </Link>
        <Link href ="/services" onClick={toggleNavbar}> Pricing </Link>
        <Link href ="/contact" onClick={toggleNavbar}>Contact</Link>
    </div>
  <div className = {nav.navbar}>
    <div className = {nav.leftSide}> 
      <Link rel = "preload" as = "" href = '/'>
          <Image className = {nav.image} priority = {true} src = {Logo} alt = "/"/>
      </Link>
    </div>
    <div className = {nav.rightSide}>
      <Link href ="/"> Home </Link>
      <Link href ="/work"> Work </Link>
      <Link href ="/services"> Pricing </Link>
      <Link href ="/contact">
        <button className = {nav.contactbutton}>
        Contact
        </button>
      </Link>
      <button className = {nav.icon} onClick={toggleNavbar}>
          <ReorderIcon />
      </button>
    </div>
  </div>
  </div>
  )
}

export default Navbar
