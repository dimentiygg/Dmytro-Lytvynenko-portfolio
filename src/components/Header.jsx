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
  const scrollRef = useRef(null);
  const fullNameRef = useRef(null);
  const shortNameRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const lastNameParentRef = useRef(null);
  const mytroRef = useRef(null);
  const ytvynenkoRef = useRef(null);
  const subtitleRef = useRef(null);

  const registerLinkRef = useCallback((element) => {
    if (element && !linkRefs.current.includes(element)) {
      linkRefs.current.push(element);
    }
  }, []);

  const isMobile = useIsMobile();

  useEffect(() => {
    const header = headerRef.current;
    const scroll = scrollRef.current;
    const fullName = fullNameRef.current;
    const shortName = shortNameRef.current;
    const firstName = firstNameRef.current;
    const lastName = lastNameRef.current;
    const lastNameParent = lastNameParentRef.current;
    const mytro = mytroRef.current;
    const ytvynenko = ytvynenkoRef.current;
    const subtitle = subtitleRef.current;

    if (!header || !scroll || !fullName || (!isMobile && !shortName)) return;

    const initialValues = {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
    };

    gsap.set([firstName, lastName, mytro, ytvynenko], initialValues);
    gsap.set(fullName, { opacity: 1, scale: 1 });
    gsap.set(subtitle, { opacity: 1, y: 0 });
    if (!isMobile) {
      gsap.set(shortName, { opacity: 0, scale: 0.8, x: 0 });
    }

    const scrollTriggerConfig = {
      trigger: document.body,
      start: "top top",
      end: "top+=100 top",
      scrub: 1,
      immediateRender: false,
    };

    const nameTimeline = gsap.timeline({ scrollTrigger: scrollTriggerConfig });

    const fadeOutText = {
      from: { opacity: 1, scale: 1 },
      to: { opacity: 0, scale: 0.7, ease: "power2.inOut" },
    };

    const fadeOutSubtitle = {
      from: { opacity: 1, y: 0 },
      to: { opacity: 0, y: -10, ease: "power2.in" },
    };

    if (isMobile && firstName && lastName && lastNameParent) {
      gsap.set(lastNameParent, { x: 0, clearProps: "all" });

      const calculateDistance = () => {
        const gap =
          lastName.getBoundingClientRect().left -
          firstName.getBoundingClientRect().right;
        return -(gap - 2); // 2px промежуток между буквами
      };

      let distanceToMove = calculateDistance();
      setTimeout(() => {
        const newDistance = calculateDistance();
        if (Math.abs(newDistance - distanceToMove) > 2)
          distanceToMove = newDistance;
      }, 100);

      nameTimeline
        .fromTo([mytro, ytvynenko], fadeOutText.from, fadeOutText.to, 0)
        .fromTo(
          lastNameParent,
          { x: 0 },
          { x: distanceToMove || -50, ease: "power2.inOut" },
          0
        )
        .fromTo(subtitle, fadeOutSubtitle.from, fadeOutSubtitle.to, 0);
    } else if (!isMobile) {
      nameTimeline
        .fromTo(
          [mytro, ytvynenko],
          { ...fadeOutText.from, x: 0 },
          { ...fadeOutText.to, x: -15 },
          0
        )
        .fromTo(
          [firstName, lastName],
          { opacity: 1 },
          { opacity: 0, ease: "power2.inOut" },
          0
        )
        .fromTo(
          fullName,
          { scale: 1, opacity: 1 },
          { scale: 0.6, opacity: 0, ease: "power2.inOut" },
          0
        )
        .fromTo(
          shortName,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, ease: "power2.out" },
          0.15
        )
        .fromTo(subtitle, fadeOutSubtitle.from, fadeOutSubtitle.to, 0);
    }
    const toggleActions = "play none none reverse";
    const animations = [
      linkRefs.current.length > 0 &&
        gsap.to(linkRefs.current, {
          y: 80,
          ease: "power2.out",
          duration: 0.35,
          scrollTrigger: {
            trigger: document.body,
            start: "top+=1 top",
            end: "top+=2 top",
            toggleActions,
          },
        }),
      gsap.to(header, {
        backgroundColor: "rgba(255,255,255,0)",
        ease: "power2.out",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "100px top",
          scrub: true,
        },
      }),
      gsap.to(scroll, {
        opacity: 0,
        ease: "power2.out",
        duration: 0.35,
        scrollTrigger: {
          trigger: document.body,
          start: "top+=1 top",
          toggleActions,
        },
      }),
      nameTimeline,
    ].filter(Boolean);

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      animations.forEach((anim) => anim?.kill());
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMobile]);

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 z-100 w-full flex justify-between pt-6 px-10 overflow-hidden bg-white mb-[100px] max-sm:px-6"
      >
        {!isMobile ? <LinksMenu linkRef={registerLinkRef} /> : null}

        <div className="flex flex-col items-center max-sm:items-start relative">
          <div
            ref={fullNameRef}
            className="flex justify-center w-[154px] rounded-xs bg-white font-helvetica font-medium text-blckMain max-sm:justify-start -translate-x-1"
          >
            <div className="">
              <span ref={firstNameRef} className="text-center pl-1">
                D
              </span>
              <span ref={mytroRef} className="mr-1">
                mytro
              </span>
            </div>
            <div ref={lastNameParentRef} className="">
              <span ref={lastNameRef} className="text-center">
                L
              </span>
              <span ref={ytvynenkoRef}>ytvynenko</span>
            </div>
          </div>
          {!isMobile && (
            <div
              ref={shortNameRef}
              className="absolute top-0 left-1/2 -translate-x-1/2 flex justify-center w-[154px] rounded-xs bg-white font-helvetica font-medium text-blckMain"
            >
              <span>DL</span>
            </div>
          )}
          <p
            ref={subtitleRef}
            className="font-normal text-gry max-sm:text-start"
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
                className="font-helvetica text-base font-normal text-blckMain "
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
