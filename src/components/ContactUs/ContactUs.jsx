// src/components/ContactUs/ContactUs.js
import React, { useState } from 'react';
import styles from './ContactUs.module.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import config from '../../config/config';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ContactUs = () => {
  const ref = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');
    setSuccessMessage('');
    try {
      const response = await fetch(config.api.contactMail, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          sourcetype: config.api.contactType,
          from: config.api.from,
          to: config.api.sendTo
        })
      });

      if (response.ok) {
        console.log('Form submitted successfully:', formData);
        setSuccessMessage('Message sent successfully! We will get back to you soon.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        // Clear success message after 5 seconds
        setTimeout(() => setSuccessMessage(''), 5000);
      } else {
        const errorMsg = `There is a temporary issue. Kindly mail your message at ${config.email.main}. We will get back to you at the earliest.`;
        setErrorMessage(errorMsg);
        // Clear error message after 10 seconds
        setTimeout(() => setErrorMessage(''), 10000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      const errorMsg = `There is a temporary issue. Kindly mail your message at ${config.email.main}. We will get back to you at the earliest.`;
      setErrorMessage(errorMsg);
      // Clear error message after 10 seconds
      setTimeout(() => setErrorMessage(''), 10000);
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Address',
      details: config.location
    },
    {
      icon: '📞',
      title: 'Phone',
      details: config.phone.primary
    },
    {
      icon: '✉',
      title: 'Email',
      details: config.email.main
    }
  ];

  return (
    <section className={styles.contactUs} ref={ref} style={{ opacity: 0 }}>
      <h2>Get In Touch</h2>
      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <h3>Contact Information</h3>
          <div className={styles.infoGrid}>
            {contactInfo.map((info, index) => (
              <div key={index} className={styles.infoCard}>
                <span className={styles.infoIcon}>{info.icon}</span>
                <div>
                  <h4>{info.title}</h4>
                  <p>{info.details}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.socialLinks}>
            <h4>Follow Us</h4>
            <div className={styles.socialIcons}>
            <a href={config.social.linkedin} className={styles.socialIcon} data-platform="linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href={config.social.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} data-platform="instagram" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href={`mailto:${config.email.main}`} className={styles.socialIcon} data-platform="email" aria-label="Mail"><i className="fas fa-envelope"></i></a>
            </div>
          </div>
        </div>

        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <h3>Send us a message</h3>
          {isLoading && (
            <div className={styles.loadingMessage}>
              <div className={styles.spinner}></div>
              <span>Sending your message...</span>
            </div>
          )}
          {successMessage && (
            <div className={styles.successMessage}>
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className={styles.errorMessage}>
              {errorMessage.split(config.email.main).map((part, index) => (
                <React.Fragment key={index}>
                  {part}
                  {index < 1 && <span className={styles.highlightEmail}>{config.email.main}</span>}
                </React.Fragment>
              ))}
            </div>
          )}
          <div className={styles.formGroup}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
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
                placeholder="Your Email"
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
          <div className={styles.formGroup}>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className={styles.textarea}
            ></textarea>
          </div>
          <button type="submit" className={styles.submitBtn} disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
