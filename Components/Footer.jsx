import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import InstagramIcon from "@mui/icons-material/Instagram"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import logo from '../Assets/creativehouseblack.png'
import style from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className = {style.footer}>
        <div className = {style.logoSide}>
          <Link className = {style.logolink} href = '/'>
            <img src = {logo.src}/>
          </Link>
        <div className = {style.summary}>
          <Link className = {style.tohome} href ='/'>Home</Link>
          <div className = {style.worklinks}>
            <Link href = '/work'>Work</Link>
            <Link href = '/Photography'>Photography</Link>
            <Link href = '/Videography'>Videography</Link>
          </div>
          <Link href ='/services'>Pricing</Link>
          <Link href = '/'>Contact</Link>
        </div>
      </div>

      <div className = {style.socialMedia}>
        <h2>Connect With Us!</h2>
        <div className = {style.mediaLinks}>
          <Link href = "https://www.instagram.com/visionjwd" target = "_blank">
            <InstagramIcon/>
          </Link>
          <Link href = "https://www.linkedin.com/in/junwoooh/" target = "_blank">
            <LinkedInIcon/>
          </Link>
          </div>
      </div>
    </div>
  )
}

export default Footer
