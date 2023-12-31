import { items }  from "../../public/Items.js";
import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./banner.module.css";

export default function BootstrapCarousel() {

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    // Préchargement des images importantes
    const importantImages = items.map((item) => item.imageUrl);
    importantImages.forEach((imageSrc) => {
      const img = new Image();
      img.src = imageSrc;
    });
  }, []);

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className={styles.carousel}>
      {items.map((item) => (
        <Carousel.Item key={item.id} className={styles.itemP} interval={4000}>
          <img      
            src={item.imageUrl} 
            loading="lazy" 
            alt="slides" 
            className={styles.picture}
          />
          <div className={styles.filter}> </div>
          <div className={styles.box_description} >
            <p className={styles.description}> {item.description}</p>
          </div>          
          <Carousel.Caption className={styles.caption}>                     
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}