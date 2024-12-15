import React, { useEffect } from "react";
import GooglePlayBadge from "../images/image 9.png";
import AppStoreBadge from "../images/image 8.png";
import TwitterIcon from "../images/Twitter.png";
import YouTubeIcon from "../images/YouTube.png";
import FacebookIcon from "../images/Facebook F.png";
import InstagramIcon from "../images/Instagram.png";

const AppDownloadSection = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#0B0319";
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.fontFamily = "Arial, sans-serif";
    document.body.style.color = "#fff";
    document.body.style.height = "100vh";
    document.body.style.overflowX = "hidden";
  }, []);

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <a href="#help" style={styles.navLink}>Help</a>
        <a href="#about" style={styles.navLink}>About Us</a>
        <a href="#company" style={styles.navLink}>Company</a>
        <a href="#services" style={styles.navLink}>Services</a>
        <a href="#contact" style={styles.navLink}>Contact</a>
      </nav>

      <div style={styles.content}>
        <h2 style={styles.heading}>Download our App</h2>
        <p style={styles.description}>
          Connect with friends across the globe. Multiplayer VR games let you team up, compete, 
          or simply hang out in shared spaces. Connect with friends across the globe. 
          Multiplayer VR games let you team up, compete, or simply hang out in shared spaces.
        </p>

        <div style={styles.badges}>
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
            <img src={GooglePlayBadge} alt="Google Play" style={styles.badge} />
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img src={AppStoreBadge} alt="App Store" style={styles.badge} />
          </a>
        </div>
      </div>

      <footer style={styles.footer}>
        <div style={styles.footerLinks}>
          <a href="#terms" style={styles.footerLink}>Terms</a>
          <a href="#privacy" style={styles.footerLink}>Privacy</a>
          <a href="#conditions" style={styles.footerLink}>Conditions</a>
        </div>
        <p style={styles.copyright}>&copy; 2024 VR ZONE Ltd. All Rights Reserved</p>
        <div style={styles.socialIcons}>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={TwitterIcon} alt="Twitter" style={styles.iconImage} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={YouTubeIcon} alt="YouTube" style={styles.iconImage} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={FacebookIcon} alt="Facebook" style={styles.iconImage} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={InstagramIcon} alt="Instagram" style={styles.iconImage} />
          </a>
        </div>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "100vh",
    padding: "20px",
    boxSizing: "border-box",
    width: "100%",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    gap: "50px",
    width: "100%",
    maxWidth: "1200px",
    fontSize: "25px",
    marginBottom: "30px",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    transition: "color 0.3s",
  },
  content: {
    textAlign: "center",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 20px",
    width: "100%",
    maxWidth: "1200px",
  },
  heading: {
    fontSize: "3rem",
    marginBottom: "20px",
  },
  description: {
    fontSize: "1.2rem",
    lineHeight: "1.8",
    marginBottom: "40px",
    color: "#ccc",
    maxWidth: "700px",
  },
  badges: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "50px",
  },
  badge: {
    width: "180px",
    cursor: "pointer",
  },
  footer: {
    display:"flex",
    justifyContent:"space-between",
    width: "100%",
    borderTop: "2px solid",
    borderImage: "linear-gradient(90deg, #00d9ff, #ff00d9) 1",
    paddingTop: "20px",
    color: "#ccc",
    textAlign: "center",
    fontSize: "1rem",
  },
  footerLinks: {
    display: "flex",
    fontSize:"25px",
    justifyContent: "center",
    gap: "30px",
    marginBottom: "10px",
  },
  footerLink: {
    color: "#fff",
    textDecoration: "none",
    transition: "color 0.3s",
  },
  copyright: {
    marginBottom: "10px",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    fontSize: "1.5rem",
    transform:"scale(2)",
    marginRight:"100px",
  },
  icon: {
    color: "#fff",
    textDecoration: "none",
    transition: "color 0.3s",
  },
};

export default AppDownloadSection;

