import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Seo from "./seo";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useLayoutEffect(() => {
    const leftAnim = gsap.from(leftRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: leftRef.current,
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });

    const rightAnim = gsap.from(rightRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: rightRef.current,
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });

    return () => {
      leftAnim.kill();
      rightAnim.kill();
    };
  }, []);

  return (
    <>
      <Seo 
        title="Contact Bhuvan Bhattarai | Web Developer Nepal"
        description="Get in touch with Bhuvan Bhattarai — web developer from Nepal. Reach out for collaborations, projects, or portfolio inquiries."
        keywords="Bhuvan Bhattarai, Bhuvan, Bhattarai Bhuvan, Contact Bhuvan Bhattarai, Best Portfolio in Nepal, Web Developer Nepal"
      />

      <section>
        <div className="container">
          <div className="top-buttons">
            <button className="contact-btn">
              <img src="./svg/contact.svg" alt="Contact Bhuvan Bhattarai" /> Contact Me
            </button>
          </div>

          <div className="main" style={{ display: "flex", gap: "2rem" }}>
            {/* Left content */}
            <div className="social-links" ref={leftRef} style={{ flex: 1 }}>
              <a
                href="https://github.com/bhuvan-365"
                className="card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="./svg/github.svg" alt="Bhuvan Bhattarai GitHub profile" />
                <div>
                  <h3>GitHub</h3>
                  <p>Explore my code & projects</p>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/bhuvan-bhattarai-a00413322"
                target="_blank"
                rel="noopener noreferrer"
                className="card"
              >
                <img src="./svg/linkedIn.svg" alt="Bhuvan Bhattarai LinkedIn profile" />
                <div>
                  <h3>LinkedIn</h3>
                  <p>Let's connect professionally</p>
                </div>
              </a>
              <a href="#" className="card">
                <img src="./svg/email.svg" alt="Email Bhuvan Bhattarai" />
                <div>
                  <h3>Email</h3>
                  <p>bhuvanbhattarai07@gmail.com</p>
                </div>
              </a>
              <a
                href="https://x.com/bhuvan_365"
                target="_blank"
                rel="noopener noreferrer"
                className="card"
              >
                <img src="./svg/x.svg" alt="Bhuvan Bhattarai Twitter/X profile" />
                <div>
                  <h3>X</h3>
                  <p>Random thoughts & dev tweets</p>
                </div>
              </a>
            </div>

            {/* Right content */}
            <div className="contact-form" ref={rightRef} style={{ flex: 1 }}>
              <h3 className="!text-2xl !font-semibold">Send Me a Message</h3>
              <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" rows="5" required />
                <button className="button-86 sendbtn" type="submit">
                  Send ➤
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
