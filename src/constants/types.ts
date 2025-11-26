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
		data: FileNode | null;
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

// Locations types
// ============
// Core Types
// ============

export type BaseNode = {
	id: number;
	name: string;
	icon: string;
	kind: "file" | "folder";
	position?: string; // position inside Finder
	windowPosition?: string; // optional Finder window position
};

// ------------------
// FILES
// ------------------

export type FileType = "txt" | "img" | "url" | "fig" | "pdf";

export interface FileNode extends BaseNode {
	kind: "file";
	fileType: FileType;
	href?: string;
	imageUrl?: string;
	description?: string[];
	subtitle?: string;
	image?: string;
}

// ------------------
// FOLDERS
// ------------------

export interface FolderNode extends BaseNode {
	kind: "folder";
	children: ExplorerNode[];
}

export type ExplorerNode = FileNode | FolderNode;

// ============
// LOCATIONS
// ============

export interface BaseLocation extends FolderNode {
	type: "work" | "about" | "resume" | "trash";
}

export type WorkLocation = BaseLocation & { type: "work" };
export type AboutLocation = BaseLocation & { type: "about" };
export type ResumeLocation = BaseLocation & { type: "resume" };
export type TrashLocation = BaseLocation & { type: "trash" };

export type Locations = {
	work: WorkLocation;
	about: AboutLocation;
	resume: ResumeLocation;
	trash: TrashLocation;
};
