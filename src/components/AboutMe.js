import aboutMeImg from "../images/bgmehd.png";
import { motion } from "framer-motion";
import SocialIcons from "../components/SocialIcons";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import resume from "../pages/about/Rahul_Chauhan_Java_Developer_Resume.pdf";

const AboutMe = ({ name, email, location, availability, brand }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    setDownloading(false);
  }, [downloading]);

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Rahul_Chauhan_Java_Developer_Resume.pdf";
    link.onload = () => {
      link.remove();
      setDownloading(false);
    };
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="aboutContainer container">
      <div className="row">
        <motion.div
          className="personalImage col-12 col-lg-4"
          ref={ref}
          initial={{ x: "-5vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "-5vw", opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <img
            src={aboutMeImg}
            alt={name}
            loading="lazy" // Enable lazy loading for performance
            className="responsiveImage" // Add class for responsive image styles
          />
        </motion.div>
        <motion.div
          className="personalInfo col-12 col-lg-8"
          ref={ref}
          initial={{ x: "5vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "5vw", opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="contentContainer">
            <h4>Glad you're here!</h4>
            <h5>Java Developer : Driven to deliver impactful software solutions.</h5>
            <div className="contentDescription">
              <p>{brand}</p>
            </div>
            <div className="infoContainer">
              <div className="row">
                <div className="col-12 col-md-6 info">
                  <span>Name:</span>
                  <p>{name}</p>
                </div>
                <div className="col-12 col-md-6 info">
                  <span>Email:</span>
                  <p>
                    <a href={`mailto:${email}`}>{email}</a>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 info">
                  <span>Location:</span>
                  <p>{location}</p>
                </div>
                <div className="col-12 col-md-6 info">
                  <span>Availability:</span>
                  <p>{availability}</p>
                </div>
              </div>
            </div>
            <a 
              className="gfgProfile" 
              href="https://www.geeksforgeeks.org/user/rahul_chauhan_1998/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              GeeksForGeeks Profile
            </a>
            <div className="skillsContainer">
              <h5>Skills:</h5>
              <table className="skillsTable">
                <thead>
                  <tr>
                    <th>Skill</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Java (SE/EE)</td>
                    <td>OOP, collections, and multithreading for backend services.</td>
                  </tr>
                  <tr>
                    <td>Spring Boot</td>
                    <td>Microservices, REST APIs, and clean architecture patterns.</td>
                  </tr>
                  <tr>
                    <td>Spring MVC & Security</td>
                    <td>JWT authentication, RBAC, and secure API design.</td>
                  </tr>
                  <tr>
                    <td>Hibernate & JPA</td>
                    <td>Data modeling, ORM, and repository patterns.</td>
                  </tr>
                  <tr>
                    <td>Databases</td>
                    <td>MySQL performance tuning and MongoDB integrations.</td>
                  </tr>
                  <tr>
                    <td>Payment Gateways</td>
                    <td>Razorpay & CCAvenue integrations with webhook handling.</td>
                  </tr>
                  <tr>
                    <td>WhatsApp Cloud API</td>
                    <td>Delivery/read-status tracking and messaging workflows.</td>
                  </tr>
                  <tr>
                    <td>DevOps & Testing</td>
                    <td>Kubernetes deployments, JUnit testing, and Git workflows.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="buttonContainer">
              <button className="btn downloadCV" onClick={handleDownload} disabled={downloading}>
                {downloading ? "Downloading..." : "Download My Resume"}
              </button>{" "}
              <SocialIcons />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
