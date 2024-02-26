import React from "react";
// If you installed FontAwesome via npm, uncomment these imports
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram, faTiktok, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';

const styles = {
  footer: {
    backgroundColor: "black",
    color: "#fff",
    textAlign: "center",
    padding: "20px 10px",
  },
  socialLinks: {
    margin: "0",
    padding: "0",
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  socialLinkItem: {
    margin: "0 10px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "24px", // Adjust size as needed
  },
};

const Footer = () => {
  return (
    <footer className="footer" style={styles.footer}>
      <ul style={styles.socialLinks}>
        <li style={styles.socialLinkItem}>
          <a
            href="https://instagram.com"
            style={styles.link}
            aria-label="Instagram"
          >
            {/* If using FontAwesome via npm */}
            {/* <FontAwesomeIcon icon={faInstagram} /> */}
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li style={styles.socialLinkItem}>
          <a href="https://tiktok.com" style={styles.link} aria-label="TikTok">
            {/* <FontAwesomeIcon icon={faTiktok} /> */}
            <i className="fab fa-tiktok"></i>
          </a>
        </li>
        <li style={styles.socialLinkItem}>
          <a
            href="https://youtube.com"
            style={styles.link}
            aria-label="YouTube"
          >
            {/* <FontAwesomeIcon icon={faYoutube} /> */}
            <i className="fab fa-youtube"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
