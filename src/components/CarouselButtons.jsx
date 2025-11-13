import React, { useCallback, useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("reInit", onSelect);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const PrevButton = (props) => {
  const { children, className = "", disabled, ...restProps } = props;

  return (
    <button
      className={`embla__button embla__button--prev flex items-center justify-center w-6 h-6 absolute top-1/2 left-10 -translate-y-1/2 bg-black transition-all duration-300 active:scale-90 ${
        disabled
          ? "opacity-0 pointer-events-none"
          : "opacity-100 pointer-events-auto"
      } ${className}`}
      type="button"
      disabled={disabled}
      {...restProps}
    >
      <IoIosArrowBack size={15} color="white" />
      {children}
    </button>
  );
};

export const NextButton = (props) => {
  const { children, className = "", disabled, ...restProps } = props;

  return (
    <button
      className={`embla__button embla__button--next flex items-center justify-center w-6 h-6 absolute top-1/2 right-10 -translate-y-1/2 bg-black transition-all duration-300 active:scale-90 ${
        disabled
          ? "opacity-0 pointer-events-none"
          : "opacity-100 pointer-events-auto"
      } ${className}`}
      type="button"
      disabled={disabled}
      {...restProps}
    >
      <IoIosArrowForward size={15} color="white" />
      {children}
    </button>
  );
};
