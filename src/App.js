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
      "I am a Java Software Engineer with a passion for building scalable and efficient solutions. With a strong background in backend development, I focus on delivering high-quality results and optimizing system performance. I enjoy collaborating with teams and continuously seek opportunities for learning and growth in dynamic environments.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
