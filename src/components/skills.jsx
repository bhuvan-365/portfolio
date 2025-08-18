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

      <section className='skills-section !h-fit !w-full !px-4 md:!px-8 !py-8 md:!py-12 !mb-[80px] md:!mb-6'>
        <h2 
          ref={headingRef} 
          className='!font-semibold !text-2xl sm:!text-3xl md:!text-4xl !text-center !mb-6 sm:!mb-10'
        >
          Skills & Tools
        </h2>

        <section className="skillSection !w-full !max-w-7xl !mx-auto !flex !justify-center !items-center md:!flex-row !flex-col !p-0 overflow-x-hidden">
          <div className='!w-full md:!w-3/5 lg:!w-1/2'>
            <div className="skills-tags !space-y-6">

              {/* Languages & Markup */}
              <div className="skill-category">
                <h3 className='!flex !items-center !gap-2 !text-base sm:!text-lg md:!text-xl !font-medium'>
                  <img src="./svg/language.svg" alt="Languages icon" className="!w-4 !h-4 sm:!w-5 sm:!h-5 md:!w-6 md:!h-6"/> Languages & Markup
                </h3>
                <div className="tags !flex !flex-wrap !gap-2 !mt-2">
                  <span className="tag !flex !items-center !gap-1 !text-xs sm:!text-sm md:!text-base !px-2 !py-1 !rounded-md !bg-gray-100">
                    <img src="./image/html.svg" alt="HTML5 icon" className="!w-3 !h-3 sm:!w-4 sm:!h-4 md:!w-5 md:!h-5"/> HTML5
                  </span>
                  <span className="tag !flex !items-center !gap-1 !text-xs sm:!text-sm md:!text-base !px-2 !py-1 !rounded-md !bg-gray-100">
                    <img src="./image/css.svg" alt="CSS3 icon" className="!w-3 !h-3 sm:!w-4 sm:!h-4 md:!w-5 md:!h-5"/> CSS3
                  </span>
                  <span className="tag !flex !items-center !gap-1 !text-xs sm:!text-sm md:!text-base !px-2 !py-1 !rounded-md !bg-gray-100">
                    <img src="./image/javascript.svg" alt="JavaScript icon" className="!w-3 !h-3 sm:!w-4 sm:!h-4 md:!w-5 md:!h-5"/> JavaScript (ES6+)
                  </span>
                  <span className="tag !flex !items-center !gap-1 !text-xs sm:!text-sm md:!text-base !px-2 !py-1 !rounded-md !bg-gray-100">
                    <img src="./image/Typescript.png" alt="TypeScript icon" className="!w-3 !h-3 sm:!w-4 sm:!h-4 md:!w-5 md:!h-5"/> TypeScript
                  </span>
                </div>
              </div>

              {/* Frameworks & Libraries */}
              <div className="skill-category">
                <h3 className='!flex !items-center !gap-2 !text-base sm:!text-lg md:!text-xl !font-medium'>
                  <img src="./svg/framework.svg" alt="Frameworks icon" className="!w-4 !h-4 sm:!w-5 sm:!h-5 md:!w-6 md:!h-6"/> Frameworks & Libraries
                </h3>
                <div className="tags !flex !flex-wrap !gap-2 !mt-2">
                  <span className="tag !flex !items-center !gap-1 !text-xs sm:!text-sm md:!text-base !px-2 !py-1 !rounded-md !bg-gray-100">
                    <img src="./image/react.svg" alt="React.js icon" className="!w-3 !h-3 sm:!w-4 sm:!h-4 md:!w-5 md:!h-5"/> React.js
                  </span>
                  <span className="tag !flex !items-center !gap-1 !text-xs sm:!text-sm md:!text-base !px-2 !py-1 !rounded-md !bg-gray-100">
                    <img src="./image/redux.svg" alt="Redux icon" className="!w-3 !h-3 sm:!w-4 sm:!h-4 md:!w-5 md:!h-5"/> Redux
                  </span>
                  <span className="tag !flex !items-center !gap-1 !text-xs sm:!text-sm md:!text-base !px-2 !py-1 !rounded-md !bg-gray-100">
                    <img src="./image/bootstrap.png" alt="Bootstrap icon" className="!w-3 !h-3 sm:!w-4 sm:!h-4 md:!w-5 md:!h-5"/> Bootstrap
                  </span>
                  <span className="tag !flex !items-center !gap-1 !text-xs sm:!text-sm md:!text-base !px-2 !py-1 !rounded-md !bg-gray-100">
                    <img src="./image/tailwind.svg" alt="Tailwind CSS icon" className="!w-3 !h-3 sm:!w-4 sm:!h-4 md:!w-5 md:!h-5"/> Tailwind CSS
                  </span>
                </div>
              </div>

              {/* Tools & Platforms */}
              <div className="skill-category">
                <h3 className='!flex !items-center !gap-2 !text-base sm:!text-lg md:!text-xl !font-medium'>
                  <img src="./svg/tools.svg" alt="Tools icon" className="!w-4 !h-4 sm:!w-5 sm:!h-5 md:!w-6 md:!h-6"/> Tools & Platforms
                </h3>
                <div className="tags !flex !flex-wrap !gap-2 !mt-2">
                  <span className="tag !flex !items-center !gap-1 !text-xs sm:!text-sm md:!text-base !px-2 !py-1 !rounded-md !bg-gray-100">
                    <img src="./image/github.svg" alt="GitHub icon" className="!w-3 !h-3 sm:!w-4 sm:!h-4 md:!w-5 md:!h-5"/> GitHub
                  </span>
                  <span className="tag !flex !items-center !gap-1 !text-xs sm:!text-sm md:!text-base !px-2 !py-1 !rounded-md !bg-gray-100">
                    <img src="./image/vscode.svg" alt="VS Code icon" className="!w-3 !h-3 sm:!w-4 sm:!h-4 md:!w-5 md:!h-5"/> VS Code
                  </span>
                  <span className="tag !flex !items-center !gap-1 !text-xs sm:!text-sm md:!text-base !px-2 !py-1 !rounded-md !bg-gray-100">
                    <img src="./image/netlify.svg" alt="Netlify icon" className="!w-3 !h-3 sm:!w-4 sm:!h-4 md:!w-5 md:!h-5"/> Netlify
                  </span>
                  <span className="tag !flex !items-center !gap-1 !text-xs sm:!text-sm md:!text-base !px-2 !py-1 !rounded-md !bg-gray-100">
                    <img src="./image/vercel.webp" alt="Vercel icon" className="!w-3 !h-3 sm:!w-4 sm:!h-4 md:!w-5 md:!h-5"/> Vercel
                  </span>
                  <span className="tag !flex !items-center !gap-1 !text-xs sm:!text-sm md:!text-base !px-2 !py-1 !rounded-md !bg-gray-100">
                    <img src="./image/figma.svg" alt="Figma icon" className="!w-3 !h-3 sm:!w-4 sm:!h-4 md:!w-5 md:!h-5"/> Figma
                  </span>
                  <span className="tag !flex !items-center !gap-1 !text-xs sm:!text-sm md:!text-base !px-2 !py-1 !rounded-md !bg-gray-100">
                    <img src="./image/shadcn.png" alt="Shadcn icon" className="!w-3 !h-3 sm:!w-4 sm:!h-4 md:!w-5 md:!h-5"/> Shadcn
                  </span>
                </div>
              </div>

              {/* Certifications */}
              <div className="skill-category">
                <h3 className='!flex !items-center !gap-2 !text-base sm:!text-lg md:!text-xl !font-medium'>
                  <img src="./svg/certificate.svg" alt="Certificate icon" className="!w-4 !h-4 sm:!w-5 sm:!h-5 md:!w-6 md:!h-6"/> Certifications
                </h3>
                <ul className="cert-list !text-sm sm:!text-base md:!text-lg !text-blue-900 !mt-2">
                  <li className='!mb-1'>
                    <a href="https://www.freecodecamp.org/certification/bhuvanbhattarai/responsive-web-design" target="_blank" rel="noopener noreferrer" className='hover:!underline'>
                      freeCodeCamp – Responsive Web Design (300 hrs)
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* Icon Cloud */}
          <div className='icons !w-full md:!w-2/5 lg:!w-1/2 !flex !justify-center !items-center !mt-4 md:!mt-0'>
            <IconCloud images={iconImages} />
          </div>
        </section>
      </section>
    </>
  );
};

export default Skills;