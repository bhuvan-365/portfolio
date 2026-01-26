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
    './svg/zustand.svg'
  ];

  return (
    <>
      <Seo
        title="Skills of Bhuvan Bhattarai | Web Developer | Best Portfolio in Nepal"
        description="Discover the professional skills of Bhuvan Bhattarai — web development, React, JavaScript, and more. Highlighting one of the best portfolio websites in Nepal."
        keywords="Bhuvan Bhattarai, Bhuvan, Bhattarai Bhuvan, Best Portfolio in Nepal, Web Developer Skills, React, JavaScript, Portfolio Website"
      />

      <section className='skills-section !min-h-fit !w-full !px-4 sm:!px-6 lg:!px-8 !py-8 md:!py-12 !mb-8 md:!mb-12 !overflow-hidden'>
        <h2
          ref={headingRef}
          className='!font-semibold !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl !text-center !mb-6 md:!mb-10 !text-gray-800'
        >
          Skills & Tools
        </h2>

        <div className="skill-container !w-full !max-w-7xl !mx-auto !flex !flex-col lg:!flex-row !gap-8 !p-0">
          {/* Skills List */}
          <div className='skills-list !w-full lg:!w-1/2 !px-4 sm:!px-6'>
            <div className="skills-tags !space-y-6 md:!space-y-8">

              {/* Languages & Markup */}
              <div className="skill-category">
                <h3 className='!flex !items-center !gap-2 !text-base sm:!text-lg md:!text-xl !font-semibold !text-gray-700 !mb-2'>
                  <img src="./svg/language.svg" alt="Languages icon" className="!w-5 !h-5 md:!w-6 md:!h-6" />
                  Languages & Markup
                </h3>
                <div className="tags !flex !flex-wrap !gap-2 sm:!gap-3 !mt-3">
                  <span className="tag !flex !items-center !gap-2 !text-xs sm:!text-sm md:!text-base !px-3 !py-1.5 sm:!py-2 !rounded-lg !bg-gray-50 !border !border-gray-200 hover:!bg-gray-100 !transition-colors !duration-200">
                    <img src="./image/html.svg" alt="HTML5 icon" className="!w-4 !h-4 sm:!w-5 sm:!h-5" /> HTML5
                  </span>
                  <span className="tag !flex !items-center !gap-2 !text-xs sm:!text-sm md:!text-base !px-3 !py-1.5 sm:!py-2 !rounded-lg !bg-gray-50 !border !border-gray-200 hover:!bg-gray-100 !transition-colors !duration-200">
                    <img src="./image/css.svg" alt="CSS3 icon" className="!w-4 !h-4 sm:!w-5 sm:!h-5" /> CSS3
                  </span>
                  <span className="tag !flex !items-center !gap-2 !text-xs sm:!text-sm md:!text-base !px-3 !py-1.5 sm:!py-2 !rounded-lg !bg-gray-50 !border !border-gray-200 hover:!bg-gray-100 !transition-colors !duration-200">
                    <img src="./image/javascript.svg" alt="JavaScript icon" className="!w-4 !h-4 sm:!w-5 sm:!h-5" /> JavaScript
                  </span>
                  <span className="tag !flex !items-center !gap-2 !text-xs sm:!text-sm md:!text-base !px-3 !py-1.5 sm:!py-2 !rounded-lg !bg-gray-50 !border !border-gray-200 hover:!bg-gray-100 !transition-colors !duration-200">
                    <img src="./image/Typescript.png" alt="TypeScript icon" className="!w-4 !h-4 sm:!w-5 sm:!h-5" /> TypeScript
                  </span>
                </div>
              </div>

              {/* Frameworks & Libraries */}
              <div className="skill-category">
                <h3 className='!flex !items-center !gap-2 !text-base sm:!text-lg md:!text-xl !font-semibold !text-gray-700 !mb-2'>
                  <img src="./svg/framework.svg" alt="Frameworks icon" className="!w-5 !h-5 md:!w-6 md:!h-6" />
                  Frameworks & Libraries
                </h3>
                <div className="tags !flex !flex-wrap !gap-2 sm:!gap-3 !mt-3">
                  <span className="tag !flex !items-center !gap-2 !text-xs sm:!text-sm md:!text-base !px-3 !py-1.5 sm:!py-2 !rounded-lg !bg-gray-50 !border !border-gray-200 hover:!bg-gray-100 !transition-colors !duration-200">
                    <img src="./image/react.svg" alt="React icon" className="!w-4 !h-4 sm:!w-5 sm:!h-5" /> React.js
                  </span>
                  <span className="tag !flex !items-center !gap-2 !text-xs sm:!text-sm md:!text-base !px-3 !py-1.5 sm:!py-2 !rounded-lg !bg-gray-50 !border !border-gray-200 hover:!bg-gray-100 !transition-colors !duration-200">
                    <img src="./image/next.png" alt="React icon" className="!w-4 !h-4 sm:!w-5 sm:!h-5" /> Next.js
                  </span>
                  <span className="tag !flex !items-center !gap-2 !text-xs sm:!text-sm md:!text-base !px-3 !py-1.5 sm:!py-2 !rounded-lg !bg-gray-50 !border !border-gray-200 hover:!bg-gray-100 !transition-colors !duration-200">
                    <img src="./image/redux.svg" alt="Redux icon" className="!w-4 !h-4 sm:!w-5 sm:!h-5" /> Redux
                  </span>
                  <span className="tag !flex !items-center !gap-2 !text-xs sm:!text-sm md:!text-base !px-3 !py-1.5 sm:!py-2 !rounded-lg !bg-gray-50 !border !border-gray-200 hover:!bg-gray-100 !transition-colors !duration-200">
                    <img src="./image/zustand.svg" alt="Redux icon" className="!w-4 !h-4 sm:!w-5 sm:!h-5" /> Zustand
                  </span>
                  <span className="tag !flex !items-center !gap-2 !text-xs sm:!text-sm md:!text-base !px-3 !py-1.5 sm:!py-2 !rounded-lg !bg-gray-50 !border !border-gray-200 hover:!bg-gray-100 !transition-colors !duration-200">
                    <img src="./image/bootstrap.png" alt="Bootstrap icon" className="!w-4 !h-4 sm:!w-5 sm:!h-5" /> Bootstrap
                  </span>
                  <span className="tag !flex !items-center !gap-2 !text-xs sm:!text-sm md:!text-base !px-3 !py-1.5 sm:!py-2 !rounded-lg !bg-gray-50 !border !border-gray-200 hover:!bg-gray-100 !transition-colors !duration-200">
                    <img src="./image/tailwind.svg" alt="Tailwind icon" className="!w-4 !h-4 sm:!w-5 sm:!h-5" /> Tailwind CSS
                  </span>
                </div>
              </div>
              {/* Backend & Databases */}
              <div className="skill-category">
                <h3 className='!flex !items-center !gap-2 !text-base sm:!text-lg md:!text-xl !font-semibold !text-gray-700 !mb-2'>
                  <img src="./image/db.svg" alt="Frameworks icon" className="!w-5 !h-5 md:!w-6 md:!h-6" />
                  Backend & Databases
                </h3>
                <div className="tags !flex !flex-wrap !gap-2 sm:!gap-3 !mt-3">
                  <span className="tag !flex !items-center !gap-2 !text-xs sm:!text-sm md:!text-base !px-3 !py-1.5 sm:!py-2 !rounded-lg !bg-gray-50 !border !border-gray-200 hover:!bg-gray-100 !transition-colors !duration-200">
                    <img src="./image/nodejs.png" alt="NodeJs icon" className="!w-4 !h-4 sm:!w-5 sm:!h-5" /> Node.Js
                  </span>
                  <span className="tag !flex !items-center !gap-2 !text-xs sm:!text-sm md:!text-base !px-3 !py-1.5 sm:!py-2 !rounded-lg !bg-gray-50 !border !border-gray-200 hover:!bg-gray-100 !transition-colors !duration-200">
                    <img src="./image/expressjs.png" alt="ExpressJS icon" className="!w-4 !h-4 sm:!w-5 sm:!h-5" />
                    Expess.Js
                  </span>
                  <span className="tag !flex !items-center !gap-2 !text-xs sm:!text-sm md:!text-base !px-3 !py-1.5 sm:!py-2 !rounded-lg !bg-gray-50 !border !border-gray-200 hover:!bg-gray-100 !transition-colors !duration-200">
                    <img src="./image/MongoDB.png" alt="MongoDB icon" className="!w-4 !h-4 sm:!w-5 sm:!h-5" /> MongoDB
                  </span>

                </div>
              </div>

              {/* Tools & Platforms */}
              <div className="skill-category">
                <h3 className='!flex !items-center !gap-2 !text-base sm:!text-lg md:!text-xl !font-semibold !text-gray-700 !mb-2'>
                  <img src="./svg/tools.svg" alt="Tools icon" className="!w-5 !h-5 md:!w-6 md:!h-6" />
                  Tools & Platforms
                </h3>
                <div className="tags !flex !flex-wrap !gap-2 sm:!gap-3 !mt-3">
                  <span className="tag !flex !items-center !gap-2 !text-xs sm:!text-sm md:!text-base !px-3 !py-1.5 sm:!py-2 !rounded-lg !bg-gray-50 !border !border-gray-200 hover:!bg-gray-100 !transition-colors !duration-200">
                    <img src="./image/github.svg" alt="GitHub icon" className="!w-4 !h-4 sm:!w-5 sm:!h-5" /> GitHub
                  </span>
                  <span className="tag !flex !items-center !gap-2 !text-xs sm:!text-sm md:!text-base !px-3 !py-1.5 sm:!py-2 !rounded-lg !bg-gray-50 !border !border-gray-200 hover:!bg-gray-100 !transition-colors !duration-200">
                    <img src="./image/postman.jpg" alt="Postman icon" className="!w-4 !h-4 sm:!w-5 sm:!h-5" /> Post Man
                  </span>
                  <span className="tag !flex !items-center !gap-2 !text-xs sm:!text-sm md:!text-base !px-3 !py-1.5 sm:!py-2 !rounded-lg !bg-gray-50 !border !border-gray-200 hover:!bg-gray-100 !transition-colors !duration-200">
                    <img src="./image/vscode.svg" alt="VS Code icon" className="!w-4 !h-4 sm:!w-5 sm:!h-5" /> VS Code
                  </span>
                  <span className="tag !flex !items-center !gap-2 !text-xs sm:!text-sm md:!text-base !px-3 !py-1.5 sm:!py-2 !rounded-lg !bg-gray-50 !border !border-gray-200 hover:!bg-gray-100 !transition-colors !duration-200">
                    <img src="./image/netlify.svg" alt="Netlify icon" className="!w-4 !h-4 sm:!w-5 sm:!h-5" /> Netlify
                  </span>
                  <span className="tag !flex !items-center !gap-2 !text-xs sm:!text-sm md:!text-base !px-3 !py-1.5 sm:!py-2 !rounded-lg !bg-gray-50 !border !border-gray-200 hover:!bg-gray-100 !transition-colors !duration-200">
                    <img src="./image/vercel.webp" alt="Vercel icon" className="!w-4 !h-4 sm:!w-5 sm:!h-5" /> Vercel
                  </span>
                  <span className="tag !flex !items-center !gap-2 !text-xs sm:!text-sm md:!text-base !px-3 !py-1.5 sm:!py-2 !rounded-lg !bg-gray-50 !border !border-gray-200 hover:!bg-gray-100 !transition-colors !duration-200">
                    <img src="./image/figma.svg" alt="Figma icon" className="!w-4 !h-4 sm:!w-5 sm:!h-5" /> Figma
                  </span>
                  <span className="tag !flex !items-center !gap-2 !text-xs sm:!text-sm md:!text-base !px-3 !py-1.5 sm:!py-2 !rounded-lg !bg-gray-50 !border !border-gray-200 hover:!bg-gray-100 !transition-colors !duration-200">
                    <img src="./image/shadcn.png" alt="Shadcn icon" className="!w-4 !h-4 sm:!w-5 sm:!h-5" /> Shadcn
                  </span>
                </div>
              </div>

              {/* Certification */}
              <div className="skill-category">
                <h3 className='!flex !items-center !gap-2 !text-base sm:!text-lg md:!text-xl !font-semibold !text-gray-700 !mb-2'>
                  <img src="./svg/certificate.svg" alt="Certificate icon" className="!w-5 !h-5 md:!w-6 md:!h-6" />
                  Certifications
                </h3>
                <ul className="cert-list !mt-3 !space-y-2">
                  <li className='!text-sm sm:!text-base md:!text-lg !text-blue-600 hover:!text-blue-800 !transition-colors !duration-200'>
                    <a
                      href="https://www.freecodecamp.org/certification/bhuvanbhattarai/responsive-web-design"
                      target="_blank"
                      rel="noopener noreferrer"
                      className='hover:!underline'
                    >
                      freeCodeCamp – Responsive Web Design (300 hrs)
                    </a>
                  </li>
                </ul>
              </div>
              {/* {Experience} */}
              <div className="skill-category">
                <h3 className='!flex !items-center !gap-2 !text-base sm:!text-lg md:!text-xl !font-semibold !text-gray-700 !mb-2'>
                  <img src="./svg/certificate.svg" alt="Certificate icon" className="!w-5 !h-5 md:!w-6 md:!h-6" />
                  Experience
                </h3>
                <ul className="cert-list !mt-3 !space-y-2">
                  <li className='!text-sm sm:!text-base md:!text-lg !text-blue-600 hover:!text-blue-800 !transition-colors !duration-200'>
                    <a
                      href="/resume/Bhuvan-Experience-Letter.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className='hover:!underline'
                    >
                      Font-End Developer –  WebX Nepal (6 Months)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Icon Cloud */}
          <div className='hidden xs:block'>
            <div className=' icon-cloud-container !w-full lg:!w-1/2 !flex !justify-center !items-center !mt-6 lg:!mt-0 !px-4 sm:!px-6  '>
              <div className='!w-full !max-w-md lg:!max-w-lg !aspect-square  '>
                <IconCloud images={iconImages} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;