import React from 'react'
import styles from './title.module.css'

export default function Title(props) {
  return (
    <section className={styles.box_title}>
        <h1 className={styles.title}> {props.title} </h1>
    </section>  
  )
}
