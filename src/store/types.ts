import type { WindowKey, WindowsConfig, WorkLocation } from "#constants/types";

export type WindowState = { windows: WindowsConfig; nextZIndex: number };

type WindowActionArgsType = {
	windowKey: WindowKey;
	data?: WindowsConfig[WindowKey]["data"];
};

export type WindowActions = {
	openWindow: (openWindowArgs: WindowActionArgsType) => void;
	closeWindow: (openWindowArgs: WindowActionArgsType) => void;
	focusWindow: (openWindowArgs: WindowActionArgsType) => void;
};

export type LocationState = {
	activeLocation: WorkLocation | null;
};

export type LocationActions = {
	setActiveLocation: (setActiveLocationArgs: WorkLocation | null) => void;
	resetActiveLocation: () => void;
};
