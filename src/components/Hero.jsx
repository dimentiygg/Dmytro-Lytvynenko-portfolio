import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { PrevButton, NextButton, usePrevNextButtons } from "./CarouselButtons";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

const Hero = () => {
  const options = { slidesToScroll: 1, loop: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    WheelGesturesPlugin(),
  ]);

  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <section className="relative z-60 mb-[128px]">
      <div className="embla relative overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-5 ">
          <div className="embla__slide relative p-[40px] group bg-whtContainer border-containerBorder border rounded-lg">
            <a
              target="blank"
              href="https://github.com/oleksasa/project-AquaApp-front"
            >
              <img
                className="rounded-xl"
                src="/images/AquaApp.png"
                alt="AquaApp website"
              />
              <div className="absolute bottom-0 left-2 w-[240px] h-[52px] py-4 pl-4 bg-white rounded-lg shadow-soft font-helvetica font-normal text-sm translate-y-full group-hover:translate-y-[-8px] transition-all duration-300 ease-out ">
                <p>Aquatrack app</p>
              </div>
            </a>
          </div>
          <div className="embla__slide relative p-[40px] group bg-whtContainer border-containerBorder border rounded-lg">
            <a
              target="blank"
              href="https://github.com/dimentiygg/skateboard-website"
            >
              <img
                className="rounded-xl"
                src="/images/SuburiaSkateboard.png"
                alt="Skateboard shop"
              />
              <div className="absolute bottom-0 left-2 w-[240px] h-[52px] py-4 pl-4 bg-white rounded-lg shadow-soft font-helvetica font-normal text-sm translate-y-full group-hover:translate-y-[-8px] transition-all duration-300 ease-out ">
                <p>Suburia Skateboard</p>
              </div>
            </a>
          </div>
          <div className="embla__slide relative p-[40px] group bg-whtContainer border-containerBorder border rounded-lg">
            <a
              target="blank"
              href="https://github.com/dimentiygg/3legantShopV2"
            >
              <img
                className="rounded-xl"
                src="/images/3legantShop.png"
                alt="3legant shop"
              />
              <div className="absolute bottom-0 left-2 w-[240px] h-[52px] py-4 pl-4 bg-white rounded-lg shadow-soft font-helvetica font-normal text-sm translate-y-full group-hover:translate-y-[-8px] transition-all duration-300 ease-out ">
                <p>3legant Shop</p>
              </div>
            </a>
          </div>
          <div className="embla__slide relative p-[40px] group bg-whtContainer border-containerBorder border rounded-lg">
            <a target="blank" href="https://github.com/dimentiygg/Budivelnyk">
              <img
                className="rounded-xl"
                src="/images/Budivelnyk.png"
                alt="budivelnyk shop"
              />
              <div className="absolute bottom-0 left-2 w-[240px] h-[52px] py-4 pl-4 bg-white rounded-lg shadow-soft font-helvetica font-normal text-sm translate-y-full group-hover:translate-y-[-8px] transition-all duration-300 ease-out ">
                <p>Budivelnyk</p>
              </div>
            </a>
          </div>
          <div className="embla__slide relative p-[40px] group bg-whtContainer border-containerBorder border rounded-lg">
            <a
              target="blank"
              href="https://github.com/fulaytar/team_project_Portfolio"
            >
              <img
                className="rounded-xl"
                src="/images/JeffersonWebsite.png"
                alt="Jefferson personal website"
              />
              <div className="absolute bottom-0 left-2 w-[240px] h-[52px] py-4 pl-4 bg-white rounded-lg shadow-soft font-helvetica font-normal text-sm translate-y-full group-hover:translate-y-[-8px] transition-all duration-300 ease-out ">
                <p>Jefferson Website</p>
              </div>
            </a>
          </div>
        </div>
        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton onClick={onPrevButtonClick} />
            <NextButton onClick={onNextButtonClick} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
