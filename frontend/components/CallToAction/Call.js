import React from 'react'
import Link from "next/link"
import styles from './call.module.css'

export default function Call() {
  return (
   <section className={styles.call_box}>
     <Link href='/photos' className={styles.call_to_action} >
        Voir toutes les photos
      </Link>
   </section>
  )
}
