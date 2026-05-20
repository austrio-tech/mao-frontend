// src/components/VisionMissionValues/VisionMissionValues.js
import React from 'react';
import styles from './VisionMissionValues.module.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const VisionMissionValues = () => {
  const ref = useScrollAnimation();

  return (
    <section className={styles.vmv} ref={ref} style={{ opacity: 0 }}>
      <h2>Vision, Mission & Values</h2>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3>Our Vision</h3>
          <p>To be a trusted leader in construction and business solutions across Oman and beyond.</p>
        </div>
        <div className={styles.section}>
          <h3>Our Mission</h3>
          <p>Deliver excellence through reliable machinery, skilled workforce, and innovative digital solutions.</p>
        </div>
        <div className={styles.section}>
          <h3>Our Values</h3>
          <ul>
            <li>Integrity</li>
            <li>Quality</li>
            <li>Innovation</li>
            <li>Heritage</li>
            <li>Customer Satisfaction</li>
            
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionValues;
