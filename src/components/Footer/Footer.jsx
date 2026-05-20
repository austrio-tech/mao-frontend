// src/components/Footer/Footer.js
import React from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/svgs/icon.svg';
import horizontalName from '../../assets/svgs/horizontalname.svg';
import verticalName from '../../assets/svgs/verticalname.svg';
import config from '../../config/config';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  const [isResponsive, setIsResponsive] = React.useState(window.innerWidth <= 1024);

  React.useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="logo" className={styles.logo} style={{filter: 'invert(1)'}} />
            <img 
              src={isResponsive ? verticalName : horizontalName} 
              alt="logo" 
              className={styles.logoName} 
            />
          </div>
          {/* <h4>Contact</h4> */}
          <div className={styles.iconLinks}>
            <a href={`mailto:${config.email.main}`} className={styles.iconLink} data-platform="email" aria-label="Email"><i className="fas fa-envelope"></i></a>
            <a href={config.social.website} target="_blank" rel="noopener noreferrer" className={styles.iconLink} data-platform="website" aria-label="Website"><i className="fas fa-globe"></i></a>
            <a href={config.social.instagram} target="_blank" rel="noopener noreferrer" className={styles.iconLink} data-platform="instagram" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer" className={styles.iconLink} data-platform="linkedin" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <div className={styles.footerSection}>
          {/* <h4>Team</h4> */}
          <div className={styles.teamList}>
            <div className={styles.teamMember}>
              <p><strong>{config.team.member1.name}</strong></p>
              <p>{config.team.member1.phone}</p>
              <p>{config.team.member1.email}</p>
            </div>
            <div className={styles.teamMember}>
              <p><strong>{config.team.member2.name}</strong></p>
              <p>{config.team.member2.phone}</p>
              <p>{config.team.member2.email}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} {config.company.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
