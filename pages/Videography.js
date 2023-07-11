import React from 'react'
import Link from 'next/link'
import style from '../styles/Photo.module.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Head from 'next/head';

const Videography = () => {
  return (
    <div className = {style.photography}>
      <Head>
        <title>Videography-JWD Creative House</title>
        <meta name="description" content="Videography Portfolio" />
        <meta name="keywords" content="Toronto Production Company, videography, toronto videography, JWD Creative House, JWD Creative, Toronto Videographer, Toronto, Toronto Videography"/>
        <meta name="robots" content="index,follow"/>
      </Head>
    <div className = {style.rights}>
      <Link className = {style.back} href = '/work'>
        <button><ArrowBackIosNewIcon/></button>
      </Link>
      <div className = {style.titlesection}>
        <div className = {style.titlecontainer}>
        <h1>VIDEOS</h1>
          <Link className = {style.toVid} href = '/Photography'>
            <button>PHOTOS</button>
          </Link>
        </div>
      </div>
    </div>
    <div className = {style.videogallery}>
    <iframe id = "first" src="https://www.youtube.com/embed/BHRR-FMpDP4" title="YouTube video player" frameBorder="0" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    <iframe id = "second" src="https://www.youtube.com/embed/oBNTakUbmkA" title="YouTube video player" frameBorder="0" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    <iframe id = "third" src="https://www.youtube.com/embed/3SYR_NPKadc" title="YouTube video player" frameBorder="0" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    <iframe id = "fourth" src="https://www.youtube.com/embed/A8mK6-xKBP4" title="YouTube video player" frameBorder="0" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    <iframe id = "fifth" src="https://www.youtube.com/embed/uJ_gKWmahwY" title="YouTube video player" frameBorder="0" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    <iframe id = "sixth" src="https://www.youtube.com/embed/v1hghLDO_mU" title="YouTube video player" frameBorder="0" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  </div>
  )
}

export default Videography
