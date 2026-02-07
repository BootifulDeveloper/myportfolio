import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Rahul Chauhan",
    location: "Noida, Uttar Pradesh",
    tagline: "Work Profession: Java Software Engineer",
    email: "rahulchauhan.12071998@gmail.com",
    availability: "Open for work/Problem Solving",
    brand:
      "Java Backend Engineer with ~4 years of experience designing and maintaining Spring Boot microservices in production environments. Strong hands-on experience in building secure, stateless REST APIs, integrating payment gateways, and implementing webhook-driven asynchronous workflows. Experienced with JWT-based security, MySQL performance optimization, and Kubernetes-based deployments. Comfortable working in Agile teams with a focus on reliability, scalability, and clean backend architecture.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
