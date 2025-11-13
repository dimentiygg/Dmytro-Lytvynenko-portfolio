import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { PrevButton, NextButton, usePrevNextButtons } from "./CarouselButtons";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  const options = { dragFree: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    WheelGesturesPlugin(),
  ]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="relative z-60 mb-72">
      <div className="embla relative" ref={emblaRef}>
        <div className="embla__container flex gap-4 ">
          <div className="embla__slide">
            <img src="/public/images/AquaApp.png" alt="AquaApp website" />
          </div>
          <div className="embla__slide">
            <img
              src="/public/images/SuburiaSkateboard.png"
              alt="Skateboard shop"
            />
          </div>
          <div className="embla__slide">
            <img src="/public/images/3legantShop.png" alt="3legant shop" />
          </div>
          <div className="embla__slide">
            <img src="/public/images/Budivelnyk.png" alt="budivelnyk shop" />
          </div>
          <div className="embla__slide">
            <img
              src="/public/images/JeffersonWebsite.png"
              alt="Jefferson personal website"
            />
          </div>
        </div>
        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
