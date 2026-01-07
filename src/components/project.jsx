import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Seo from './seo';

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const headingRef = useRef(null);
  const typingTween = useRef(null);

  useLayoutEffect(() => {
    const heading = headingRef.current;
    const fullText = heading.textContent;

    ScrollTrigger.create({
      trigger: heading,
      start: "top 80%",
      onEnter: () => typeWriter(),
      onEnterBack: () => typeWriter(),
    });

    function typeWriter() {
      if (typingTween.current) typingTween.current.kill();
      heading.textContent = '';
      let i = 0;

      typingTween.current = gsap.to({}, {
        duration: fullText.length * 0.1,
        onUpdate: () => {
          const charsToShow = Math.floor(i);
          heading.textContent = fullText.substring(0, charsToShow);
        },
        ease: "none",
        onStart: () => gsap.ticker.add(update),
        onComplete: () => gsap.ticker.remove(update),
      });

      function update() {
        if (i < fullText.length) i += 1;
      }
    }
  }, []);

  return (
    <>
      <Seo
        title="Projects by Bhuvan Bhattarai | Portfolio Website Nepal"
        description="Explore the web development projects by Bhuvan Bhattarai. Showcasing one of the best portfolio websites in Nepal."
        keywords="Bhuvan Bhattarai, Bhuvan, Bhattarai Bhuvan, Best Portfolio in Nepal, Portfolio Projects, Web Developer Nepal"
      />

      <section className="project-container !h-fit">
        <h1 ref={headingRef} className='!text-4xl !font-semibold'>
          My Latest Project
        </h1>
        <div className="project project2">
          <div className="text">
            <h2>Great Taste – Luxury Restaurant (Client Project)</h2>
            <p>A high-end, luxury restaurant website developed as a real-world freelance project for a client. The website reflects a premium brand identity through elegant visuals, smooth animations, and a refined user experience. It features an immersive layout, interactive sections, and seamless navigation designed to showcase the restaurant’s atmosphere, menu, and overall dining experience.  <br /><strong>Tool Used:</strong> React.js, GSAP, Lenis, Modern CSS & JavaScript</p>
            <div className="project-bottom">
              <div className="repo button">
                <a href="#" onClick={(e) => { e.preventDefault(); alert('This is a Client Project. The repo is private due to confidentiality concerns. Please check out my other projects!'); }}>
                  <img src="./svg/github.svg" alt="GitHub repository for Great Taste – Luxury Restaurant by Bhuvan Bhattarai" />
                  <div> Git Repo </div>
                </a>
              </div>

              <div className="repo button">
                <a href="https://dur-bar.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <img src="./svg/live.svg" alt="Live demo of Doozie Task Manager project by Bhuvan Bhattarai" />
                  <div> Live </div>
                </a>
              </div>
            </div>
          </div>
          <div className="image !min-w-sm">
            <img src="./newProject/durbar.png" alt="Great Taste – Luxury Restaurant Website (Freelance Client Project) by Bhuvan Bhattarai" />
          </div>
        </div>

        <div className="project project3">
          <div className="text">
            <h2>EcomX – Modern E-Commerce Web Application</h2>
            <p>
              A modern e-commerce web application built to deliver a smooth and engaging shopping experience. The project features a clean, high-end UI with fluid animations, interactive product sections, and intuitive navigation designed to enhance user engagement and usability. Smooth scrolling and motion effects create an app-like feel, while efficient state management ensures responsive interactions across the platform.  <br />
              <strong>Tools Used: </strong> TypeScript, Next.js, GSAP, Lenis, Zustand, Embla Carousel, CSS</p>
            <div className="project-bottom">
              <div className="repo button">
                <a href="https://github.com/bhuvan-365/ecommerce-site" target="_blank" rel="noopener noreferrer">
                  <img src="./svg/github.svg" alt="GitHub repository for EcomX – Modern E-Commerce Web Application project by Bhuvan Bhattarai" />
                  <div> Git Repo </div>
                </a>
              </div>

              <div className="repo button">
                <a href="https://ecommerce-site-murex-tau.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <img src="./svg/live.svg" alt="Live demo of EcomX – Modern E-Commerce Web Application project by Bhuvan Bhattarai" />
                  <div> Live </div>
                </a>
              </div>
            </div>
          </div>
          <div className="image !min-w-sm">
            <img src="./newProject/ecom.png" alt="EcomX – Modern E-Commerce Web Application by Bhuvan Bhattarai" />
          </div>
        </div>

        <div className="project project4">
          <div className="text">
            <h2>K72 – Animated Website Replica (Inspiration Project)</h2>
            <p>An animation-focused website clone inspired by K72, built to study and replicate high-end motion design and interactive layouts. The project emphasizes smooth transitions, scroll-based animations, and precise visual timing to recreate a premium browsing experience. It demonstrates my ability to reverse-engineer complex UI interactions, implement advanced animations, and build visually rich interfaces using modern frontend tools.
              <br /><strong>Tools Used:</strong> React.js, GSAP, Lenis, Modern CSS & JavaScript
            </p>
            <div className="project-bottom">
              <div className="repo button">
                <a href="https://github.com/bhuvan-365/K72.ca" target="_blank" rel="noopener noreferrer">
                  <img src="./svg/github.svg" alt="GitHub repository for Go Explorer project by Bhuvan Bhattarai" />
                  <div> Git Repo </div>
                </a>
              </div>

              <div className="repo button">
                <a href="https://k72-ca-beryl.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <img src="./svg/live.svg" alt="Live demo of K72 project by Bhuvan Bhattarai" />
                  <div> Live </div>
                </a>
              </div>
            </div>
          </div>
          <div className="image !min-w-sm">
            <img src="./newProject/k72.png" alt="K72 by Bhuvan Bhattarai" />
          </div>
        </div>
        <div className="project project1">
          <div className="text">
            <h2>Trekking Hero – Animated Hero Section for Travel Websites</h2>
            <p>A visually engaging hero section designed specifically for trekking and adventure travel websites. The project focuses on impactful first impressions through bold typography, immersive visuals, and smooth motion effects. Carefully crafted animations enhance user attention while maintaining performance and responsiveness across devices.
              <br /><strong>Tools Used:</strong> Next.js, GSAP, Modern JavaScript
            </p>
            <div className="project-bottom">
              <div className="repo button">
                <a href="https://github.com/bhuvan-365/hero-trekking2" target="_blank" rel="noopener noreferrer">
                  <img src="./svg/github.svg" alt="GitHub repository for Trekking Hero – Animated Hero Section for Travel Websites by Bhuvan Bhattarai" />
                  <div> Git Repo </div>
                </a>
              </div>

              <div className="repo button">
                <a href="https://hero-trekking2.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <img src="./svg/live.svg" alt="Live demo of Trekking Hero – Animated Hero Section for Travel Websites by Bhuvan Bhattarai" />
                  <div> Live </div>
                </a>
              </div>
            </div>
          </div>
          <div className="image !min-w-sm">
            <img src="./newProject/herosection.png" alt="Spotify Clone project by Bhuvan Bhattarai portfolio Nepal" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Project;
