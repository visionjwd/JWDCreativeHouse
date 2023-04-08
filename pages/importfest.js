import React from 'react'
import Link from 'next/link'
import i1 from '../Importfestgallery/i1.jpg'
import i2 from '../Importfestgallery/i2.jpg'
import i3 from '../Importfestgallery/i3.jpg'
import i4 from '../Importfestgallery/i4.jpg'
import i5 from '../Importfestgallery/i5.jpg'
import i6 from '../Importfestgallery/i6.jpg'
import i7 from '../Importfestgallery/i7.jpg'
import i8 from '../Importfestgallery/i8.jpg'
import i9 from '../Importfestgallery/i9.jpg'
import i10 from '../Importfestgallery/i10.jpg'
import i11 from '../Importfestgallery/i11.jpg'
import i12 from '../Importfestgallery/i12.jpg'
import i13 from '../Importfestgallery/i13.jpg'
import i14 from '../Importfestgallery/i14.jpg'
import i15 from '../Importfestgallery/i15.jpg'
import i16 from '../Importfestgallery/i16.jpg'
import i17 from '../Importfestgallery/i17.jpg'
import i18 from '../Importfestgallery/i18.jpg'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import style from '../styles/Portfolio.module.css'
import Head from 'next/head'

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
    i17,
    i13,
    i14,
    i15,
    i16,
    i12,
    i18,
]
const importfest = () => {
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
      <div className = {style.photoheader1}>
        <h1>IMPORTFEST</h1>
      </div>  
    </div>
  </div>
  )
}

export default importfest
