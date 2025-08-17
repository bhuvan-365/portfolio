import React, { useLayoutEffect, useRef, useState } from "react";
import "../App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Seo from "./seo";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const homeRef = useRef(null);
  const mediaRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const typingContainerRef = useRef(null);

  const [animationComplete, setAnimationComplete] = useState(false);
  const typingInterval = useRef(null);
  const fullText = "Front End Developer";

  useLayoutEffect(() => {
    return () => {
      if (typingInterval.current) clearInterval(typingInterval.current);
    };
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(typingContainerRef.current, { opacity: 0 });

      ScrollTrigger.create({
        trigger: homeRef.current,
        start: "top 80%",
        onEnter: () => startTyping(),
        onEnterBack: () => startTyping(),
      });

      ScrollTrigger.create({
        trigger: homeRef.current,
        start: "top 80%",
        onEnter: () =>
          gsap.fromTo(
            mediaRef.current,
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
          ),
        onEnterBack: () =>
          gsap.fromTo(
            mediaRef.current,
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
          ),
        onLeave: () => gsap.set(mediaRef.current, { x: -100, opacity: 0 }),
        onLeaveBack: () => gsap.set(mediaRef.current, { x: 100, opacity: 0 }),
      });

      ScrollTrigger.create({
        trigger: homeRef.current,
        start: "top 80%",
        onEnter: () =>
          gsap.fromTo(
            imageRef.current,
            { x: 100, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
          ),
        onEnterBack: () =>
          gsap.fromTo(
            imageRef.current,
            { x: 100, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
          ),
        onLeave: () => gsap.set(imageRef.current, { x: 100, opacity: 0 }),
        onLeaveBack: () => gsap.set(imageRef.current, { x: -100, opacity: 0 }),
      });

      ScrollTrigger.create({
        trigger: homeRef.current,
        start: "top 80%",
        onEnter: () =>
          gsap.fromTo(
            textRef.current,
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
          ),
        onEnterBack: () =>
          gsap.fromTo(
            textRef.current,
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
          ),
        onLeave: () => gsap.set(textRef.current, { x: -50, opacity: 0 }),
        onLeaveBack: () => gsap.set(textRef.current, { x: 50, opacity: 0 }),
      });
    }, homeRef);

    return () => ctx.revert();
  }, []);

  const startTyping = () => {
    if (typingInterval.current) clearInterval(typingInterval.current);
    let index = 0;
    setAnimationComplete(false);
    typingContainerRef.current.textContent = "";
    gsap.to(typingContainerRef.current, { opacity: 1, duration: 0.3 });

    typingInterval.current = setInterval(() => {
      if (index < fullText.length) {
        typingContainerRef.current.textContent += fullText[index];
        index++;
      } else {
        clearInterval(typingInterval.current);
        setAnimationComplete(true);
      }
    }, 100);
  };

  return (
    <>
      <Seo 
        title="Bhuvan Bhattarai | Best Portfolio in Nepal"
        description="Official portfolio of Bhuvan Bhattarai — showcasing projects, skills, and achievements. Recognized as one of the best portfolio websites in Nepal."
        keywords="Bhuvan Bhattarai, Bhuvan, Bhattarai Bhuvan, Best Portfolio in Nepal, Portfolio Website"
      />

      <div className="homeContain relative" ref={homeRef}>
        {/* Social Media Links */}
        <div className="media" ref={mediaRef}>
          <a href="https://x.com/bhuvan_365" target="_blank" rel="noopener noreferrer">
            <img className="!w-8" src="/svg/x.svg" alt="Bhuvan Bhattarai Twitter/X profile" />
          </a>
          <a href="https://www.linkedin.com/in/bhuvan-bhattarai-a00413322" target="_blank" rel="noopener noreferrer">
            <img className="!w-8" src="/svg/linkedIn.svg" alt="Bhuvan Bhattarai LinkedIn profile" />
          </a>
          <a href="https://github.com/bhuvan-365" target="_blank" rel="noopener noreferrer">
            <img className="!w-8" src="/svg/github.svg" alt="Bhuvan Bhattarai GitHub profile" />
          </a>
        </div>

        {/* Text Section */}
        <div className="homeText" ref={textRef}>
          <h1 className="text-3xl font-bold flex justify-center items-center gap-2.5">
            <div>Hi, I'm Bhuvan</div>
            <img src="/svg/wave.svg" alt="Bhuvan Bhattarai waving hand" />
          </h1>
          <div className="dFlex">
            <div className="line1"></div>
            <p className="p1 text-xl font-medium">
              <span ref={typingContainerRef}></span>
              {!animationComplete && <span className="blinking-cursor"></span>}
            </p>
          </div>
          <p className="text-lg">
            I'm a frontend developer based in Kathmandu, Nepal, passionate about crafting
            responsive and user-friendly web interfaces. I specialize in HTML, CSS,
            JavaScript, React.js, Redux, Tailwind CSS, and Bootstrap.
          </p>
          <div className="btns">
            <a href="/resume/Bhuvan_Bhattarai_resume00.pdf" className="btn !text-xs !py-3 !px-4" download>
              Download CV
            </a>
            <a href="#contact">
              <button className="btn !text-xs !py-3 !px-4">Contact Me</button>
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="homeImage relative" ref={imageRef}>
          <img className="profileImg relative z-10" src="/projectImg/2.jpg" alt="Bhuvan Bhattarai front-end developer profile" />
        </div>
      </div>
    </>
  );
};

export default Home;
