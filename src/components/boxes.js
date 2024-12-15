import React from "react";
import gearVR from "../images/Rectangle 4.png"; 
import smartVR from "../images/Rectangle 5.png";  
import playStationVR from "../images/Rectangle 6.png";  

const Box = () => {
  return (
    <div style={{ backgroundColor: "#0B0319", minHeight: "100vh", color: "white", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>

      <div style={styles.imageContainer}>
        
        <div style={styles.imageCard}>
        <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
          <img src={gearVR} alt="Gear VR Headset" style={styles.image} />
          </a>
          <h2>Gear VR Headset</h2>
        </div>
        

        <div style={styles.imageCard}>
        <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
          <img src={smartVR} alt="Smart VR Headset" style={styles.image} />
          </a>
          <h2>Smart VR Headset</h2>
        </div>


        <div style={styles.imageCard}>
        <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
          <img src={playStationVR} alt="Play Station VR" style={styles.image} />
          </a>
          <h2>   Play Station VR</h2>
        </div>
      </div>
    </div>
  );
};

const styles = {
  imageContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    maxWidth: "1200px",
    flexWrap: "wrap",
    margin: "0 20px",
  },
  
  imageCard: {
    
    transform:"scale(1.5)",
    
  },
  

  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },
};

export default Box;
