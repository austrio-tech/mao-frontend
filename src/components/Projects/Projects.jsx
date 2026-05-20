// src/components/Projects/Projects.js
import React from 'react';
import styles from './Projects.module.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Projects = () => {
  const ref = useScrollAnimation();
  const projectsData = [
    {
      project: 'ROP Express Way Link Road',
      contractor: 'Al Tasnim Enterprises LLC',
      started: '2024',
      status: 'Completed'
    },
    {
      project: 'Ubaylah Fayyad Buremi Project',
      contractor: 'Al Tasnim Enterprises LLC',
      started: '2025',
      status: 'Current'
    },
    {
      project: 'Wadi Hassan Infra Project',
      contractor: 'Al Tasnim Enterprises LLC',
      started: '2024',
      status: 'Current'
    },
    {
      project: 'Desalination Plant Sur',
      contractor: 'Bahwan Veolia LLC',
      started: '2024',
      status: 'Current'
    },
    {
      project: 'Ansab Galfar Protection Works',
      contractor: 'Galfar Engineering & Contracting LLC',
      started: '2024',
      status: 'Current'
    },
    {
      project: 'Sarooj Khasab Structure works',
      contractor: 'Sarooj Construction Company',
      started: '2024',
      status: 'Current'
    }
  ];

  return (
    <section className={styles.projects} ref={ref} style={{ opacity: 0 }}>
      <h2>Major Projects</h2>
      <div className={styles.projectsContainer}>
        <div className={styles.tableWrapper}>
          <table className={styles.projectsTable}>
            <thead>
              <tr>
                <th>Project</th>
                <th>Main Contractor</th>
                <th>Started</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {projectsData.map((project, index) => (
                <tr key={index}>
                  <td>{project.project}</td>
                  <td>{project.contractor}</td>
                  <td>{project.started}</td>
                  <td><span className={`${styles.statusBadge} ${styles[project.status.toLowerCase()]}`}>{project.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Projects;
