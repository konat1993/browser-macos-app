import { Dock, Navbar, Welcome } from "#components";
import type { WindowKey } from "#constants/types";
import { useWindowStore } from "#store";
import {
  ContactWindow,
  FinderWindow,
  ImageWindow,
  MarkdownWindow,
  ResumeWindow,
  SafariWindow,
  TerminalWindow,
  TextWindow,
} from "#windows";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useHotkeys } from "react-hotkeys-hook";

gsap.registerPlugin(Draggable);

const App = () => {
  const { windows, closeWindow } = useWindowStore();

  useHotkeys(
    "esc",
    (event) => {
      if (event.repeat) return;

      event.preventDefault();
      event.stopPropagation();

      const activeWindow = Object.entries(windows)
        .filter(([, window]) => window.isOpen)
        .sort(([, left], [, right]) => right.zIndex - left.zIndex)
        .at(0);

      if (!activeWindow) return;

      closeWindow({
        windowKey: activeWindow[0] as WindowKey,
      });
    },
    {
      preventDefault: true,
      enableOnFormTags: true,
      enableOnContentEditable: true,
      keydown: true,
      keyup: false,
    },
    [windows, closeWindow],
  );

  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <TerminalWindow />
      <SafariWindow />
      <ResumeWindow />
      <FinderWindow />
      <TextWindow />
      <ImageWindow />
      <MarkdownWindow />
      <ContactWindow />
    </main>
  );
};

export default App;
