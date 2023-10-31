import { useState, useEffect } from "react";
import { items } from "../../public/Banners.js";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./carousel.module.css";
import Image from "next/image.js";

export default function BootstrapCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    // Préchargement des images importantes
    const importantImages = items.map((item) => item.imageUrl);
    importantImages.forEach((imageSrc) => {
      const img = Image;
      img.src = imageSrc;
    });
  }, []);

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className={styles.carousel}>
      {items.map((item) => (
        <Carousel.Item key={item.id} className={styles.itemP}>
          <Image     
            src={item.imageUrl}
            fill 
            alt="slides"                   
            className={styles.picture}
          />
          <div className={styles.filter}> </div>
          <Carousel.Caption className={styles.caption}> </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}