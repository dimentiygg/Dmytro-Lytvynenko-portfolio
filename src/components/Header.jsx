import React, { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ToggleRight } from "./animate-ui/icons/toggle-right";
import { AnimateIcon } from "./animate-ui/icons/icon";
import { Send } from "./animate-ui/icons/send";
import { useIsMobile } from "@/hooks/useIsMobile";
import LinksMenu from "./LinksMenu";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Header = () => {
  const headerRef = useRef(null);
  const linkRefs = useRef([]);
  const titleRefs = useRef([]);
  const scrollRef = useRef(null);

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
    const scroll = scrollRef.current;

    if (!header) return;
    if (!scroll) return;

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

    const titleAnimation = gsap.to(titleRefs.current, {
      opacity: 0,
      ease: "power2.out",
      duration: 0.35,
      scrollTrigger: {
        trigger: document.body,
        start: "top+=1 top",
        toggleActions: "play none none reverse",
      },
      onComplete: () => {
        titleRefs.current.forEach((el) => {
          el.style.display = "none";
        });
      },
      onReverseComplete: () => {
        titleRefs.current.forEach((el) => {
          el.style.display = "inline";
        });
      },
    });

    const headerAnimation = gsap.to(header, {
      backgroundColor: "rgba(255,255,255,0)",
      ease: "power2.out",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "100px top",
        scrub: true,
      },
    });

    const scrollAnimation = gsap.to(scroll, {
      opacity: 0,
      ease: "power2.out",
      duration: 0.35,
      scrollTrigger: {
        trigger: document.body,
        start: "top+=1 top",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      linkAnimation?.kill();
      titleAnimation?.kill();
      headerAnimation.kill();
      scrollAnimation.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const isMobile = useIsMobile();

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-100 flex justify-between pt-6 px-10 overflow-hidden bg-white mb-[100px] max-sm:px-6"
      >
        {!isMobile ? <LinksMenu linkRef={registerLinkRef} /> : null}

        <div>
          <h1 className=" flex justify-center w-[154px] rounded-xs bg-white font-helvetica font-medium text-blckMain max-sm:justify-start">
            <span className="text-center">D</span>
            <span ref={registerTitleRef} className="mr-1">
              mytro
            </span>
            <span className="text-center">L</span>
            <span ref={registerTitleRef}>ytvynenko</span>
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
              href=""
            >
              <span
                className="font-helvetica font-normal text-blckMain "
                ref={registerLinkRef}
              >
                Let's connect
              </span>
              <div className="flex items-center justify-center w-5 h-5 border-[0.5px] bg-white border-blckMain rounded-xs">
                <Send />
              </div>
            </a>
          </AnimateIcon>
        </div>
      </header>
      <div
        ref={scrollRef}
        className="fixed bottom-6 left-10 flex flex-row gap-2 z-50 max-sm:left-1/2 max-sm:-translate-x-1/2"
      >
        <AnimateIcon loopDelay={2000} animate loop>
          <div className="flex items-center justify-center w-5 h-5 border-[0.5px] bg-white border-blckMain rounded-xs">
            <ToggleRight />
          </div>
        </AnimateIcon>

        {isMobile ? (
          <span className="font-helvetica font-normal text-base">Swipe</span>
        ) : (
          <span className="font-helvetica font-normal text-base">Scroll</span>
        )}
      </div>
    </>
  );
};

export default Header;
