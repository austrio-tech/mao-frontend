// src/components/ProjectCategories/ProjectCategories.js
import React from 'react';
import styles from './ProjectCategories.module.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const ProjectCategories = () => {
  const ref = useScrollAnimation();
  const categories = [
    {
      icon: '🏗',
      title: 'Construction Works',
      description: 'Building construction, structural works, and infrastructure development'
    },
    {
      icon: '🛣',
      title: 'Road & Highway Projects',
      description: 'Express ways, link roads, and highway infrastructure development'
    },
    {
      icon: '💧',
      title: 'Water Infrastructure',
      description: 'Desalination plants, water systems, and hydraulic infrastructure'
    },
    {
      icon: '🏭',
      title: 'Industrial Projects',
      description: 'Industrial installations and specialized project execution'
    },
    {
      icon: '⚙',
      title: 'Mechanical Works',
      description: 'Mechanical installation, equipment setup, and technical works'
    },
    {
      icon: '🛡',
      title: 'Protection Works',
      description: 'Safety systems, protection structures, and defensive installations'
    }
  ];

  return (
    <section className={styles.projectCategories} ref={ref} style={{ opacity: 0 }}>
      <h2>Project Categories</h2>
      <div className={styles.categoriesGrid}>
        {categories.map((category, index) => (
          <div key={index} className={styles.categoryCard}>
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>{category.icon}</span>
            </div>
            <h3>{category.title}</h3>
            <p>{category.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectCategories;
