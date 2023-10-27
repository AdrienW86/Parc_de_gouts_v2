import React from 'react'
import styles from './footer.module.css'

export default function Footer() {
  return (
   <footer className={styles.footer}>
    <p> © Le Parc De Goûts créé par 
        <a className={styles.codev} href='https://code-v.fr'> Codev</a> 
    </p>
   </footer>
  )
}
