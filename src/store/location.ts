import { locations } from "#constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { LocationActions, LocationState } from "./types";

const DEFAULT_LOCATION = locations.work;

export const useLocationStore = create(
  immer<LocationState & LocationActions>((set) => ({
    activeLocation: DEFAULT_LOCATION,
    setActiveLocation: (location) =>
      set((state) => {
        if (!location) return;
        state.activeLocation = location;
      }),
    resetActiveLocation: () =>
      set((state) => {
        state.activeLocation = DEFAULT_LOCATION;
      }),
  })),
);
