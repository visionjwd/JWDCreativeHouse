import React from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import style from '../styles/Portfolio.module.css'
import Link from 'next/link'
import m1 from '../mclarengallery/m1.jpg'
import m2 from '../mclarengallery/m2.jpg'
import m3 from '../mclarengallery/m3.jpg'
import m4 from '../mclarengallery/m4.jpg'
import m5 from '../mclarengallery/m5.jpg'
import m6 from '../mclarengallery/m6.jpg'
import m7 from '../mclarengallery/m7.jpg'
import m8 from '../mclarengallery/m8.jpg'
import m9 from '../mclarengallery/m9.jpg'
import m10 from '../mclarengallery/m10.jpg'
import Head from 'next/head'


const images = [
    m1,
    m2,
    m3,
    m4,
    m6,
    m5,
    m7,
    m9,
    m8,
    m10,
]

const mclaren = () => {
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
        <h1>720S</h1>
      </div>  
    </div>
    </div>
  )
}

export default mclaren
