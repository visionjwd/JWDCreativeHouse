import React from 'react'
import Link from 'next/link'
import style from '../styles/Photo.module.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Head from 'next/head';

function Reel() {
  return (
    <div className = {style.photography}>
      <Head>
        <title>Social Reels-JWD Creative House</title>
        <meta name="description" content="Social Media Reels Portfolio" />
        <meta name="keywords" content="Toronto Production Company, videography, toronto videography, JWD Creative House, JWD Creative, Toronto Videographer, Toronto, Toronto Videography"/>
        <meta name="robots" content="index,follow"/>
      </Head>
    <div className = {style.rights}>
      <Link className = {style.back} href = '/work'>
        <button><ArrowBackIosNewIcon/></button>
      </Link>
      <div className = {style.titlesection}>
        <div className = {style.titlecontainer}>
        <h1>REELS</h1>
          <Link className = {style.toVid} href = '/Photography'>
            <button>PHOTOS</button>
          </Link>
        </div>
      </div>
    </div>
    <div className = {style.videogallery} id = {style.reelgallery}>
    <h2>Engaging Vertical Content for your social media platform. </h2>
    <div className = {style.reel}>
    <iframe id = "first" src="https://youtube.com/embed/hICPOALo9gg?feature=share" title="YouTube video player" frameBorder="0" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    <iframe id = "second" src="https://youtube.com/embed/or97MViFw70?feature=share" title="YouTube video player" frameBorder="0" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
    <div className = {style.reel}>
    <iframe id = "third" src="https://youtube.com/embed/KfBTie8MS6o?feature=share" title="YouTube video player" frameBorder="0" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    <iframe id = "fourth" src="https://youtube.com/embed/b3q7X2NJ534?feature=share" title="YouTube video player" frameBorder="0" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
    <div className = {style.reel}>
    <iframe id = "fifth" src="https://youtube.com/embed/lFr6WkD1caA?feature=share" title="YouTube video player" frameBorder="0" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    <iframe id = "sixth" src="https://youtube.com/embed/zF0flXzpN5c?feature=share" title="YouTube video player" frameBorder="0" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
    <div className = {style.reel}>
    <iframe id = "seventh" src="https://youtube.com/embed/nj0qdEIFIXY?feature=share" title="YouTube video player" frameBorder="0" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    <iframe id = "eigth" src="https://youtube.com/embed/MbnSdekc1yM?feature=share" title="YouTube video player" frameBorder="0" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
    </div>
    </div>
  )
}

export default Reel
