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

        <div className="project project1">
          <div className="text">
            <h2>Spotify Clone</h2>
            <p>A functional Spotify clone built with HTML, CSS, and JavaScript. This project features core music player
              controls like play, pause, next/previous, and volume adjustment. It dynamically fetches songs, playlists, and
              albums from local storage and displays them in a clean, interactive library UI. This project showcases my
              skills in media handling, responsive UI design, and building real-world web app experiences.</p>
            <div className="project-bottom">
              <div className="repo button">
                <a href="https://github.com/bhuvan-365/Spotify-clone" target="_blank" rel="noopener noreferrer">
                  <img src="./svg/github.svg" alt="GitHub repository for Spotify Clone by Bhuvan Bhattarai" />
                  <div> Git Repo </div>
                </a>
              </div>

              <div className="repo button">
                <a href="https://www.linkedin.com/posts/bhuvan-bhattarai-a00413322_webdevelopment-javascript-frontend-activity-7347248845321359362-86Pa?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFGTOuAB1X11hIarLglrI1sVM1nT3ZaJGNk" target="_blank" rel="noopener noreferrer">
                  <img src="./svg/live.svg" alt="Live demo of Spotify Clone project by Bhuvan Bhattarai" />
                  <div> Live </div>
                </a>
              </div>
            </div>
          </div>
          <div className="image !min-w-sm">
            <img src="./projectImg/spotify.png" alt="Spotify Clone project by Bhuvan Bhattarai portfolio Nepal" />
          </div>
        </div>

        <div className="project project2">
          <div className="text">
            <h2>Doozie – Simple Task Manager App (React.js)</h2>
            <p>Doozie is a lightweight and intuitive task management app built with React.js. Users can add and organize
              tasks, and once completed or deleted, tasks are stored in a history section using local storage for future
              reference.</p>
            <div className="project-bottom">
              <div className="repo button">
                <a href="https://github.com/bhuvan-365/Doozie-a-taskflow-web-app-" target="_blank" rel="noopener noreferrer">
                  <img src="./svg/github.svg" alt="GitHub repository for Doozie Task Manager by Bhuvan Bhattarai" />
                  <div> Git Repo </div>
                </a>
              </div>

              <div className="repo button">
                <a href="https://doozie-365.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <img src="./svg/live.svg" alt="Live demo of Doozie Task Manager project by Bhuvan Bhattarai" />
                  <div> Live </div>
                </a>
              </div>
            </div>
          </div>
          <div className="image !min-w-sm">
            <img src="./projectImg/react.png" alt="Doozie React task manager project by Bhuvan Bhattarai" />
          </div>
        </div>

        <div className="project project3">
          <div className="text">
            <h2>ShopVerse – Multi-Template eCommerce UI (Bootstrap)</h2>
            <p>ShopVerse is a modern and responsive eCommerce website demo built using Bootstrap. It features clean layouts
              for product overviews, homepage banners, category sections, and a polished navigation system. With multiple
              page templates and a focus on design consistency.</p>
            <div className="project-bottom">
              <div className="repo button">
                <a href="https://github.com/bhuvan-365/bootstrap-doc" target="_blank" rel="noopener noreferrer">
                  <img src="./svg/github.svg" alt="GitHub repository for ShopVerse eCommerce project by Bhuvan Bhattarai" />
                  <div> Git Repo </div>
                </a>
              </div>

              <div className="repo button">
                <a href="https://ecomwithbootstrap.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <img src="./svg/live.svg" alt="Live demo of ShopVerse eCommerce project by Bhuvan Bhattarai" />
                  <div> Live </div>
                </a>
              </div>
            </div>
          </div>
          <div className="image !min-w-sm">
            <img src="./projectImg/bootstrapEcom.png" alt="ShopVerse eCommerce Bootstrap project by Bhuvan Bhattarai" />
          </div>
        </div>

        <div className="project project4">
          <div className="text">
            <h2>Go Explorer – Mountain Discovery UI</h2>
            <p>Go Explorer is a visually rich web project focused on showcasing breathtaking mountain images and their
              details. Built with a strong emphasis on UI design and smooth animations, it offers a simple yet engaging
              experience for users to explore different mountains. This project highlights my skills in layout design,
              animation effects, and creating immersive interfaces with clean, responsive visuals.</p>
            <div className="project-bottom">
              <div className="repo button">
                <a href="https://github.com/bhuvan-365/mountain-website-365" target="_blank" rel="noopener noreferrer">
                  <img src="./svg/github.svg" alt="GitHub repository for Go Explorer project by Bhuvan Bhattarai" />
                  <div> Git Repo </div>
                </a>
              </div>

              <div className="repo button">
                <a href="https://mountains-365.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <img src="./svg/live.svg" alt="Live demo of Go Explorer mountain discovery project by Bhuvan Bhattarai" />
                  <div> Live </div>
                </a>
              </div>
            </div>
          </div>
          <div className="image !min-w-sm">
            <img src="./projectImg/mountains.png" alt="Go Explorer mountain discovery UI by Bhuvan Bhattarai" />
          </div>
        </div>  
      </section>
    </>
  )
}

export default Project;
