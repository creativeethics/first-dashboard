import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} My CRM. All rights reserved.</p>
      <div style={styles.socialLinks}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
          Facebook
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
          Twitter
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "10px 20px",
    marginTop: "20px",
  },
  socialLinks: {
    marginTop: "10px",
  },
  link: {
    color: "#fff",
    margin: "0 10px",
    textDecoration: "none",
  },
};

export default Footer;

