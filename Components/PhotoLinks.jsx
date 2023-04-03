import React from 'react'
import Link from 'next/link'
import styles from '../styles/Photo.module.css'

function PhotoLinks(props) {
  return (
    <>
    <li className = {styles.photolinks}>
      <div className = {styles.photobg} style = {{ backgroundImage: `url(${(props.bgi).src})`}}>
        <h1 className = {styles.projectTitle}>{props.title}</h1>
        <p className = {styles.projectdescription}>{props.explain}</p>
        <Link className = {styles.photoLinks} href = {props.path}>
            <button>View More</button>
        </Link>
      </div>
    </li>

    </>
  )
}

export default PhotoLinks
