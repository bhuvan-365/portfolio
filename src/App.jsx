import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Project from "./components/project";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import LenisScroll from "./components/LenisScroll";
import Zustand from "./pages/zustand"; // ✅ your Zustand guide page

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "project", "contact"];
      const scrollPosition = window.scrollY + 100;

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
    <Router>
      <Routes>
        {/*  Route for Zustand Docs page */}
        <Route path="/doc" element={<Zustand />} />

        {/*  Main portfolio page as default route */}
        <Route
          path="/"
          element={
            <LenisScroll>
              <Navbar activeSection={activeSection} />

              <section id="home" className="overflow-hidden">
                <Home />
              </section>

              <section id="about">
                <About />
              </section>

              <section id="skills">
                <Skills />
              </section>

              <section id="project">
                <Project />
              </section>

              <section id="contact">
                <Contact />
              </section>

              <Footer />
            </LenisScroll>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
