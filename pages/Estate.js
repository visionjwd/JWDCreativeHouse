import React from 'react'
import Link from 'next/link'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import style from '../styles/Portfolio.module.css'
import Head from 'next/head'

import i1 from '../Interior/I1.jpg'
import i2 from '../Interior/I2.jpg'
import i3 from '../Interior/I3.jpg'
import i4 from '../Interior/I4.jpg'
import i5 from '../Interior/I5.jpg'
import i6 from '../Interior/I6.jpg'
import i7 from '../Interior/I7.jpg'
import i8 from '../Interior/I8.jpg'
import i9 from '../Interior/I9.jpg'
import i10 from '../Interior/I10.jpg'
import i11 from '../Interior/I11.jpg'
import i12 from '../Interior/I12.jpg'
import i13 from '../Interior/I13.jpg'


const images = [
    i1,
    i2,
    i3,
    i4,
    i5,
    i6,
    i7,
    i8,
    i9,
    i10,
    i11,
    i12,
    i13,

]

function Estate() {
  return (
    <div className = {style.Name}>
      <Head>
        <title>Photography-JWD Creative House</title>
        <meta name="description" content="Previous Work - Photography" />
        <meta name="keywords" content="Toronto Production Company, videography, toronto videography, JWD Creative House, JWD Creative, Toronto Videographer, Toronto, Toronto Videography"/>
        <meta name="robots" content="noindex,nofollow"/>
      </Head>
    <div className = {style.gallery}>
      <ResponsiveMasonry className = {style.masonry} columnsCountBreakPoints={{350: 1, 850:2}}>
          <Masonry gutter = "10px">
          {images.map((images,i) => (
                    <img 
                        key = {i}
                        src = {images.src}
                        alt = "images"
                        style={{width: "100%",display: "block"}}
                        />      
                ))}
          </Masonry>
      </ResponsiveMasonry>
    </div>
    <div className = {style.photoTitle}>
      <Link className = {style.back} href = '/Photography'>
        <button><ArrowBackIosNewIcon/></button>
      </Link>
      <div className = {style.photoheader1}>
        <h1>REAL ESTATE</h1>
      </div>  
    </div>
  </div>
  )
}

export default Estate
