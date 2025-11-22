import type { WindowKey, WindowsConfig } from "#constants/types";

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
