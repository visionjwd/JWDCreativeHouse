import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import style from '../styles/Services.module.css'

const Services = () => {
  return (
    <>
      <Head>
      <title>Services-JWD Creative House</title>
      <meta name="description" content="Check out our services!" />
      <meta name="keywords" content="Toronto Production Company, videography, toronto videography, JWD Creative House, JWD Creative, Toronto Videographer, Toronto, Toronto Videography"/>
      <meta name="robots" content="noindex,nofollow"/>
    </Head>
    <div className = {style.pricing}>
      <div className = {style.priceIntro}>
        <div className = {style.pricetext}>
          <h1>Services</h1>
          <p>Ready to work with us? Check out which package is right for your brand.</p>
          <p>Contact us Today to book a FREE Consultation!</p>
          <Link href = '/contact'>
            <button>Contact Us!</button>
          </Link>
        </div>
      </div>
      <div className = {style.pricecontainer}>
        <div className = {style.photoprice}>
          <h1>Business Digitization: <span>From $1300</span></h1>
          <p>Take your business online with us!</p>
          <h3>What it includes:</h3>
          <p>- 1 Youtube advertisement, 3 Vertical media content</p>
          <p>- Custom-made website with latest SEO features for visibility</p>
          <p>- Social Media posts/page redesign for guaranteed 40% increase in engagement rate</p>
          <p>- Standard photography package included</p>
        </div>
        <div className = {style.mediaservices}>
          <div className = {style.photoprice}>
            <h1>Product Photography</h1>
            <div className = {style.para}>
              <h2>Kickstart Package: <span>From $400</span></h2>
              <h3>For those who require eye-catching, bold images to start representing their brand.</h3>
              <p>- Royalty Free images</p>
              <p>- Basic Retouching</p>
              <p>- Pre-production with test shots</p>
            </div>
            <div className = {style.para}>
              <h2>Enterprise Package: <span>From $600</span></h2>
              <h3>A business looking for quality media for products?</h3>
              <p>- Pre-production with multiple test shots</p>
              <p>- 3 point profession lighting</p>
              <p>- Extensive retouching to remove any imperfections in post-production.</p>
              <p>- Composite Photo background</p>
            </div>
            <div className = {style.para}>
              <h2>Social Influencer Package: <span>From $600</span></h2>
              <h3>Whether you are a mega influencer looking for model photos or someone looking to get started, we got you covered!</h3>
              <p>- Tailor Made marketing strategy with algorithm-beating methods</p>
              <p>- Monthly Reels for new exposure, Carousel layout posts for engagement rate increase</p>
            </div>
          </div>
          <div className = {style.photoprice}>
            <h1>Commercial</h1>
            <h2>Kickstart Package: <span>From $500</span></h2> 
            <h3>The Minimalist package!</h3>
            <p>- 2 Vertical Reel Videos</p>
            <p>- Basic Color Grading</p>
            <p>- Basic Lighting on set</p>
            <h2>Cinema Package: <span>From $750</span></h2>
            <h3>Looking for something cinematic?</h3>
            <p>- Thorough pre-production with active storyboards</p>
            <p>- Professional Color grading with Davinci Resolve</p>
            <p>- Amaran pro lighting setup on set</p>
            <h2>Social Media Package: <span>From $900 monthly</span></h2>
            <h3>Everything you need for Reels and Tiktok!</h3>
            <p>- Thorough planning with target audience selection.</p>
            <p>- Organic, high quality reels with engaging subtitles.</p>
            <p>- 6-7 Reels/Tiktoks Monthly</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Services
