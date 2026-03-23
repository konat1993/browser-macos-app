import { useRef } from "react";
import { renderText, setupTextHover } from "./utils";
import { useGSAP } from "@gsap/react";

export const Welcome = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);

  useGSAP(() => {
    const titleCleanup = setupTextHover({
      container: titleRef.current,
      type: "title",
    });
    const subtitleCleanup = setupTextHover({
      container: subtitleRef.current,
      type: "subtitle",
    });

    return () => {
      titleCleanup?.();
      subtitleCleanup?.();
    };
  }, []);

  return (
    <section id="welcome">
      <p ref={subtitleRef} className="max-w-[92vw] text-center leading-tight">
        <span className="block sm:inline whitespace-nowrap">
          {renderText({
            text: "Hey, I'm Lukasz! ",
            className: "font-georama text-[clamp(1.75rem,8.5vw,3rem)]",
            baseWeight: 100,
          })}
        </span>
        <span className="block sm:inline whitespace-nowrap">
          {renderText({
            text: "Welcome to my",
            className: "font-georama text-[clamp(1.75rem,8.5vw,3rem)]",
            baseWeight: 100,
          })}
        </span>
      </p>
      <h1 ref={titleRef} className="mt-4 max-w-[94vw] text-center leading-[0.9]">
        {renderText({
          text: "portfolio",
          className: "italic font-georama text-[clamp(4.5rem,23vw,10rem)]",
        })}
      </h1>

      <div className="small-screen">
        <p>Tap app icons in the dock to open windows on mobile.</p>
      </div>
    </section>
  );
};
