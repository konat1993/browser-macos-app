export type WindowKey =
	| "finder"
	| "safari"
	| "photos"
	| "contact"
	| "terminal"
	| "resume"
	| "txtfile"
	| "imgfile";

export type WindowsConfig = {
	[key in WindowKey]: {
		isOpen: boolean;
		zIndex: number;
		data: null;
	};
};

export type NavLink = {
	id: number;
	name: string;
	type: WindowKey;
};

export type NavIcons = {
	id: number;
	img: string;
};

export type DockApp = {
	id: WindowKey | "trash";
	canOpen: boolean;
	icon: string;
	name: string;
};

export type TechStack = {
	category: string;
	items: string[];
};
export type BlogPost = {
	id: number;
	date: string;
	title: string;
	image: string;
	link: string;
};
