import Link from 'next/link';
import React,{ useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './header.module.css'
import Hamburger from '../Hamburger/Hamburger';
import Logo from '../../public/assets/logo2.jpg'

const Header = () =>  {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResponsive, setIsResponsive] = useState(true);

  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsResponsive(true);
      } else {
        setIsResponsive(false);
        setIsMenuOpen(false); 
      }
    };
  window.addEventListener('resize', handleResize);

  // Vérifie la taille de l'écran lors du chargement initial
  handleResize();

  // Nettoie les écouteurs d'événements lorsque le composant est démonté
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>    
      <div className={styles.logo_container}>
      <Link href='/' className={styles.logo}>
        <Image   
          className={styles.picture}             
          src= {Logo}
          width={100}
          height={100}
          alt='logo du site'
          priority
        />
      </Link>      
      </div>     
      {isResponsive 
        ?  
          <Hamburger className={styles.hamburger} />
        :
          <ul className={`${styles.ul_link}`}>
            <Link className={styles.link}  href='/tarifs'> Tarifs </Link>
            <Link href='/photos' className={styles.link}>  Photos </Link>
            <Link href='/contact'className={styles.link}>  Contact </Link>
          </ul> 
        }      
    </nav>
    </header>  
  )
}

export default Header