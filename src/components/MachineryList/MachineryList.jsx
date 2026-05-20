// src/components/MachineryList/MachineryList.js
import React from 'react';
import styles from './MachineryList.module.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const machinery = [
  'Zoomlion', 'JCB', 'ISUZU Hiab', 'CASE', 'XCMG', 'Bendini', 'Mitsubishi', 'Hino'
];

const MachineryList = () => {
  const ref = useScrollAnimation();

  return (
    <section className={styles.machinery} ref={ref} style={{ opacity: 0 }}>
      <h2>Machinery & Vehicles</h2>
      <ul>
        {machinery.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </section>
  );
};

export default MachineryList;
