import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.links}>
        <a href="/privacy-policy" style={styles.link}>Privacy Policy</a>
        <a href="/terms-of-service" style={styles.link}>Terms of Service</a>
      </div>
      <div style={styles.socialMedia}>
        <a href="https://facebook.com" style={styles.icon} aria-label="Facebook">
          <img src="/icons/facebook.png" alt="Facebook" />
        </a>
        <a href="https://twitter.com" style={styles.icon} aria-label="Twitter">
          <img src="/icons/twitter.png" alt="Twitter" />
        </a>
        <a href="https://instagram.com" style={styles.icon} aria-label="Instagram">
          <img src="/icons/instagram.png" alt="Instagram" />
        </a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#f1f1f1',
  },
  links: {
    display: 'flex',
    gap: '15px',
  },
  link: {
    textDecoration: 'none',
    color: '#000',
  },
  socialMedia: {
    display: 'flex',
    gap: '10px',
  },
  icon: {
    width: '24px',
    height: '24px',
  },
};

export default Footer;