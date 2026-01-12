import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { PrevButton, NextButton, usePrevNextButtons } from "./CarouselButtons";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

const Hero = () => {
  const options = {
    slidesToScroll: 1,
    loop: true,
    dragFree: false,
    skipSnaps: true,
    containScroll: "trimSnaps",
    duration: 15,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    WheelGesturesPlugin(),
  ]);

  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);
  const slides = [
    {
      name: "Aquatrack app",
      img: "/images/AquaApp.png",
      link: "https://project-aqua-app-front.vercel.app/",
      containerColor: "#F0EFF4",
      index: 1,
    },
    {
      name: "Suburia Skateboard",
      img: "/images/SuburiaSkateboard.png",
      link: "https://idyllic-meerkat-a67a4c.netlify.app/",
      containerColor: "#FFF3FB",
      index: 2,
    },
    {
      name: "3legant shop",
      img: "/images/3legantShop.png",
      link: "https://3legant-shop-v3.vercel.app/",
      containerColor: "#F0F0F0",
      index: 3,
    },
    {
      name: "Budivelnyk shop",
      img: "/images/Budivelnyk.png",
      link: "https://budivelnyk.vercel.app/",
      containerColor: "#F0EFF4",
      index: 4,
    },
    {
      name: "Jefferson Website",
      img: "/images/JeffersonWebsite.png",
      link: "https://fulaytar.github.io/team_project_Portfolio/",
      containerColor: "#F0EFF4",
      index: 5,
    },
  ];
  return (
    // <section className="relative z-60 h-screen">
    //   <div className="embla relative overflow-hidden" ref={emblaRef}>
    //     <div className="embla__container relative flex gap-5 max-sm:gap-2 ">
    //       {slides.map(({ name, img, link, containerColor, index }) => (
    //         <div
    //           className="embla__slide flex justify-center items-center  h-[60vh] p-[40px] group border-containerBorder border rounded-lg max-sm:px-[18px] max-sm:py-0 last:mr-5 max-sm:last:mr-2 "
    //           key={index}
    //           style={{ backgroundColor: containerColor }}
    //         >
    //           <img className="rounded-xl" src={img} alt={name} />
    //           <div className="absolute bottom-0 left-2 w-[240px] h-[52px] py-4 pl-4 bg-white rounded-lg shadow-soft font-helvetica font-normal text-sm text-blckMain translate-y-full group-hover:translate-y-[-8px] transition-all duration-300 ease-out ">
    //             <p>{name}</p>
    //           </div>
    //           <a
    //             className="absolute inset-0 z-10  "
    //             target="blank"
    //             href={link}
    //           ></a>
    //         </div>
    //       ))}
    //     </div>
    //     <div className="embla__controls">
    //       <div className="embla__buttons">
    //         <PrevButton onClick={onPrevButtonClick} />
    //         <NextButton onClick={onNextButtonClick} />
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="relative z-60 h-screen flex justify-center items-center">
      <div className="embla relative overflow-hidden my-auto " ref={emblaRef}>
        <div className="embla__container relative flex gap-5 max-sm:gap-2 ">
          {slides.map(({ name, img, link, containerColor, index }) => (
            <div
              className="embla__slide flex justify-center items-center px-10 py-8 group border-containerBorder border rounded-lg max-sm:rounded-md max-sm:px-[18px] last:mr-5 max-sm:last:mr-2 max-sm:py-[126px]"
              key={index}
              style={{ backgroundColor: containerColor }}
            >
              <img
                className="rounded-xl max-sm:rounded-sm aspect-video object-cover "
                src={img}
                alt={name}
              />
              <div className="absolute -bottom-1 left-2 w-[240px] h-[52px] py-4 pl-4 bg-white rounded-lg shadow-soft font-helvetica font-normal text-sm text-blckMain translate-y-full group-hover:translate-y-[-12px] transition-all duration-300 ease-out ">
                <p>{name}</p>
              </div>
              <a
                className="absolute inset-0 z-10  "
                target="blank"
                href={link}
              ></a>
            </div>
          ))}
        </div>
        <div className="embla__controls">
          <div className="embla__buttons max-sm:hidden">
            <PrevButton onClick={onPrevButtonClick} />
            <NextButton onClick={onNextButtonClick} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
