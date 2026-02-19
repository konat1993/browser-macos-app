import type {
  WindowKey,
  WindowsConfig,
  WorkLocation,
  ResumeLocation,
  TrashLocation,
  FileType,
  BaseNode,
  ExplorerNode,
} from "#constants/types";

export type WindowState = { windows: WindowsConfig; nextZIndex: number };

type WindowActionArgsType = {
  windowKey: WindowKey | `${FileType}${BaseNode["kind"]}`;
  data?: WindowsConfig[WindowKey]["data"];
};

export const isValidWindowKey = (windows: WindowsConfig, key: string): key is WindowKey => {
  return key in windows;
};

export type WindowActions = {
  openWindow: (openWindowArgs: WindowActionArgsType) => void;
  closeWindow: (openWindowArgs: WindowActionArgsType) => void;
  focusWindow: (openWindowArgs: WindowActionArgsType) => void;
};

export type LocationState = {
  activeLocation: WorkLocation | ResumeLocation | TrashLocation | ExplorerNode | null;
};

export type LocationActions = {
  setActiveLocation: (setActiveLocationArgs: LocationState["activeLocation"]) => void;
  resetActiveLocation: () => void;
};
