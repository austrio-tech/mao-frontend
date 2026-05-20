// src/pages/HomePage/HomePage.js
import React from 'react';
import styles from './HomePage.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Carousel from '../../components/Carousel/Carousel';
import Overview from '../../components/Overview/Overview';
import Services from '../../components/Services/Services';
import VisionMissionValues from '../../components/VisionMissionValues/VisionMissionValues';
import MachineryList from '../../components/MachineryList/MachineryList';
import WorkersList from '../../components/WorkersList/WorkersList';
import Projects from '../../components/Projects/Projects';
import ProjectCategories from '../../components/ProjectCateogories/ProjectCategories';
import ContactUs from '../../components/ContactUs/ContactUs';
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Navbar />
      <Carousel />
      <div id="overview"><Overview /></div>
      <div id="services"><Services /></div>
      <div id="vision-mission"><VisionMissionValues /></div>
      <div id="machinery"><MachineryList /></div>
      <div id="workers"><WorkersList /></div>
      <div id="projects"><Projects /></div>
      <div id="project-categories"><ProjectCategories /></div>
      <div id="contact"><ContactUs /></div>
      <Footer />
    </div>
  );
};

export default HomePage;
