import type { WindowKey } from "#constants/types";
import { useWindowStore } from "#store";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useLayoutEffect, useRef } from "react";

type Props<P> = {
  Component: React.ComponentType<P>;
  windowKey: WindowKey;
};

export const WindowWrapper = <P extends object>({ Component, windowKey }: Props<P>) => {
  const Wrapped = (props: P) => {
    const { focusWindow, windows } = useWindowStore();

    const { isOpen, zIndex, data } = windows[windowKey];
    const ref = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
      const el = ref.current;

      if (!el || !isOpen) return;
      el.style.display = "block";

      gsap.fromTo(
        el,
        { scale: 0, opacity: 0, y: 0 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
        },
      );
    }, [isOpen]);

    useGSAP(() => {
      const el = ref.current;

      if (!el || !isOpen) return;
      const headerHandle = el.querySelector<HTMLElement>("#window-header");
      if (!headerHandle) return;

      const [instance] = Draggable.create(el, {
        trigger: headerHandle,
        onPress: () => focusWindow({ windowKey }),
      });

      return () => {
        instance.kill();
      };
    }, [isOpen]);

    useLayoutEffect(() => {
      const el = ref.current;

      if (!el) return;
      el.style.display = isOpen ? "block" : "none";
    }, [isOpen]);

    const handlePointerDown = () => {
      if (!isOpen) return;
      focusWindow({ windowKey });
    };

    return (
      <section
        id={windowKey}
        ref={ref}
        className="absolute"
        onPointerDownCapture={handlePointerDown}
        style={{
          zIndex,
          ...(data?.width != null && { maxWidth: data.width }),
        }}
      >
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;

  return Wrapped;
};
