import aboutMeImg from "../images/bgmehd.png";
import { motion } from "framer-motion";
import SocialIcons from "../components/SocialIcons";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import resume from "../pages/about/Rahul_Chauhan_Java_Developer_Resume.pdf";

const coreSkills = [
  "Java",
  "Spring Boot",
  "Microservices",
  "Kafka",
  "Spring Batch",
  "MySQL",
  "Caching",
  "ELK",
  "REST APIs",
];

const focusAreas = [
  {
    title: "Backend APIs",
    description: "Designing maintainable Java and Spring Boot services with clear contracts and reliable behavior.",
  },
  {
    title: "Data + Messaging",
    description: "Building batch jobs, Kafka processing flows, caching layers, and MySQL-backed features.",
  },
  {
    title: "Operations Mindset",
    description: "Creating alerts, Kibana dashboards, and practical monitoring paths for faster debugging.",
  },
];

const AboutMe = ({ name, email, location, availability, brand }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Rahul_Chauhan_Java_Developer_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => setDownloading(false), 800);
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
          <img src={aboutMeImg} alt={name} loading="lazy" className="responsiveImage" />
        </motion.div>
        <motion.div
          className="personalInfo col-12 col-lg-8"
          ref={ref}
          initial={{ x: "5vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "5vw", opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="contentContainer">
            <p className="sectionKicker">Backend developer profile</p>
            <h4>Glad you're here!</h4>
            <h5>Java Developer driven to deliver impactful software solutions.</h5>
            <div className="contentDescription">
              <p>{brand}</p>
            </div>
            <div className="focusGrid" aria-label="Primary focus areas">
              {focusAreas.map((area) => (
                <article className="focusCard" key={area.title}>
                  <h6>{area.title}</h6>
                  <p>{area.description}</p>
                </article>
              ))}
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
            <div className="profileLinks">
              <a
                className="gfgProfile"
                href="https://www.geeksforgeeks.org/user/rahul_chauhan_1998/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GeeksForGeeks Profile
              </a>
              <a
                className="gfgProfile"
                href="https://www.linkedin.com/in/rahul-chauhan-766528219"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn Profile
              </a>
            </div>
            <div className="skillsContainer">
              <h5>Core Skills</h5>
              <div className="skillPills">
                {coreSkills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
            <div className="buttonContainer">
              <button className="btn downloadCV" onClick={handleDownload} disabled={downloading}>
                {downloading ? "Preparing resume..." : "Download My Resume"}
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
