import React from 'react'
import Title from '../Title/Title'
import styles from './simple.module.css'
import Image from 'next/image'

export default function SimpleBanner(props) {
  return (
    <section className={styles.banner}>
        <Image                
          src= {props.picture}
          alt='bannière'
          priority
          className={styles.picture}
        />
        <div className={styles.filter}> </div>
        <Title title = {props.title}/>
    </section>  
  )
}
