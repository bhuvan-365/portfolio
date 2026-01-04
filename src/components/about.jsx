import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lens } from "./magicui/lens";
import Seo from "./seo";

gsap.registerPlugin(ScrollTrigger);

// Responsive Lens wrapper
const ResponsiveLensWrapper = ({ children, ...props }) => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 640); // >=640px shows Lens
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isDesktop) return <>{children}</>; // render content without Lens on mobile
  return <Lens {...props}>{children}</Lens>;
};

const About = () => {
  const headingRef = useRef(null);

  useLayoutEffect(() => {
    const heading = headingRef.current;
    const text = heading.textContent;
    heading.textContent = ""; // clear heading

    let typingInterval;

    ScrollTrigger.create({
      trigger: heading,
      start: "top 80%", // trigger when heading enters viewport
      onEnter: () => {
        let index = 0;
        if (typingInterval) clearInterval(typingInterval);
        heading.textContent = "";

        typingInterval = setInterval(() => {
          if (index < text.length) {
            heading.textContent += text[index];
            index++;
          } else {
            clearInterval(typingInterval);
          }
        }, 100);
      },
      onLeaveBack: () => {
        if (typingInterval) clearInterval(typingInterval);
        heading.textContent = "";
      },
    });

    return () => {
      if (typingInterval) clearInterval(typingInterval);
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <>
      <Seo
        title="About Bhuvan Bhattarai | Web Developer in Nepal"
        description="Learn more about Bhuvan Bhattarai — skills, experience, and journey as a web developer in Nepal. One of the top portfolio websites in Nepal."
        keywords="Bhuvan Bhattarai, Bhuvan, Bhattarai Bhuvan, About Bhuvan Bhattarai, Web Developer Nepal, Portfolio Website"
      />
      <section className="about !h-fit">
        <div className="boxAbout !py-11">
          <div className="dFlex2">
            <h1 ref={headingRef} className="!font-semibold !text-lg">
              About Me
            </h1>
            <div className="line2"></div>
          </div>

          <div className="aboutContain">
            <div className="left">
              <div className="leftbox">
                <div className="gallery">
                  <img src="./image/sir.jpg" alt="Bhuvan Bhattarai professional portrait" />
                  <img src="./image/pp.jpg" alt="Bhuvan Bhattarai casual photo" />
                </div>
              </div>
            </div>

            <ResponsiveLensWrapper>
              <div className="rightbox !w-full">
                <div className="top-section">
                  <div className="box">
                    <h3 className="!text-2xl !font-semibold !py-2">
                      <img src="./svg/me.svg" alt="Bhuvan Bhattarai illustration" />
                      Who Am I
                    </h3>
                    <p className="abtp1 !text-[1rem]">
                      I’m Bhuvan Bhattarai, a passionate frontend developer from Kathmandu,
                      Nepal, with over 6 months of hands-on experience building responsive and
                      user-friendly web interfaces. I specialize in modern technologies like
                      React.js, Redux, Zustand, Tailwind CSS, Bootstrap, and TypeScript to create
                      clean, interactive, and high-performance applications.
                      <br />
                      <br />
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Currently, I’m expanding into the
                      MERN stack with working knowledge of Node.js and Express.js, while serving
                      as a Website Administrative Lead, managing website operations and delivering
                      scalable, intuitive digital solutions aligned with user and business goals.
                    </p>

                  </div>
                </div>

                <div className="personal-info">
                  <h3 className="!text-2xl !font-semibold">
                    <img src="./svg/personal.svg" alt="Personal info icon" />
                    Personal Info
                  </h3>
                  <div className="info-grid">
                    <div>
                      <img src="./svg/name.svg" alt="Name icon" />
                      <strong>Name:</strong> Bhuvan Bhattarai
                    </div>
                    <div>
                      <img src="./svg/location.svg" alt="Location icon" />
                      <strong>Address:</strong> Kathmandu, Nepal
                    </div>
                    <div>
                      <img src="./svg/email.svg" alt="Email icon" />
                      <strong>Email:</strong> bhuvanbhattarai07@gmail.com
                    </div>
                    <div>
                      <img src="./svg/education.svg" alt="Education icon" />
                      <strong>Education:</strong>{" "}
                      <span className="edu">Bachelor of Computer Application</span>
                    </div>
                  </div>
                </div>
              </div>
            </ResponsiveLensWrapper>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
