import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SquareArrowOutUpRight } from "./animate-ui/icons/square-arrow-out-up-right";
import { AnimateIcon } from "./animate-ui/icons/icon";
import { Send } from "./animate-ui/icons/send";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Header = () => {
  const headerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const content = contentRef.current;

    if (!header || !content) return;

    // Animate content scrolling down and fading out
    gsap.to(content, {
      y: 100,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "300px top",
        scrub: true,
      },
    });

    // Animate header fading out
    gsap.to(header, {
      opacity: 0,
      y: -50,
      ease: "power2.out",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "300px top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 flex items-center justify-between pt-6 px-10 overflow-hidden bg-white pb-[100px]"
    >
      <div ref={contentRef} className="flex justify-between w-full">
        <ul className="flex flex-col gap-1 text-base font-helvetica font-normal text-blckMain">
          <li className="">
            <AnimateIcon animateOnHover>
              <a
                className="flex flex-row gap-2"
                target="_blank"
                href="https://github.com/dimentiygg"
              >
                <div className="flex items-center justify-center w-5 h-5 border-[0.5px] border-blckMain rounded-xs">
                  <SquareArrowOutUpRight />
                </div>
                Linkedin
              </a>
            </AnimateIcon>
          </li>
          <li className="">
            <AnimateIcon animateOnHover>
              <a
                className="flex flex-row gap-2"
                target="_blank"
                href="https://github.com/dimentiygg"
              >
                <div className="flex items-center justify-center w-5 h-5 border-[0.5px] border-blckMain rounded-xs">
                  <SquareArrowOutUpRight />
                </div>
                Github
              </a>
            </AnimateIcon>
          </li>
        </ul>
        <div className="">
          <h1 className="font-helvetica font-medium text-blckMain">
            Dmytro Lytvynenko
          </h1>
          <p className="font-normal text-gry">Frontend engineer</p>
        </div>

        <div className="">
          <AnimateIcon animateOnHover>
            <a
              className="flex flex-row items-center justify-center gap-2 font-helvetica font-normal text-blckMain"
              target="_blank"
              href="/"
            >
              Let's connect
              <div className="flex items-center justify-center w-5 h-5 border-[0.5px] border-blckMain rounded-xs">
                <Send />
              </div>
            </a>
          </AnimateIcon>
        </div>
      </div>
    </header>
  );
};

export default Header;
