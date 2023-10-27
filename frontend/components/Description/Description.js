import React from 'react'
import styles from './description.module.css'

export default function Description() {
  return (
    <section className={styles.description}>
        <h2 className={styles.h2}> Description du domaine </h2>
            <div className={styles.description_content}>
                <h3 className={styles.h3}> Situation Géographique </h3>
                    <p className={styles.description_text}> 
                        Le gîte du parc de Goûts se situe à 25 km des thermes
                        de Casteljaloux et à 33 km d'Agen où se situe Walygator
                        sud ouest et Aqualand, à 1h 30 de Toulouse, à proximité
                        de tous les commerces. Les aéroports les plus proches : 
                        aéroport d'Agen, La Garenne : 33 km, aéroport de Bergerac
                        Dordogne Périgord : 73 km. La mer est à 167km par 
                        l'autoroute A62 ou 1h39.
                    </p>
                <h3 className={styles.h3}> La maison </h3>
                    <p className={styles.description_text}> 
                        Notre gîte Le Parc de Goûts est une charmante maison de 
                        village, pouvant accueillir jusqu'à 15 personnes, située
                        dans un parc contenant également un étang, à 5 km d'Aiguillon, 
                        dans un cadre calme et agréable situé sur les côteaux. 
                       
                    </p>
                <h3 className={styles.h3}> Activités </h3>
                    <p className={styles.description_text}> 
                        Le lieu est doté d'une piscine extérieure chauffée, 
                        celle-ci est dotée d'un pool house et d'une terrasse 
                        semi-couverte bien exposée avec barbecue intégré et plancha. 
                        La rivière du Lot longe la ville d'Aiguillon et offre 
                        un point de baignade avec plage aménagée et surveillée 
                        pendant la haute saison.
                    </p>
                <h3 className={styles.h3}> Les équipements </h3>
                    <p className={styles.description_text}> 
                        Un parking privé, une buanderie, une cuisine équipée, 5 chambres, 3 salles de bain,
                        une télé connectée, un flipper, une machine à glaçons
                        et divers équipements sont à votre disposition sur place.
                    </p>
            </div>          
    </section>
  )
}
