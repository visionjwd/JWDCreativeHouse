import React from 'react'
import style from '../styles/Contact.module.css'
import Form from '../Components/Form'
import Head from 'next/head'
import Consultation from '@/Components/Consultation'


const Contact = () => {
  return (
    <div className = {style.contact}>
      <Head>
        <title>Contact-JWD Creative House</title>
        <meta name="description" content="Photography Portfolio" />
      </Head>
      <div className = {style.foreground}>
      <div className = {style.headerSide}>
         <h1>Contact</h1> 
         <div className = {style.options}>
          <p>Reach out to us via:</p>
          <div className = {style.mailcontainer}>
            <a href = "mailto:info@jwdcreativehouse.ca">info@jwdcreativehouse.ca</a>
          </div>
          <div className = {style.mailcontainer}>
            <p></p>
          </div>
         </div>
      </div>
      <div className = {style.formSide}><Consultation/></div>
      </div>
    </div>
  )
}

export default Contact
