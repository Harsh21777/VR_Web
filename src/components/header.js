import React from "react";
import smallImage from "../images/9f4e12f10cf49d0bfabfac4a4185b379 1.png"; 
import heroImage from "../images/image 1 1.png";   


   
   const App = () => {
     return (
       <div style={styles.container}>
         {/* Header */}
         <div style={styles.inner}>
         <header style={styles.header}>
           <nav style={styles.nav}>
             <a href="#" style={styles.navLink}>HOME</a>
             <a href="#" style={styles.navLink}>PRODUCTS</a>
             <img src={smallImage} alt="Small Illustration" style={styles.smallImage} />
             <a href="#" style={styles.navLink}>SERVICES</a>
             <a href="#" style={styles.navLink}>CONTACT</a>
           </nav>
         </header>
   
         <div style={styles.heroSection}>
           <div style={styles.textSection}>
             <h1 style={styles.nextGen}>NEXT GEN</h1>
             <h1 style={styles.mainTitle}>
               <span style={styles.virtualText}>VIRTUAL </span>
               <span style={styles.realityText}>REALITY</span>
             </h1>
             <p style={styles.subText}>
               Unveiling the Future: The Dawn of Hyper-Realistic Virtual Realms
             </p>
             <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
             <button style={styles.button}>See More</button>
             </a>
           </div>
   
           <div style={styles.heroImageContainer}>
             <img src={heroImage} alt="Hero Boy VR" style={styles.heroImage} />
           </div>
         </div>
       </div>
       </div>
     );
   };
   
   const styles = {
    
    
    header: {
       display: "flex",
       justifyContent: "space-around",
       alignItems: "center",
       padding: "20px 50px",
       background: "#1c1c1c",
       borderBottom: "2px solid #333",
       position: "relative",
       paddingTop:"20px",
      paddingBottom:"15px",
      background: "#0B0319",
       zIndex: 1, 
     },
     nav: {
       display: "flex",
       gap: "20px",
       alignItems: "center",
       width: "100%",
       justifyContent: "space-around",
     },
     navLink: {
       textDecoration: "none",
       color: "#fff",
       fontSize: "20px",
       transition: "color 0.3s",
     },
     
     smallImage: {
       height: "40px",
       paddingTop: "8px", 
       transform: "scale(3.8)", 
     },
   
     heroSection: {
       display: "flex",
       justifyContent: "space-between",
       alignItems: "center",
       padding: "50px",
       transform: "scale(1)",
       background: "#0B0319",
       color: "white",
       position: "relative",
       minHeight: "calc(100vh - 70px)", 
     },
     textSection: {
       paddingUp:"-100px",
       maxWidth: "50%",
     },
     nextGen: {
       fontSize: "120px",
       fontWeight: "bold",
       margin: "0 0 20px 0",
       color: "#fff",
       textShadow: "0 0 20px #6af1e8, 0 0 30px #b53cff",
     },
     virtualText: {
        fontSize: "60px",
        fontWeight: "bold",
        marginBottom: "20px",
        letterSpacing: "3px",
        textTransform: "uppercase",
        background: "linear-gradient(90deg, #6af1e8, #b53cff)",
        WebkitBackgroundClip: "text", // Clip the gradient to text
        WebkitTextFillColor: "transparent", // Make text transparent to show gradient
      },
      realityText: {
        fontSize: "60px",
        fontWeight: "bold",
        marginBottom: "20px",
        letterSpacing: "3px",
        textTransform: "uppercase",
        background: "linear-gradient(90deg, #b53cff ,#DF00BC )",
        WebkitBackgroundClip: "text", // Clip the gradient to text
        WebkitTextFillColor: "transparent", // Make text transparent to show gradient
      },
      
    
     mainTitle: {
       fontSize: "60px",
       fontWeight: "bold",
       margin: "0 0 10px 0",
       color: "#DF00BC",
     },
     subText: {
       fontSize: "30px",
       margin: "0 0 20px 0",
       color: "#ddd",
     },
     button: {
       padding: "20px 30px",
       fontSize: "40px",
       background: "linear-gradient(90deg, #6af1e8, #DF00BC)",
       color: "#fff",
       border: "none",
       borderRadius: "50px",
       fontSize: "22px",
       cursor: "pointer",
     },
     heroImageContainer: {
       position: "absolute",
       top: "150px",
       right: "12%",
       width: "40%",
       transform: "scale(1.7)",
     },
     heroImage: {
       width: "100%",
       borderRadius: "10px",
     },
   };
   
   export default App;

  