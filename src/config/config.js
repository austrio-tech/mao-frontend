/**
 * Configuration file for accessing environment variables
 * All static contact info, emails, and URLs should be managed through .env file
 * Changes here will reflect everywhere the config is imported
 */

export const config = {
  // Contact Information
  phone: {
    primary: process.env.REACT_APP_PHONE_1,
    secondary: process.env.REACT_APP_PHONE_2,
  },

  email: {
    main: process.env.REACT_APP_EMAIL_MAIN,
    jobs: process.env.REACT_APP_EMAIL_JOBS,
  },

  // Team Members
  team: {
    member1: {
      name: process.env.REACT_APP_TEAM_MEMBER_1_NAME,
      phone: process.env.REACT_APP_TEAM_MEMBER_1_PHONE,
      email: process.env.REACT_APP_TEAM_MEMBER_1_EMAIL,
    },
    member2: {
      name: process.env.REACT_APP_TEAM_MEMBER_2_NAME,
      phone: process.env.REACT_APP_TEAM_MEMBER_2_PHONE,
      email: process.env.REACT_APP_TEAM_MEMBER_2_EMAIL,
    },
  },

  // Location
  location: process.env.REACT_APP_LOCATION,

  // Social Media Links
  social: {
    linkedin: process.env.REACT_APP_LINKEDIN_URL,
    instagram: process.env.REACT_APP_INSTAGRAM_URL,
    website: process.env.REACT_APP_WEBSITE_URL,
  },

  // API Configuration
  api: {
    baseUrl: process.env.REACT_APP_API_BASE_URL,
    contactMail: process.env.REACT_APP_API_BASE_URL + process.env.REACT_APP_CONTACT_EMAIL_API,
    careerMail: process.env.REACT_APP_API_BASE_URL + process.env.REACT_APP_CAREER_EMAIL_API,
    from: process.env.REACT_APP_API_FROM,
    contactType: process.env.REACT_APP_API_MAIL_TYPE_CONTACT,
    careerType: process.env.REACT_APP_API_MAIL_TYPE_CAREER,
    sendTo: process.env.REACT_APP_API_SEND_TO,
  },

  // Company Information
  company: {
    name: process.env.REACT_APP_COMPANY_NAME,
  },
};

// Debug logging (only in development)
if (process.env.NODE_ENV === 'development') {
  console.log('Config loaded from .env:', {
    phone: config.phone,
    email: config.email,
    team: config.team,
    location: config.location,
    social: config.social,
    api: config.api,
    company: config.company,
  });
}

export default config;
