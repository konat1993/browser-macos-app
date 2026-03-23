import type { WindowKey } from "#constants/types";
import { useWindowStore } from "#store";
import type { PointerEvent } from "react";

export const WindowControls = ({ target }: { target: WindowKey }) => {
  const { closeWindow } = useWindowStore();
  const closeTargetWindow = () => closeWindow({ windowKey: target });

  const handleClosePointerUp = (event: PointerEvent<HTMLButtonElement>) => {
    if (event.pointerType !== "touch") return;
    event.preventDefault();
    closeTargetWindow();
  };

  return (
    <div id="window-controls">
      <div className="close-wrap">
        <button
          type="button"
          className="close"
          aria-label={`Close ${target} window`}
          onClick={closeTargetWindow}
          onPointerUp={handleClosePointerUp}
        />
        <span className="close-tooltip max-lg:hidden" aria-hidden="true">
          Esc
        </span>
      </div>
      <div className="minimize" />
      <div className="maximize" />
    </div>
  );
};
