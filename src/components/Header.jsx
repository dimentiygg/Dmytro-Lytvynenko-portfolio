import React, { useEffect, useRef } from "react";
import { PiHashStraightFill } from "react-icons/pi";
import { FaRegMessage } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

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
      className="sticky top-0 z-50 flex items-center justify-between p-6 overflow-hidden bg-white mb-12"
    >
      <div
        ref={contentRef}
        className="flex items-center justify-between w-full"
      >
        <ul className="flex flex-col gap-1">
          <li className="flex items-center gap-1">
            <PiHashStraightFill size={20} />
            <a
              target="_blank"
              href="https://www.linkedin.com/in/dima-lytvynenko/"
            >
              Linkedin
            </a>
          </li>
          <li className="flex items-center gap-1">
            <PiHashStraightFill size={20} />
            <a target="_blank" href="https://github.com/dimentiygg">
              Github
            </a>
          </li>
        </ul>
        <h1>Dmytro Lytvynenko</h1>
        <div className="flex items-center gap-2">
          <a target="_blank" href="/">
            Let's connect
          </a>
          <FaRegMessage size={15} color="black" />
        </div>
      </div>
    </header>
  );
};

export default Header;
