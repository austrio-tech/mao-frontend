// src/components/Carousel/Carousel.js
import React from 'react';
import styles from './Carousel.module.css';
import icon from '../../assets/svgs/icon.svg';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Carousel = () => {
  const ref = useScrollAnimation();

  return (
    <div className={styles.carousel} ref={ref} style={{ opacity: 0 }}>
      <img src={icon} alt="watermark" className={styles.watermark} />
      {/* <div className={styles.slide}>Welcome to Modren Arab Oasis - Where Heritage Meets Modernity</div> */}
    </div>
  );
};

export default Carousel;
