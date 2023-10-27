import { useState } from 'react';
import Link from 'next/link';
import styles from './hamburger.module.css';

const Hamburger = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className={styles.hamburger_container}>
      <button className={`${styles.hamburger} ${isMenuOpen ? styles.open : styles.close}`} aria-label='bouton du menu' onClick={handleMenuToggle}>
        <span className={styles.line}> </span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </button>
      {isMenuOpen && (
        <ul className={styles.menu}>
          <Link href='/tarifs' className={styles.menu_link} > Tarifs </Link> 
          <Link href='/contact' className={styles.menu_link}> Contact </Link>  
          <Link href='/photos' className={styles.menu_link}> Photos</Link>
        </ul>
      )}
    </section>
  );
};
export default Hamburger;