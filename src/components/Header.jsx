import React, { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SquareArrowOutUpRight } from "./animate-ui/icons/square-arrow-out-up-right";
import { AnimateIcon } from "./animate-ui/icons/icon";
import { Send } from "./animate-ui/icons/send";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const socialLinks = [
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/dima-lytvynenko/",
  },
  {
    label: "Github",
    href: "https://github.com/dimentiygg",
  },
];

const ctaLink = {
  label: "Let's connect",
  href: "/",
};

const Header = () => {
  const headerRef = useRef(null);
  const linkRefs = useRef([]);
  const titleRefs = useRef([]);

  const registerLinkRef = useCallback((element) => {
    if (element && !linkRefs.current.includes(element)) {
      linkRefs.current.push(element);
    }
  }, []);

  const registerTitleRef = useCallback((element) => {
    if (element && !titleRefs.current.includes(element)) {
      titleRefs.current.push(element);
    }
  }, []);

  useEffect(() => {
    const header = headerRef.current;

    if (!header) return;

    const linkAnimation =
      linkRefs.current.length > 0
        ? gsap.to(linkRefs.current, {
            y: 80,
            ease: "power2.out",
            duration: 0.35,
            scrollTrigger: {
              trigger: document.body,
              start: "top+=1 top",
              end: "top+=2 top",
              toggleActions: "play none none reverse",
            },
          })
        : null;

    const titleAnimation =
      titleRefs.current.length > 0
        ? gsap.to(titleRefs.current, {
            opacity: 0,
            ease: "power2.out",
            duration: 0.35,
            scrollTrigger: {
              trigger: document.body,
              start: "top+=1 top",
              end: "top+=2 top",
              toggleActions: "play none none reverse",
            },
          })
        : null;

    const headerAnimation = gsap.to(header, {
      backgroundColor: "rgba(255,255,255,0)",
      ease: "power2.out",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "300px top",
        scrub: true,
      },
    });

    return () => {
      linkAnimation?.kill();
      titleAnimation?.kill();
      headerAnimation.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-40 flex items-center justify-between pt-6 px-10 overflow-hidden bg-white mb-[100px] max-sm:px-6"
      >
        <div className="flex justify-between w-full ">
          <ul className="flex flex-col gap-1 text-base font-helvetica font-normal text-blckMain max-sm:hidden">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <AnimateIcon animateOnHover>
                  <a
                    className="flex flex-row gap-2"
                    target="_blank"
                    href={link.href}
                  >
                    <div className="flex items-center justify-center w-5 h-5 border-[0.5px] border-blckMain rounded-xs opacity-0 pointer-events-none">
                      <SquareArrowOutUpRight />
                    </div>
                    <span ref={registerLinkRef}>{link.label}</span>
                  </a>
                </AnimateIcon>
              </li>
            ))}
          </ul>

          <div className="">
            <h1
              ref={registerTitleRef}
              className="font-helvetica font-medium text-blckMain"
            >
              Dmytro Lytvynenko
            </h1>
            <p
              ref={registerTitleRef}
              className="text-center font-normal text-gry max-sm:text-start"
            >
              Frontend engineer
            </p>
          </div>

          <div className="">
            <AnimateIcon animateOnHover>
              <a
                className="flex flex-row items-baseline justify-center gap-2 font-helvetica font-normal text-blckMain"
                target="_blank"
                href={ctaLink.href}
              >
                <span ref={registerLinkRef}>{ctaLink.label}</span>
                <div className="flex items-center justify-center w-5 h-5 border-[0.5px] border-blckMain rounded-xs opacity-0 pointer-events-none">
                  <Send />
                </div>
              </a>
            </AnimateIcon>
          </div>
        </div>
      </header>

      <div className="pointer-events-none">
        <ul className="fixed top-6 left-10 z-70 flex flex-col gap-1 pointer-events-auto max-sm:hidden">
          {socialLinks.map((link) => (
            <li key={`${link.label}-floating`}>
              <AnimateIcon animateOnHover>
                <a
                  className="flex flex-row gap-2"
                  target="_blank"
                  href={link.href}
                >
                  <div className="flex items-center justify-center w-5 h-5 border-[0.5px] border-blckMain rounded-xs bg-white">
                    <SquareArrowOutUpRight />
                  </div>
                </a>
              </AnimateIcon>
            </li>
          ))}
        </ul>

        <div className="fixed top-6 right-10 z-70 pointer-events-auto max-sm:right-6">
          <AnimateIcon animateOnHover>
            <a
              className="flex flex-row items-baseline justify-center gap-2 font-helvetica font-normal text-blckMain"
              target="_blank"
              href={ctaLink.href}
            >
              <div className="flex items-center justify-center w-5 h-5 border-[0.5px] border-blckMain rounded-xs bg-white">
                <Send />
              </div>
            </a>
          </AnimateIcon>
        </div>
      </div>
    </>
  );
};

export default Header;
