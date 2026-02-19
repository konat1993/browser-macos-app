import gsap from "gsap";
import type { FontWeights } from "./types";

export const renderText = ({
  text,
  className,
  baseWeight = 400,
}: {
  text: string;
  className?: string;
  baseWeight?: number;
}) => {
  return [...text].map((char, idx) => {
    return (
      <span
        key={idx}
        className={className}
        style={{
          fontVariationSettings: `'wght' ${baseWeight}`,
        }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    );
  });
};

const FONT_WEIGHTS: FontWeights = {
  subtitle: {
    min: 100,
    max: 400,
    base: 100,
  },
  title: {
    min: 400,
    max: 900,
    base: 400,
  },
};

const animateLetter = ({
  letter,
  weight,
  duration = 0.25,
}: {
  letter: HTMLSpanElement;
  weight: number;
  duration?: number;
}) => {
  return gsap.to(letter, {
    duration,
    ease: "power2.out",
    fontVariationSettings: `'wght' ${weight}`,
  });
};

const handleMouseLeave = ({
  letters,
  weight,
}: {
  letters: NodeListOf<HTMLSpanElement>;
  weight: number;
}) => {
  letters.forEach((letter) => {
    animateLetter({
      letter,
      weight,
      duration: 0.3,
    });
  });
};

const handleMouseMove = ({
  event,
  container,
  letters,
  min,
  max,
}: {
  event: MouseEvent;
  container: HTMLSpanElement;
  letters: NodeListOf<HTMLSpanElement>;
  min: number;
  max: number;
}) => {
  const { left } = container.getBoundingClientRect();
  const mouseX = event.clientX - left;

  letters.forEach((letter) => {
    const { left: l, width: w } = letter.getBoundingClientRect();
    const distance = Math.abs(mouseX - (l - left + w / 2));
    const intensity = Math.exp(-(distance ** 2) / 20000);

    animateLetter({
      letter,
      weight: min + (max - min) * intensity,
    });
  });
};

export const setupTextHover = ({
  container,
  type,
}: {
  container: HTMLElement | null;
  type: keyof FontWeights;
}) => {
  if (!container) return;

  const letters = container.querySelectorAll("span");

  const { min, max, base } = FONT_WEIGHTS[type];

  const handleMouseMoveWrapper = (event: MouseEvent) => {
    handleMouseMove({
      event,
      container,
      letters,
      min,
      max,
    });
  };
  const handleMouseLeaveWrapper = () => {
    handleMouseLeave({
      letters,
      weight: base,
    });
  };

  container.addEventListener("mousemove", handleMouseMoveWrapper);
  container.addEventListener("mouseleave", handleMouseLeaveWrapper);

  return () => {
    container.removeEventListener("mousemove", handleMouseMoveWrapper);
    container.removeEventListener("mouseleave", handleMouseLeaveWrapper);
  };
};
