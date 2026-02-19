import { dockApps } from "#constants";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Tooltip } from "react-tooltip";
import { isWindowIdMatched, setupDockHover } from "./utils";
import { useWindowStore } from "#store";
import type { DockApp } from "#constants/types";

export const Dock = () => {
  const { windows, closeWindow, openWindow } = useWindowStore();

  const dockRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const dockCleanup = setupDockHover({
      container: dockRef.current,
    });

    return () => {
      dockCleanup?.();
    };
  }, []);

  const toggleApp = (app: { id: DockApp["id"]; canOpen: DockApp["canOpen"] }) => {
    if (!app.canOpen) return;
    if (!isWindowIdMatched(app.id)) return;

    const currentWindow = windows[app.id];

    if (currentWindow.isOpen) {
      closeWindow({ windowKey: app.id });
    } else {
      openWindow({ windowKey: app.id });
    }
  };

  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
        {dockApps.map(({ id, name, icon, canOpen }) => (
          <div key={id} className="relative flex justify-center">
            <button
              type="button"
              className="dock-icon"
              aria-label={name}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              data-tooltip-delay-show={150}
              disabled={!canOpen}
              onClick={() =>
                toggleApp({
                  id,
                  canOpen,
                })
              }
            >
              <img
                src={`/images/${icon}`}
                alt={name}
                loading="lazy"
                {...(!canOpen && {
                  className: "opacity-60",
                })}
              />
            </button>
          </div>
        ))}
        <Tooltip id="dock-tooltip" place="top" className="tooltip" />
      </div>
    </section>
  );
};
