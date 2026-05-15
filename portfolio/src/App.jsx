import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Roadmap from "./sections/Roadmap";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  return (
    <div className="bg-black">
      <ScrollProgress />
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Roadmap />
      <Projects />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;