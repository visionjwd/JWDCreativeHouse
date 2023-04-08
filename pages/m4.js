import React from 'react'
import m41 from '../Gallery/m41.jpg'
import m42 from '../Gallery/m42.jpg'
import m43 from '../Gallery/m43.jpg'
import m44 from '../Gallery/m44.jpg'
import m45 from '../Gallery/m45.jpg'
import m46 from '../Gallery/m46.jpg'
import m47 from '../Gallery/m47.jpg'
import m48 from '../Gallery/m48.jpg'
import m49 from '../Gallery/m49.jpg'
import m50 from '../Gallery/m50.jpg'
import m51 from '../Gallery/m51.jpg'
import m52 from '../Gallery/m52.jpg'
import m53 from '../Gallery/m53.jpg'
import m54 from '../Gallery/m54.jpg'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import Link from 'next/link'
import style from '../styles/Portfolio.module.css'
import Head from 'next/head'

const images = [
    m41,
    m42,
    m51,
    m44,
    m46,
    m45,
    m52,
    m48,
    m49,
    m53,
    m54,
    m47,
    m50,
    m43,
]

const m4 = () => {
  return (
    <div className = {style.Name}>
      <Head>
        <title>Photography-JWD Creative House</title>
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
      <div className = {style.photoheader}>
        <h1>BMW M4</h1>
      </div>  
    </div>
  </div>
  )
}

export default m4
