import React from "react";
import AnimatedBackground from "./AnimatedBackground";
import { Icon } from "./Icon";

const AboutMe = () => {
  return (
    <>
      <section className="relative flex flex-col gap-16 items-center mb-[320px] max-sm:mx-16">
        <div className="">
          <h2 className="text-center mb-6 font-helvetica text-gry font-normal text-sm">
            Tech stack
          </h2>
          <ul className="flex flex-wrap justify-center gap-4 max-w-[440px]">
            <li className="flex flex-col items-center gap-2 min-w-[54px]">
              <Icon name="simple-icons_typescript" />
              <span className="text-xs font-blckMain font-normal">
                TypeScript
              </span>
            </li>
            <li className="flex flex-col items-center gap-2 min-w-[54px]">
              <Icon name="simple-icons_react" />
              <span className="text-xs font-blckMain font-normal">React</span>
            </li>
            <li className="flex flex-col items-center gap-2 min-w-[54px]">
              <Icon name="simple-icons_nextdotjs" />
              <span className="text-xs font-blckMain font-normal">Next.js</span>
            </li>
            <li className="flex flex-col items-center gap-2 min-w-[54px]">
              <Icon name="simple-icons_git" />
              <span className="text-xs font-blckMain font-normal">Git</span>
            </li>
            <li className="flex flex-col items-center gap-2 min-w-[54px]">
              <Icon name="simple-icons_nodedotjs" />
              <span className="text-xs font-blckMain font-normal">Node.js</span>
            </li>
            <li className="flex flex-col items-center gap-2 min-w-[54px]">
              <Icon name="simple-icons_supabase" />
              <span className="text-xs font-blckMain font-normal">
                Supabase
              </span>
            </li>
            <li className="flex flex-col items-center gap-2 min-w-[54px]">
              <Icon name="simple-icons_claude" />
              <span className="text-xs font-blckMain font-normal">Claude</span>
            </li>
            <li className="flex flex-col items-center gap-2 min-w-[54px]">
              <Icon name="simple-icons_githubcopilot" />
              <span className="text-xs font-blckMain font-normal">Copilot</span>
            </li>
            <li className="flex flex-col items-center gap-2 min-w-[54px]">
              <Icon name="simple-icons_figma" />
              <span className="text-xs font-blckMain font-normal">Figma</span>
            </li>
            <li className="flex flex-col items-center gap-2 min-w-[54px]">
              <Icon name="simple-icons_prismic" />
              <span className="text-xs font-blckMain font-normal">Prismic</span>
            </li>
            <li className="flex flex-col items-center gap-2 min-w-[54px]">
              <Icon name="simple-icons_gsap" />
              <span className="text-xs font-blckMain font-normal">GSAP</span>
            </li>
          </ul>
        </div>
        <p className="text-center max-w-[440px] font-helvetica text-gry font-normal text-sm ">
          I focus on developing products that blend sleek design with smooth
          functionality. Work with companies that value quality and innovation
          to turn ideas into impactful digital solutions.
        </p>
      </section>
      <div className="relative -mt-64 h-64 overflow-hidden">
        <AnimatedBackground />
        <div className="absolute inset-0 bg-linear-to-b from-white to-transparent pointer-events-none z-10 " />
      </div>
    </>
  );
};

export default AboutMe;
