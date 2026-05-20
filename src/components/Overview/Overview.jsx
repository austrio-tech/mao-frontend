// src/components/Overview/Overview.js
import React from 'react';
import styles from './Overview.module.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Overview = () => {
  const ref = useScrollAnimation();

  return (
    <section className={styles.overview} ref={ref} style={{ opacity: 0 }}>
      <div className={styles.overviewContent}>
        <h2>Company Overview</h2>
        <p>
          Modren Arab Oasis for Investment SPC is a leading construction and manpower company in Oman,
          providing high-quality machinery, skilled labor, and IT/business services. We are committed
          to delivering excellence where heritage meets modernity.
        </p>
      </div>
    </section>
  );
};

export default Overview;
