import type { WindowKey } from "#constants/types";
import { useWindowStore } from "#store";

export const WindowControls = ({ target }: { target: WindowKey }) => {
  const { closeWindow } = useWindowStore();
  return (
    <div id="window-controls">
      <div className="close" onClick={() => closeWindow({ windowKey: target })} />
      <div className="minimize" />
      <div className="maximize" />
    </div>
  );
};
