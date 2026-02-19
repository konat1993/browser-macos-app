import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { isValidWindowKey, type WindowActions, type WindowState } from "./types";

export const useWindowStore = create(
  immer<WindowState & WindowActions>((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: ({ windowKey, data = null }) =>
      set((state) => {
        if (!isValidWindowKey(state.windows, windowKey)) {
          console.warn(`Invalid window key: ${windowKey}`);
          return;
        }

        const window = state.windows[windowKey];
        window.isOpen = true;
        window.zIndex = state.nextZIndex;
        window.data = data ?? window.data;
        state.nextZIndex++;
      }),

    closeWindow: ({ windowKey }) =>
      set((state) => {
        if (!isValidWindowKey(state.windows, windowKey)) {
          console.warn(`Invalid window key: ${windowKey}`);
          return;
        }

        const window = state.windows[windowKey];
        window.isOpen = false;
        window.zIndex = INITIAL_Z_INDEX;
        window.data = null;
      }),

    focusWindow: ({ windowKey }) =>
      set((state) => {
        if (!isValidWindowKey(state.windows, windowKey)) {
          console.warn(`Invalid window key: ${windowKey}`);
          return;
        }

        const window = state.windows[windowKey];
        window.zIndex = state.nextZIndex++;
      }),
  })),
);
