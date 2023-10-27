import React from 'react'
import styles from './card.module.css'

export default function Card() {
  return (
    <section className={styles.container}>
        <div className={styles.card}>
            <h2 className={styles.high}> Haute Saison </h2>
            <h3 className={styles.price}>
                <span className={styles.span}>2500€</span> /semaine
            </h3>
            <h4 className={styles.description_title}> Période: </h4>
                <p className={styles.description }>
                    Vacances scolaires <br></br> des zones A, B et C 
                </p>
        </div>
        <div className={styles.card}>
            <h2 className={styles.medium}> Moyenne Saison </h2>
            <h3 className={styles.price}>
                <span className={styles.span}>2000€</span> /semaine
            </h3>
            <h4 className={styles.description_title}> Période: </h4>
                <p className={styles.description }>
                     mai, juin et septembre 
                    <br></br>(hors vacances scolaires)
                </p>
        </div>
        <div className={styles.card}>
            <h2 className={styles.low}> Hors Saison </h2>
            <h3 className={styles.price}>
                <span className={styles.span}>1500€</span> /semaine
            </h3>
            <h4 className={styles.description_title}> Période: </h4>
                <p className={styles.description }>
                    octobre à avril 
                    <br></br> (hors vacances scolaires) 
                </p>
        </div> 
     </section>
  )
}