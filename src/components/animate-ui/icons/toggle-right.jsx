"use client";
import * as React from "react";
import { motion } from "motion/react";

import {
  getVariants,
  useAnimateIconContext,
  IconWrapper,
} from "@/components/animate-ui/icons/icon";

const animations = {
  default: {
    rect: {},

    circle: {
      initial: {
        x: 0,
      },
      animate: {
        x: [0, -7, -6],
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      },
    },
  },

  "default-loop": {
    rect: {},

    circle: {
      initial: {
        x: 0,
      },
      animate: {
        x: [0, -7, -6, 1, 0],
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      },
    },
  },
};

function IconComponent({ size, ...props }) {
  const { controls } = useAnimateIconContext();
  const variants = getVariants(animations);

  return (
    <motion.svg
      style={{ transform: "rotate(90deg)" }}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <motion.rect
        width={20}
        height={14}
        x={2}
        y={5}
        rx={7}
        variants={variants.rect}
        initial="initial"
        animate={controls}
      />
      <motion.circle
        cx={15}
        cy={12}
        r={3}
        variants={variants.circle}
        initial="initial"
        animate={controls}
      />
    </motion.svg>
  );
}

function ToggleRight(props) {
  return <IconWrapper icon={IconComponent} {...props} />;
}

export { animations, ToggleRight, ToggleRight as ToggleRightIcon };
