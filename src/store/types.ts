import type { WindowsData } from "#components/Dock/types";

export type WindowState = { windows: WindowsData; nextZIndex: number };

export type OpenWindowArgsType = {
	windowKey: keyof WindowsData;
	data?: null;
};

export type WindowActions = {
	openWindow: (openWindowArgs: OpenWindowArgsType) => void;
	closeWindow: (openWindowArgs: OpenWindowArgsType) => void;
	focusWindow: (openWindowArgs: OpenWindowArgsType) => void;
};
