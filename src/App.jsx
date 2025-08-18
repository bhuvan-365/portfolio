import React, { useState, useEffect } from "react";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Project from "./components/project";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import LenisScroll from "./components/LenisScroll";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "project", "contact"];
      const scrollPosition = window.scrollY + 100; // Adding some offset

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <LenisScroll>
        <Navbar activeSection={activeSection} />

        <main>

          <section id="home">
            <Home />
          </section>


          <section id="about">
            <About />
          </section>
          <div className="flex flex-col justify-center items-center gap-10">
            <section id="skills">
              <Skills />
            </section>
            <section id="project">
              <Project />
            </section>
          </div>
          <section id="contact">
            <Contact />
          </section>
        </main>

        <Footer />
      </LenisScroll>
    </>
  );
}

export default App;
