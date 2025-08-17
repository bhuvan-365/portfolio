import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IconCloud } from './magicui/icon-cloud';
import Seo from './seo';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
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
        duration: fullText.length * 0.08,
        ease: "none",
        onUpdate: () => {
          heading.textContent = fullText.substring(0, i);
          i += 1;
          if (i > fullText.length) i = fullText.length;
        }
      });
    }
  }, []);

  const iconImages = [
  './image/html.svg',
  './image/css.svg',
  './image/javascript.svg',
  './image/Typescript.png',
  './image/react.svg',
  './image/redux.svg',
  './image/bootstrap.png',
  './image/tailwind.svg',
  './image/github.svg',
  './image/vscode.svg',
  './image/netlify.svg',
  './image/vercel.webp',
  './image/figma.svg',
  './image/shadcn.png',
  ];

  return (
    <>
      <Seo 
        title="Skills of Bhuvan Bhattarai | Web Developer | Best Portfolio in Nepal"
        description="Discover the professional skills of Bhuvan Bhattarai — web development, React, JavaScript, and more. Highlighting one of the best portfolio websites in Nepal."
        keywords="Bhuvan Bhattarai, Bhuvan, Bhattarai Bhuvan, Best Portfolio in Nepal, Web Developer Skills, React, JavaScript, Portfolio Website"
      />

      <section className='!h-fit md:mb-6 mb-[100px]'>
        <h2 
          ref={headingRef} 
          className='!font-semibold !text-2xl sm:!text-3xl md:!text-4xl !text-center mb-6 sm:mb-10'
        >
          Skills & Tools
        </h2>

        <section className="skillSection flex justify-center items-center md:flex-row flex-col gap-6 md:gap-12">
          <div className='md:w-3/5 w-full'>
            <div className="skills-tags space-y-6">

              {/* Languages & Markup */}
              <div className="skill-category">
                <h3 className='flex items-center gap-2 !text-lg sm:!text-xl font-medium'>
                  <img src="./svg/language.svg" alt="Languages icon" className="w-5 h-5 sm:w-6 sm:h-6"/> Languages & Markup
                </h3>
                <div className="tags flex flex-wrap gap-2 mt-2">
                  <span className="tag flex items-center gap-1 !text-sm sm:!text-base"><img src="./image/html.svg" alt="HTML5 icon" className="w-4 h-4 sm:w-5 sm:h-5"/> HTML5</span>
                  <span className="tag flex items-center gap-1 !text-sm sm:!text-base"><img src="./image/css.svg" alt="CSS3 icon" className="w-4 h-4 sm:w-5 sm:h-5"/> CSS3</span>
                  <span className="tag flex items-center gap-1 !text-sm sm:!text-base"><img src="./image/javascript.svg" alt="JavaScript icon" className="w-4 h-4 sm:w-5 sm:h-5"/> JavaScript (ES6+)</span>
                  <span className="tag flex items-center gap-1 !text-sm sm:!text-base"><img src="./image/Typescript.png" alt="TypeScript icon" className="w-4 h-4 sm:w-5 sm:h-5"/> TypeScript</span>
                </div>
              </div>

              {/* Frameworks & Libraries */}
              <div className="skill-category">
                <h3 className='flex items-center gap-2 !text-lg sm:!text-xl font-medium'>
                  <img src="./svg/framework.svg" alt="Frameworks icon" className="w-5 h-5 sm:w-6 sm:h-6"/> Frameworks & Libraries
                </h3>
                <div className="tags flex flex-wrap gap-2 mt-2">
                  <span className="tag flex items-center gap-1 !text-sm sm:!text-base"><img src="./image/react.svg" alt="React.js icon" className="w-4 h-4 sm:w-5 sm:h-5"/> React.js</span>
                  <span className="tag flex items-center gap-1 !text-sm sm:!text-base"><img src="./image/redux.svg" alt="Redux icon" className="w-4 h-4 sm:w-5 sm:h-5"/> Redux</span>
                  <span className="tag flex items-center gap-1 !text-sm sm:!text-base"><img src="./image/bootstrap.png" alt="Bootstrap icon" className="w-4 h-4 sm:w-5 sm:h-5"/> Bootstrap</span>
                  <span className="tag flex items-center gap-1 !text-sm sm:!text-base"><img src="./image/tailwind.svg" alt="Tailwind CSS icon" className="w-4 h-4 sm:w-5 sm:h-5"/> Tailwind CSS</span>
                </div>
              </div>

              {/* Tools & Platforms */}
              <div className="skill-category">
                <h3 className='flex items-center gap-2 !text-lg sm:!text-xl font-medium'>
                  <img src="./svg/tools.svg" alt="Tools icon" className="w-5 h-5 sm:w-6 sm:h-6"/> Tools & Platforms
                </h3>
                <div className="tags flex flex-wrap gap-2 mt-2">
                  <span className="tag flex items-center gap-1 !text-sm sm:!text-base"><img src="./image/github.svg" alt="GitHub icon" className="w-4 h-4 sm:w-5 sm:h-5"/> GitHub</span>
                  <span className="tag flex items-center gap-1 !text-sm sm:!text-base"><img src="./image/vscode.svg" alt="VS Code icon" className="w-4 h-4 sm:w-5 sm:h-5"/> VS Code</span>
                  <span className="tag flex items-center gap-1 !text-sm sm:!text-base"><img src="./image/netlify.svg" alt="Netlify icon" className="w-4 h-4 sm:w-5 sm:h-5"/> Netlify</span>
                  <span className="tag flex items-center gap-1 !text-sm sm:!text-base"><img src="./image/vercel.webp" alt="Vercel icon" className="w-4 h-4 sm:w-5 sm:h-5"/> Vercel</span>
                  <span className="tag flex items-center gap-1 !text-sm sm:!text-base"><img src="./image/figma.svg" alt="Figma icon" className="w-4 h-4 sm:w-5 sm:h-5"/> Figma</span>
                  <span className="tag flex items-center gap-1 !text-sm sm:!text-base"><img src="./image/shadcn.png" alt="Shadcn icon" className="w-4 h-4 sm:w-5 sm:h-5"/> Shadcn</span>
                </div>
              </div>

              {/* Certifications */}
              <div className="skill-category">
                <h3 className='flex items-center gap-2 !text-lg sm:!text-xl font-medium'>
                  <img src="./svg/certificate.svg" alt="Certificate icon" className="w-5 h-5 sm:w-6 sm:h-6"/> Certifications
                </h3>
                <ul className="cert-list !text-base sm:!text-lg !text-blue-900 mt-2">
                  <li>
                    <a href="https://www.freecodecamp.org/certification/bhuvanbhattarai/responsive-web-design" target="_blank" rel="noopener noreferrer">
                      freeCodeCamp – Responsive Web Design (300 hrs)
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* Icon Cloud */}
          <div className='icons '>
            <IconCloud images={iconImages} />
          </div>
        </section>
      </section>
    </>
  );
};

export default Skills;
