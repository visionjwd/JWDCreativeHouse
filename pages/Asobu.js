import React from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import Link from 'next/link'
import style from '../styles/Portfolio.module.css'
import a1 from '../Asobu/a1.jpg'
import a2 from '../Asobu/a2.jpg'
import a3 from '../Asobu/a3.jpg'
import a4 from '../Asobu/a4.jpg'
import a5 from '../Asobu/a5.jpg'
import a6 from '../Asobu/a6.jpg'
import a7 from '../Asobu/a7.jpg'
import a8 from '../Asobu/a8.jpg'
import a9 from '../Asobu/a9.jpg'
import a10 from '../Asobu/a10.jpg'
import a11 from '../Asobu/a11.jpg'
import a12 from '../Asobu/a12.jpg'
import a13 from '../Asobu/a13.jpg'

const images = [
    a1,
    a2,
    a3,
    a4,
    a5,
    a6,
    a8,
    a7,
    a9,
    a10,
    a11,
    a12,
    a13,
]


const asobu = () => {
  return (
    <div className = {style.Name}>
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
        <h1>ASOBU</h1>
      </div>  
    </div>
  </div>
  )
}

export default asobu
