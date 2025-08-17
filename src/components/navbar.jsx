import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Navbar = ({ activeSection }) => {
  const navRef = useRef(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // scrolling down → hide navbar
        gsap.to(navRef.current, { y: -100, duration: 0.3, ease: "power1.out" });
      } else {
        // scrolling up → show navbar
        gsap.to(navRef.current, { y: 0, duration: 0.3, ease: "power1.out" });
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="name">Bhuvan.dev</div>

      <div className="toggle">
        <img src="./svg/hamburger.svg" alt="" />
      </div>

      <div className="navItem">
        <ul className="navList">
          <li>
            <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
          </li>
          <li>
            <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
          </li>
          <li>
            <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
          </li>
          <li>
            <a href="#project" className={activeSection === 'project' ? 'active' : ''}>Project</a>
          </li>
          <li>
            <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
