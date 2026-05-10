import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

import SocialIcons from "../../components/SocialIcons";

const highlights = [
  { value: "Java", label: "Backend engineering" },
  { value: "Spring", label: "Microservices + APIs" },
  { value: "Kafka", label: "Event-driven systems" },
];

const Landing = ({ name, tagline }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const revealFromTop = {
    initial: { y: "-10vw", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "-10vw", opacity: 0 },
  };

  const revealFromBottom = {
    initial: { y: "10vw", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "10vw", opacity: 0 },
  };

  return (
    <section className="landing">
      <div className="heroGlow" aria-hidden="true" />
      <div className="textContainer">
        <motion.p
          className="eyebrow"
          ref={ref}
          {...revealFromTop}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          Available for backend engineering roles
        </motion.p>
        <motion.h1
          className="name"
          ref={ref}
          {...revealFromTop}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.05 }}
        >
          {name}
        </motion.h1>
        <motion.p
          className="description"
          ref={ref}
          {...revealFromBottom}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
        >
          {tagline}
        </motion.p>
        <motion.p
          className="heroSummary"
          ref={ref}
          {...revealFromBottom}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.16 }}
        >
          I build reliable Java services with Spring Boot, Kafka, MySQL, caching, batch processing, and production
          monitoring in mind.
        </motion.p>
        <motion.div
          className="ctaButtons"
          ref={ref}
          {...revealFromBottom}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.22 }}
        >
          <Link className="btn" to="/portfolio">
            View Portfolio
          </Link>
          <Link className="btn btn-secondary" to="/contact">
            Let’s Talk
          </Link>
        </motion.div>
        <motion.div
          className="heroHighlights"
          ref={ref}
          {...revealFromBottom}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.28 }}
        >
          {highlights.map((item) => (
            <div className="highlightCard" key={item.value}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
      <SocialIcons />
    </section>
  );
};

export default Landing;
