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

  const handelclick = (e) => {
    e.preventDefault();
    alert("Error while sending, please try another method");
  }

  return (
    <>
      <Seo
        title="Contact Bhuvan Bhattarai | Web Developer Nepal"
        description="Get in touch with Bhuvan Bhattarai — web developer from Nepal. Reach out for collaborations, projects, or portfolio inquiries."
        keywords="Bhuvan Bhattarai, Bhuvan, Bhattarai Bhuvan, Contact Bhuvan Bhattarai, Best Portfolio in Nepal, Web Developer Nepal"
      />
      <section className="contact-section !w-full !max-w-[100vw] !overflow-x-hidden !py-8 !px-0 sm:!px-6 lg:!px-8">
        <div className="container !mx-auto w-full !sm:max-w-7xl !px-0 sm:!px-6 lg:!px-8">
          <div className="top-buttons !flex !justify-center !mb-8">
            <button className="contact-btn !flex !items-center !gap-2 !px-6 !py-3 ">
              <img 
                src="./svg/contact.svg" 
                alt="Contact Bhuvan Bhattarai" 
                className="!w-5 !h-5"
              />
              Contact Me
            </button>
          </div>
          <div className="main !px-0 !sm:px-10 !flex !flex-col lg:!flex-row !gap-8">
            {/* Left content */}
            <div 
              className="social-links !w-full lg:!w-1/2" 
              ref={leftRef}
            >
              <a
                href="https://github.com/bhuvan-365"
                className="card !flex !items-center !gap-4 !p-4  !bg-white !rounded-lg  !duration-300  "
                target="_blank"
                rel="noopener noreferrer"
              >
                <img 
                  src="./svg/github.svg" 
                  alt="Bhuvan Bhattarai GitHub profile" 
                  className="!w-10 !h-10"
                />
                <div>
                  <h3 className="!m-0 !text-lg !font-semibold">GitHub</h3>
                  <p className="!m-0 !text-sm !text-gray-600">Explore my code & projects</p>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/bhuvan-bhattarai-a00413322"
                target="_blank"
                rel="noopener noreferrer"
                className="card !flex !items-center !gap-4 !p-4  !bg-white !rounded-lg   !no-underline !text-gray-800"
              >
                <img
                  src="./svg/linkedIn.svg"
                  alt="Bhuvan Bhattarai LinkedIn profile"
                  className="!w-10 !h-10"
                />
                <div>
                  <h3 className="!m-0 !text-lg !font-semibold">LinkedIn</h3>
                  <p className="!m-0 !text-sm !text-gray-600">Let's connect professionally</p>
                </div>
              </a>
              <a
                href="#"
                className="card !flex !items-center !gap-4 !p-4  "
              >
                <img
                  src="./svg/email.svg"
                  alt="Email Bhuvan Bhattarai"
                  className="!w-10 !h-10"
                />
                <div>
                  <h3 className="!m-0 !text-lg !font-semibold">Email</h3>
                  <p className="!m-0 !text-sm !text-gray-600">bhuvanbhattarai07@gmail.com</p>
                </div>
              </a>
              <a
                href="https://x.com/bhuvan_365"
                target="_blank"
                rel="noopener noreferrer"
                className="card !flex !items-center !gap-4 !p-4 "
              >
                <img
                  src="./svg/x.svg"
                  alt="Bhuvan Bhattarai Twitter/X profile"
                  className="!w-10 !h-10"
                />
                <div>
                  <h3 className="!m-0 !text-lg !font-semibold">X</h3>
                  <p className="!m-0 !text-sm !text-gray-600">Random thoughts & dev tweets</p>
                </div>
              </a>
            </div>

            {/* Right content */}
            <div 
              className="contact-form !w-full lg:!w-1/2" 
              ref={rightRef}
            >
              <h3 className="!text-2xl !font-semibold !mb-6 !text-gray-800">
                Send Me a Message
              </h3>
              <form className="!flex !flex-col !gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="!w-full !p-3 "
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="!w-full !p-3 "
                />
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  required
                  className="!w-full !p-3 "
                />
                <button
                  className="button-86 sendbtn  !p-3 "onClick={handelclick}
                  type="submit"
                >
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