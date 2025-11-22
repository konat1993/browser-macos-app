import type { WindowsData } from "#components/Dock/types";

export type WindowState = { windows: WindowsData; nextZIndex: number };

export type WindowActionArgsType = {
	windowKey: keyof WindowsData;
	data?: null;
};

export type WindowActions = {
	openWindow: (openWindowArgs: WindowActionArgsType) => void;
	closeWindow: (openWindowArgs: WindowActionArgsType) => void;
	focusWindow: (openWindowArgs: WindowActionArgsType) => void;
};
