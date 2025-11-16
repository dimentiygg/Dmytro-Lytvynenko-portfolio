import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { PrevButton, NextButton, usePrevNextButtons } from "./CarouselButtons";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

const Hero = () => {
  const options = { slidesToScroll: 1, loop: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    WheelGesturesPlugin(),
  ]);
  // flex items-center justify-center rounded-lg bg-red-700 h-[540px] w-[800px]

  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <section className="relative z-60 mb-72">
      <div className="embla relative overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-5 ">
          <div className="embla__slide p-[40px] bg-whtContainer border-containerBorder border rounded-lg">
            <img className="" src="/images/AquaApp.png" alt="AquaApp website" />
          </div>
          <div className="embla__slide p-[40px] bg-whtContainer border-containerBorder border rounded-lg">
            <img src="/images/SuburiaSkateboard.png" alt="Skateboard shop" />
          </div>
          <div className="embla__slide p-[40px] bg-whtContainer border-containerBorder border rounded-lg">
            <img src="/images/3legantShop.png" alt="3legant shop" />
          </div>
          <div className="embla__slide p-[40px] bg-whtContainer border-containerBorder border rounded-lg">
            <img src="/images/Budivelnyk.png" alt="budivelnyk shop" />
          </div>
          <div className="embla__slide p-[40px] bg-whtContainer border-containerBorder border rounded-lg">
            <img
              src="/images/JeffersonWebsite.png"
              alt="Jefferson personal website"
            />
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
