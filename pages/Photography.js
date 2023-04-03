import React from 'react'
import Link from 'next/link'
import M4 from '../Assets/m4title.jpg'
import importfestpic from '../Assets/importfesttitle.jpg'
import mclaren from '../Assets/mclaren.jpg'
import Asobu from '../Assets/asobu.jpg'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import PhotoLinks from '../Components/PhotoLinks'
import style from '../styles/Photo.module.css'
import Head from 'next/head'

const Photography = () => {
  return (
    <div className = {style.photography}>
      <Head>
        <title>Photography-JWD Creative House</title>
        <meta name="description" content="Photography Portfolio" />
      </Head>
      <div className = {style.rights}>
        <Link className = {style.back} href = '/work'>
          <button><ArrowBackIosNewIcon/></button>
        </Link>
        <div className = {style.titlesection}>
          <h1>PHOTOS
            <Link className = {style.toVid} href = '/Videography'>
              <button>VIDEOS</button>
            </Link>
          </h1>
        </div>
      </div>
      <ul className = {style.projectContainer}>
          <PhotoLinks
            bgi = {M4}
            title = "BMW M4"
            explain = "Private Client"
            path = '/m4'
          />
          <PhotoLinks
            bgi = {importfestpic}
            title = "Importfest 2022"
            explain = "2022 Importfest official media"
            path = '/importfest'
          />
          <PhotoLinks
            bgi = {mclaren}
            title = "Mclaren 720s"
            explain = "Private Client"
            path = '/mclaren'
          />
          <PhotoLinks
            bgi = {Asobu}
            title = "Asobu 2021 catalog"
            explain = "Asobu Bottles Product Launch photos"
            path = '/Asobu'
          />
        </ul>
    </div>
  )
}

export default Photography
