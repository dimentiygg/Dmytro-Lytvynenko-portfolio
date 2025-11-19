import React from "react";
import { SquareArrowOutUpRight } from "./animate-ui/icons/square-arrow-out-up-right";
import { AnimateIcon } from "./animate-ui/icons/icon";

const LinksMenu = ({ linkRef = null }) => {
  return (
    <ul className=" flex flex-col gap-2 pointer-events-auto font-helvetica font-normal text-base text-blckMain ">
      <li>
        <AnimateIcon animateOnHover>
          <a
            className="flex flex-row gap-2"
            target="_blank"
            href="https://www.linkedin.com/in/dima-lytvynenko/"
          >
            <div className=" relative z-200 flex items-center justify-center w-5 h-5 border-[0.5px] border-blckMain rounded-xs bg-white">
              <SquareArrowOutUpRight />
            </div>
            <span className="" ref={linkRef ? linkRef : null}>
              Linkedin
            </span>
          </a>
        </AnimateIcon>
      </li>
      <li>
        <AnimateIcon animateOnHover>
          <a
            className="flex flex-row gap-2"
            target="_blank"
            href="https://github.com/dimentiygg"
          >
            <div className="flex items-center justify-center w-5 h-5 border-[0.5px] border-blckMain rounded-xs bg-white">
              <SquareArrowOutUpRight />
            </div>
            <span className="" ref={linkRef ? linkRef : null}>
              GitHub
            </span>
          </a>
        </AnimateIcon>
      </li>
    </ul>
  );
};

export default LinksMenu;
