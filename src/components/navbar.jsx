import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Navbar = ({ activeSection }) => {
  const navRef = useRef(null);
  const navItemRef = useRef(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        gsap.to(navRef.current, { y: -100, duration: 0.3, ease: "power1.out" });
      } else {
        gsap.to(navRef.current, { y: 0, duration: 0.3, ease: "power1.out" });
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(navItemRef.current, {
        right: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(navItemRef.current, {
        right: "-100%",
        duration: 0.5,
        ease: "power2.in",
      });
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full h-16 flex items-center justify-between px-5 md:px-[10vw] 
                 bg-white/80 backdrop-blur-md shadow-md z-50"
    >
      <div className="text-xl font-bold">Bhuvan.dev</div>

      {/* Hamburger / Cross Toggle */}
      <button
        className="md:hidden z-50 relative w-8 h-8 flex flex-col justify-between items-center"
        onClick={toggleMenu}
      >
        <span
          className={`block h-0.5 w-8 bg-gray-800 rounded transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-3" : ""
            }`}
        ></span>
        <span
          className={`block h-0.5 w-8 bg-gray-800 rounded transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""
            }`}
        ></span>
        <span
          className={`block h-0.5 w-8 bg-gray-800 rounded transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-3" : ""
            }`}
        ></span>
      </button>

      {/* Navigation Items */}
      <div
        ref={navItemRef}
        className="fixed md:static top-0 right-[-100%] w-[70vw] md:w-auto h-fit bg-white md:bg-transparent
                   pt-20 md:pt-0 px-5 md:px-0 shadow-lg md:shadow-none transition-all duration-300 
                   ease-in-out rounded-lg"
      >
        <ul className="flex flex-col md:flex-row items-center justify-center !my-28 gap-6 md:gap-8">
          {["home", "about", "skills", "project", "contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`text-lg hover:text-orange-500 transition-colors ${activeSection === section
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-gray-800"
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
