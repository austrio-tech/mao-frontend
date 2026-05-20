// src/components/Services/Services.js
import React from 'react';
import styles from './Services.module.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Services = () => {
  const ref = useScrollAnimation();

  return (
    <section className={styles.services} ref={ref} style={{ opacity: 0 }}>
      <h2>Our Services</h2>
      <ul>
        <li>🛠 Machinery and Vehicle for Construction</li>
        <li>👷‍♂️ Manpower Supply</li>
        <li>🏗 Construction Works</li>
        <li>💼 Business and IT Admin Services</li>
      </ul>
    </section>
  );
};

export default Services;
