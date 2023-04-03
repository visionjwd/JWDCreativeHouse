import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import fest from '../Assets/importfest.png'
import expo from '../Assets/importexpo.png'
import mini from '../Assets/mini.png'
import asobu from '../Assets/asobu.png'
import style from '../styles/Hero.module.css'

function Hero() {
  return (
    <div className = {style.hero}>
      <div className = {style.background} >
            <div className = {style.logo}>
            </div>
            <div className = {style.foreground}>

            </div>
            <div className = {style.overlay}>

            </div>
        </div>
        <div className = {style.second}>
            <div className = {style.textbox}>
            <div className = {style.welcomeText} id = "top">
                <h1>Welcome!</h1>
                <p>We are JWD Creative House, Toronto's business digitization agency</p>
                <p>Currently serving the Greater Toronto Area</p>
                <Link href = '/contact'>
                  <button>Contact us to get started!</button>
                </Link>
            </div>
            </div>
            <div className = {style.imagecontainer}>
              <h1>Featured Work:</h1>
                <Link className = {style.featuredwork} href = '/importfest'>
                  <h1>ImportFest 2022</h1>
                  <p>See More</p>
                </Link>
            </div>
        </div>
        <div className = {style.about}>
        <div className = {style.filler}></div>
        <div className = {style.aboutText}> 
          <h1>About us</h1>
          <div className = {style.aboutWrapper}>
            <p>JWD Creative House is a full-service Digital Media house located in Toronto. We provide business digitization services and stunning visuals for your brand.</p>
          </div>
          <div className = "trustedBy">
            <p>Previous clients: </p>
            <img className = {style.clients}src = {fest.src}/>
            <img className = {style.clients}src = {expo.src}/>
            <img className = {style.clients}src = {mini.src}/>
            <img className = {style.clients}src = {asobu.src}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
