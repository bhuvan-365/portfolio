import React, { useRef, useLayoutEffect } from "react";
import { SmoothCursor } from "./magicui/smooth-cursor";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    const el = footerRef.current;

    gsap.fromTo(
      el,
      { y: 100, opacity: 0 }, // start below
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%", // when footer is near viewport bottom
          toggleActions: "play none none reverse", // play animation on enter, reverse when scrolling back
        },
      }
    );
  }, []);

  return (
    <>
      <SmoothCursor />
      <footer className="footer">
        <div className="foot-container" ref={footerRef}>
          <div className="footer-container">
            <div className="footer-left">
              <div className="logo">
                <h2 className="!text-3xl !font-semibold">Bhuvan Bhattarai</h2>
              </div>
              <p className="!text-[1rem]">
                Web developer passionate about crafting clean, responsive, and interactive websites. Always learning, always
                building. I'm happy to connect — feel free to reach out!
              </p>
              <div className="social-icons">
                <a className="iconBox" href="https://github.com/bhuvan-365" target="_blank" rel="noopener noreferrer">
                  <img src="./svg/github.svg" alt="Bhuvan Bhattarai GitHub profile" />
                </a>
                <a className="iconBox" href="https://www.linkedin.com/in/bhuvan-bhattarai-a00413322" target="_blank" rel="noopener noreferrer">
                  <img src="./svg/linkedIn.svg" alt="Bhuvan Bhattarai LinkedIn profile" />
                </a>
                <a className="iconBox" href="mailto:bhuvanbhattarai07@gmail.com">
                  <img src="./svg/email.svg" alt="Email Bhuvan Bhattarai" />
                </a>
                <a className="iconBox" href="https://x.com/bhuvan_365" target="_blank" rel="noopener noreferrer">
                  <img src="./svg/x.svg" alt="Bhuvan Bhattarai X / Twitter profile" />
                </a>
              </div>
              <p className="copyright">© 2025 Bhuvan Bhattarai. All rights reserved.</p>
            </div>

            <div className="footer-right">
              <div className="footer-column">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#project">Project</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>Contact Info</h4>
                <ul>
                  <li>Kathmandu, Nepal</li>
                  <li>+123-456-789</li>
                  <li>bhuvanbhattarai07@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>

          <hr />

          <div className="footer-bottom">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies Settings</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
