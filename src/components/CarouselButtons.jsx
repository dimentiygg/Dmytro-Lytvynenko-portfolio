import React, { useCallback } from "react";
import { ChevronRight } from "./animate-ui/icons/chevron-right";
import { ChevronLeft } from "./animate-ui/icons/chevron-left";

export const usePrevNextButtons = (emblaApi) => {
  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  return {
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const PrevButton = (props) => {
  const { children, className = "", ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--prev flex items-center justify-center absolute top-1/2 left-10 -translate-y-1/2 border-blckMain overflow-hidden "
      type="button"
      {...restProps}
    >
      <div className="flex items-center justify-center w-5 h-5 border-[0.5px] border-blckMain rounded-xs bg-white">
        <ChevronLeft animateOnHover />
      </div>
      {children}
    </button>
  );
};

export const NextButton = (props) => {
  const { children, className = "", ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--next flex items-center justify-center w-6 h-6 absolute top-1/2 right-10 -translate-y-1/2 border-blckMain overflow-hidden"
      type="button"
      {...restProps}
    >
      <div className="flex items-center justify-center w-5 h-5 border-[0.5px] border-blckMain rounded-xs bg-white">
        <ChevronRight animateOnHover />
      </div>

      {children}
    </button>
  );
};
