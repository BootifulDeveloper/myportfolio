import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Rahul Chauhan",
    location: "Noida, Uttar Pradesh",
    tagline: "Java Software Engineer building scalable backend systems",
    email: "rahulchauhan.12071998@gmail.com",
    availability: "Open to backend engineering opportunities",
    brand:
      "I am a Java Software Engineer focused on resilient backend systems, clean APIs, and production-ready services. I enjoy turning business problems into maintainable Spring Boot applications, event-driven workflows, optimized database interactions, and observable systems that teams can confidently operate.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
