import About from "./AboutMe";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Footer from "./Footer";
import Header from "./Header";
import Presentation from "./Presentation";
import Projects from "./Projects";
import Skills from "./Skills";

const App = () => {
  return (
    <>
      <Header />
      <Presentation />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
