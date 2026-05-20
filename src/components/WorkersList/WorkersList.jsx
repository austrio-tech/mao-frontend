// src/components/WorkersList/WorkersList.js
import React from 'react';
import styles from './WorkersList.module.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const WorkersList = () => {
  const ref = useScrollAnimation();

  return (
    <section className={styles.workers} ref={ref} style={{ opacity: 0 }}>
      <h2>Manpower Supply</h2>

      <div className={styles.categoriesContainer}>
      <div className={styles.category}>
        <h3>Skilled Workers</h3>
        <div className={styles.cardGrid}>
          <div className={styles.card}>Steel Fixer</div>
          <div className={styles.card}>Carpenter</div>
          <div className={styles.card}>Mason</div>
          <div className={styles.card}>Scaffolder</div>
          <div className={styles.card}>Electrician</div>
        </div>
      </div>

      <div className={styles.category}>
        <h3>Unskilled Workers</h3>
        <div className={styles.cardGrid}>
          <div className={styles.card}>Helper of Skilled Professionals</div>
          <div className={styles.card}>General Helper</div>
        </div>
      </div>

      <div className={styles.category}>
        <h3>Certified HSE Professionals</h3>
        <div className={styles.cardGrid}>
          <div className={styles.card}>NEBOSH Certified</div>
          <div className={styles.card}>IOSH Certified</div>
          <div className={styles.card}>OSHA Certified</div>
        </div>
      </div>

      <div className={styles.category}>
        <h3>IT Professionals</h3>
        <div className={styles.cardGrid}>
          <div className={styles.card}>Software Developers</div>
          <div className={styles.card}>Website Developers</div>
          <div className={styles.card}>Automation Engineers</div>
          <div className={styles.card}>IT Engineers</div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default WorkersList;
