import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import check from '../Assets/checkmark.svg'
import digitization from '../Assets/digitization.jpg'
import webdev from '../Assets/webdev.jpg'
import style from '../styles/Work.module.css'

const Work = () => {
  return (
    <>
    <Head>
      <title>Work-JWD Creative House</title>
      <meta name="description" content="Latest Work" />
      <meta name="keywords" content="Toronto Production Company, videography, toronto videography, JWD Creative House, JWD Creative, Toronto Videographer, Toronto, Toronto Videography"/>
      <meta name="robots" content="index,follow"/>
    </Head>
    <div className = {style.work}>
      <div className = {style.workintro}>
        <div className = {style.text}>
            <h1>Work</h1>
        </div>
      </div>
      <div className = {style.digitization}>
        <div className = {style.digitext}>
          <h1>Business Digitization</h1>
          <p>Take your business online to be discovered by thousands</p>
          <div className = {style.description} id = "first">
            <img src = {check.src}/>
            <p>Fast, Modern website to showcase your business</p>
          </div>
          <div className = {style.description} id = "second">
            <img src = {check.src}/>
            <p>Complete media catalog that captures the beuty of your business</p>
          </div>
          <div className = {style.description} id = "third">
            <img src = {check.src}/>
            <p>Social Media marketing that gathers the desired audience</p>
          </div>
        </div>
        <div className = {style.digimage}>
          <img src = {digitization.src} alt = "digitization"/>
        </div>
      </div>
      <div className = {style.showcase}>
        <div className = {style.portfolio} id = {style.photography}>
          <h1>Photography</h1>
          <Link href = '/Photography'>
            <button>Browse Photos</button>
          </Link>
        </div>
        <div className = {style.portfolio} id = {style.videography}>
          <h1>Commercial Videography</h1>
          <Link href = '/Videography'> 
            <button>Browse videos</button>
          </Link>
        </div>
      </div>
      <div className = {style.webdev}>
        <div className = {style.webimage}>
          <img src = {webdev.src}/>
        </div>
        <div className = {style.webtext}>
          <h1>Web Development</h1>
          <p>Create Stunning, fast and optimized website</p>
          <div className = {style.webdescription}>
            <p>
              <img src = {check.src}/>
              Custom made Javascript website with optimized media
            </p>
            <p>
              <img src = {check.src}/>
              Dynamic sitemaps, metatags for increased visibility on Google.
            </p>
            <p>
              <img src = {check.src}/>
              SEO optimized coding for better visibility
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Work
