// src/pages/CareersPage/CareersPage.jsx
import React, { useState } from 'react';
import styles from './CareersPage.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import config from '../../config/config';
import '@fortawesome/fontawesome-free/css/all.min.css';

const CareersPage = () => {
  const ref = useScrollAnimation();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
    document: null
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');
    setSuccessMessage('');
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.fullName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('position', formData.position);
      formDataToSend.append('experience', formData.experience);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('sourcetype', config.api.careerType);
      formDataToSend.append('from', config.api.from);
      formDataToSend.append('to', config.api.sendTo);
      if (formData.document) {
        formDataToSend.append('document', formData.document);
      }

      const response = await fetch(config.api.careerMail, {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        console.log('Career form submitted successfully:', formData);
        setSuccessMessage('Thank you for your application! We will review your resume and get back to you soon.');
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          position: '',
          experience: '',
          message: '',
          document: null
        });
        // Clear success message after 5 seconds
        setTimeout(() => setSuccessMessage(''), 5000);
      } else {
        const errorMsg = `There is a temporary issue. Kindly mail your resume at ${config.email.jobs}. We will get back to you at the earliest.`;
        setErrorMessage(errorMsg);
        // Clear error message after 10 seconds
        setTimeout(() => setErrorMessage(''), 10000);
      }
    } catch (error) {
      console.error('Error submitting career form:', error);
      const errorMsg = `There is a temporary issue. Kindly mail your resume at ${config.email.jobs}. We will get back to you at the earliest.`;
      setErrorMessage(errorMsg);
      // Clear error message after 10 seconds
      setTimeout(() => setErrorMessage(''), 10000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.careersPageContainer}>
      <Navbar />
      <section className={styles.careersPage} ref={ref} style={{ opacity: 0 }}>
      <div className={styles.careersContainer}>
        <div className={styles.careersHeader}>
          <h1>Join Our Team</h1>
          <p>We're looking for talented individuals to help us build the future of construction and manpower services.</p>
        </div>

        <div className={styles.careersContent}>
          <div className={styles.aboutCareers}>
            <h2>Why Work With Us?</h2>
            <div className={styles.benefitsList}>
              <div className={styles.benefitCard}>
                <i className="fas fa-briefcase"></i>
                <h3>Professional Growth</h3>
                <p>Develop your skills and advance your career with us.</p>
              </div>
              <div className={styles.benefitCard}>
                <i className="fas fa-users"></i>
                <h3>Great Team</h3>
                <p>Work alongside talented and dedicated professionals.</p>
              </div>
              <div className={styles.benefitCard}>
                <i className="fas fa-star"></i>
                <h3>Opportunities</h3>
                <p>Access to challenging projects and learning opportunities.</p>
              </div>
              <div className={styles.benefitCard}>
                <i className="fas fa-handshake"></i>
                <h3>Support</h3>
                <p>Be part of a supportive and inclusive workplace culture.</p>
              </div>
            </div>
          </div>

          <form className={styles.careerForm} onSubmit={handleSubmit}>
            <h2>Send Your Application</h2>
            {isLoading && (
              <div className={styles.loadingMessage}>
                <div className={styles.spinner}></div>
                <span>Submitting your application...</span>
              </div>
            )}
            {successMessage && (
              <div className={styles.successMessage}>
                {successMessage}
              </div>
            )}
            {errorMessage && (
              <div className={styles.errorMessage}>
                {errorMessage.split(config.email.jobs).map((part, index) => (
                  <React.Fragment key={index}>
                    {part}
                    {index < 1 && <span className={styles.highlightEmail}>{config.email.jobs}</span>}
                  </React.Fragment>
                ))}
              </div>
            )}
            <div className={styles.formGroup}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="position"
                  placeholder="Desired Position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="experience"
                  placeholder="Years of Experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>
            </div>
            <div className={styles.formGroup}>
              <input
                type="file"
                name="document"
                placeholder="Upload Resume/CV"
                onChange={handleChange}
                accept=".pdf,.doc,.docx"
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <textarea
                name="message"
                placeholder="Tell us about yourself..."
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className={styles.textarea}
              ></textarea>
            </div>
            <button type="submit" className={styles.submitBtn} disabled={isLoading}>
              {isLoading ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        </div>
      </div>
      </section>
      <Footer />
    </div>
  );
};

export default CareersPage;
