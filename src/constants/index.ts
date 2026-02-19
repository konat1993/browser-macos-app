import type {
	AboutLocation,
	Experience,
	DockApp,
	Locations,
	NavIcons,
	NavLink,
	ResumeLocation,
	TechStack,
	TrashLocation,
	WindowsConfig,
	WorkLocation,
} from "./types";

export const navLinks: NavLink[] = [
	{
		id: 1,
		name: "Projects",
		type: "finder",
	},
	{
		id: 2,
		name: "Contact",
		type: "contact",
	},
	{
		id: 3,
		name: "Resume",
		type: "resume",
	},
];

export const navIcons: NavIcons[] = [
	{
		id: 1,
		img: "/icons/wifi.svg",
	},
	{
		id: 2,
		img: "/icons/search.svg",
	},
	{
		id: 3,
		img: "/icons/user.svg",
	},
	{
		id: 4,
		img: "/icons/mode.svg",
	},
];

export const dockApps: DockApp[] = [
	{
		id: "finder",
		name: "Portfolio", // was "Finder"
		icon: "finder.png",
		canOpen: true,
	},
	{
		id: "safari",
		name: "Articles", // was "Safari"
		icon: "safari.png",
		canOpen: true,
	},
	{
		id: "photos",
		name: "Gallery", // was "Photos"
		icon: "photos.png",
		canOpen: true,
	},
	{
		id: "contact",
		name: "Contact", // or "Get in touch"
		icon: "contact.png",
		canOpen: true,
	},
	{
		id: "terminal",
		name: "Skills", // was "Terminal"
		icon: "terminal.png",
		canOpen: true,
	},
	{
		id: "trash",
		name: "Archive", // was "Trash"
		icon: "trash.png",
		canOpen: false,
	},
];

export const experiences: Experience[] = [
	{
		id: 1,
		title: "Advertising Campaign Management Platform",
		stack: [
			"TypeScript",
			"React",
			"AntD",
			"styled-components",
			"Redux",
		],
		contributions: [
			"Built responsive and reusable UI components",
			"Integrated REST API endpoints and coordinated API contract updates",
			"Created and maintained unit & integration tests (Vitest, RTL)",
			"Participated in code reviews and improved coding standards",
			"Collaborated with product owners and stakeholders on requirements",
			"Managed tasks and documentation in Jira + Confluence",
		],
	},
	{
		id: 2,
		title: "Advertising Banners Management Platform",
		stack: ["TypeScript", "Vue 3", "Nuxt 3", "Vuetify", "SASS"],
		contributions: [
			"Implemented full-stack features in Nuxt 3 (frontend + server routes)",
			"Built reusable UI components and design-system-aligned layouts",
			"Integrated REST APIs for creatives management",
			"Worked with analytics and tag-management tools",
			"Onboarded new frontend developers",
			"Participated in code reviews and maintained documentation",
		],
	},
	{
		id: 3,
		title: "User Consent Management Platform (Cookies)",
		stack: [
			"TypeScript",
			"React",
			"Material UI",
			"styled-components",
			"React Query",
		],
		contributions: [
			"Developed responsive UI components",
			"Integrated REST APIs for consent management",
			"Implemented state management with React Query",
			"Built unit & integration tests (Vitest, RTL)",
			"Worked closely with UX/UI designers to deliver pixel-perfect components",
		],
	},
];

export const techStack: TechStack[] = [
	{
		category: "Frontend",
		items: ["React.js", "Next.js", "TypeScript", "Angular"],
	},
	{
		category: "Mobile",
		items: ["React Native"],
	},
	{
		category: "Styling",
		items: [
			"Tailwind CSS",
			"Sass",
			"CSS",
			"Material UI",
			"Ant Design",
			"Styled Components",
		],
	},
	// {
	// 	category: "Backend",
	// 	items: ["Node.js", "Express", "NestJS"],
	// },
	// {
	// 	category: "Database",
	// 	items: ["MongoDB", "PostgreSQL"],
	// },
	{
		category: "Dev Tools",
		items: ["Git", "GitHub", "Docker"],
	},
];

export const socials = [
	{
		id: 1,
		text: "LinkedIn",
		icon: "/icons/linkedin.svg",
		bg: "#05b6f6",
		link: "https://www.linkedin.com/in/lukasz-konatowski",
		disabled: false,
	},
	{
		id: 2,
		text: "Github",
		icon: "/icons/github.svg",
		bg: "#f4656b",
		link: "https://github.com/konat1993",
		disabled: false,
	},
	{
		id: 3,
		text: "Platform",
		icon: "/icons/atom.svg",
		bg: "#4bcb63",
		link: "/",
		disabled: true,
	},
	{
		id: 4,
		text: "Twitter/X",
		icon: "/icons/twitter.svg",
		bg: "#ff866b",
		link: "/",
		disabled: true,
	},
];

export const photosLinks = [
	{
		id: 1,
		icon: "/icons/gicon1.svg",
		title: "Library",
	},
	{
		id: 2,
		icon: "/icons/gicon2.svg",
		title: "Memories",
	},
	{
		id: 3,
		icon: "/icons/file.svg",
		title: "Places",
	},
	{
		id: 4,
		icon: "/icons/gicon4.svg",
		title: "People",
	},
	{
		id: 5,
		icon: "/icons/gicon5.svg",
		title: "Favorites",
	},
];

export const gallery = [
	{
		id: 1,
		img: "/images/gal1.png",
	},
	{
		id: 2,
		img: "/images/gal2.png",
	},
	{
		id: 3,
		img: "/images/gal3.png",
	},
	{
		id: 4,
		img: "/images/gal4.png",
	},
];

const WORK_LOCATION: WorkLocation = {
	id: 1,
	type: "work",
	name: "Work",
	icon: "/icons/work.svg",
	kind: "folder",
	children: [
		// ▶ Project 1
		{
			id: 5,
			name: "Nike Ecommerce Website Application",
			icon: "/images/folder.png",
			kind: "folder",
			position: "top-10 left-5", // icon position inside Finder
			windowPosition: "top-[5vh] left-5", // optional: Finder window position
			children: [
				{
					id: 1,
					name: "Nike Project.txt",
					icon: "/images/txt.png",
					kind: "file",
					fileType: "txt",
					position: "top-5 left-10",
					description: [
						"The Nike eCommerce website is a sleek and modern platform designed for shopping the latest Nike collections.",
						"Instead of a simple online store, it delivers an immersive experience with bold visuals, interactive product displays, and smooth navigation.",
						"Think of it like walking into a flagship Nike store—but right from your phone or laptop.",
						"It's built with Next.js and Tailwind, ensuring fast performance, responsive design, and a clean, premium look.",
					],
				},
				{
					id: 2,
					name: "nike.com",
					icon: "/images/safari.png",
					kind: "file",
					fileType: "url",
					href: "https://youtu.be/fZdTYswuZjU?si=Awjl-pIst9e09_UU",
					position: "top-10 right-20",
				},
				{
					id: 4,
					name: "nike.png",
					icon: "/images/image.png",
					kind: "file",
					fileType: "img",
					position: "top-52 right-80",
					imageUrl: "/images/project-1.png",
				},
				{
					id: 5,
					name: "Design.fig",
					icon: "/images/plain.png",
					kind: "file",
					fileType: "fig",
					href: "https://google.com",
					position: "top-60 right-20",
				},
			],
		},

		// ▶ Project 2
		{
			id: 6,
			name: "AI Resume Analyzer",
			icon: "/images/folder.png",
			kind: "folder",
			position: "top-52 right-80",
			windowPosition: "top-[20vh] left-7",
			children: [
				{
					id: 1,
					name: "AI Resume Analyzer Project.txt",
					icon: "/images/txt.png",
					kind: "file",
					fileType: "txt",
					position: "top-5 right-10",
					description: [
						"AI Resume Analyzer is a smart tool that helps you perfect your resume with instant feedback.",
						"Instead of guessing what recruiters want, you get AI-powered insights on keywords, formatting, and overall impact.",
						"Think of it like having a career coach—pointing out strengths, fixing weaknesses, and boosting your chances of landing interviews.",
						"It's built with Next.js and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
					],
				},
				{
					id: 2,
					name: "ai-resume-analyzer.com",
					icon: "/images/safari.png",
					kind: "file",
					fileType: "url",
					href: "https://youtu.be/iYOz165wGkQ?si=R1hs8Legl200m0Cl",
					position: "top-20 left-20",
				},
				{
					id: 4,
					name: "ai-resume-analyzer.png",
					icon: "/images/image.png",
					kind: "file",
					fileType: "img",
					position: "top-52 left-80",
					imageUrl: "/images/project-2.png",
				},
				{
					id: 5,
					name: "Design.fig",
					icon: "/images/plain.png",
					kind: "file",
					fileType: "fig",
					href: "https://google.com",
					position: "top-60 left-5",
				},
			],
		},

		// ▶ Project 3
		{
			id: 7,
			name: "Food Delivery App",
			icon: "/images/folder.png",
			kind: "folder",
			position: "top-10 left-80",
			windowPosition: "top-[33vh] left-7",
			children: [
				{
					id: 1,
					name: "Food Delivery App Project.txt",
					icon: "/images/txt.png",
					kind: "file",
					fileType: "txt",
					position: "top-5 left-10",
					description: [
						"Our Food Delivery App is a fast and convenient way to order meals from your favorite restaurants.",
						"Instead of making calls or waiting in line, you can browse menus, customize orders, and track deliveries in real time.",
						"Think of it like having your favorite restaurants in your pocket—ready to deliver anytime, anywhere.",
						"It’s built with React Native, so it works smoothly on both iOS and Android with a clean, modern design.",
					],
				},
				{
					id: 2,
					name: "food-delivery-app.com",
					icon: "/images/safari.png",
					kind: "file",
					fileType: "url",
					href: "https://youtu.be/LKrX390fJMw?si=cExkuVhf2DTV9G2-",
					position: "top-10 right-20",
				},
				{
					id: 4,
					name: "food-delivery-app.png",
					icon: "/images/image.png",
					kind: "file",
					fileType: "img",
					position: "top-52 right-80",
					imageUrl: "/images/project-3.png",
				},
				{
					id: 5,
					name: "Design.fig",
					icon: "/images/plain.png",
					kind: "file",
					fileType: "fig",
					href: "https://google.com",
					position: "top-60 right-20",
				},
			],
		},
	],
};

const ABOUT_LOCATION: AboutLocation = {
	id: 2,
	type: "about",
	name: "About me",
	icon: "/icons/info.svg",
	kind: "folder",
	children: [
		{
			id: 1,
			name: "me.png",
			icon: "/images/image.png",
			kind: "file",
			fileType: "img",
			position: "top-10 left-5",
			imageUrl: "/images/adrian.jpg",
		},
		{
			id: 2,
			name: "casual-me.png",
			icon: "/images/image.png",
			kind: "file",
			fileType: "img",
			position: "top-28 right-72",
			imageUrl: "/images/adrian-2.jpg",
		},
		{
			id: 3,
			name: "conference-me.png",
			icon: "/images/image.png",
			kind: "file",
			fileType: "img",
			position: "top-52 left-80",
			imageUrl: "/images/adrian-3.jpeg",
		},
		{
			id: 4,
			name: "about-me.txt",
			icon: "/images/txt.png",
			kind: "file",
			fileType: "txt",
			position: "top-60 left-5",
			subtitle: "Meet the Developer Behind the Code",
			image: "/images/adrian.jpg",
			description: [
				"Hey! I’m Adrian 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
				"I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
				"I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
				"Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
			],
		},
	],
};

const RESUME_LOCATION: ResumeLocation = {
	id: 3,
	type: "resume",
	name: "Resume",
	icon: "/icons/file.svg",
	kind: "folder",
	children: [
		{
			id: 1,
			name: "Resume.pdf",
			icon: "/images/pdf.png",
			kind: "file",
			fileType: "pdf",
			// you can add `href` if you want to open a hosted resume
			// href: "/your/resume/path.pdf",
		},
	],
};

const TRASH_LOCATION: TrashLocation = {
	id: 4,
	type: "trash",
	name: "Trash",
	icon: "/icons/trash.svg",
	kind: "folder",
	children: [
		{
			id: 1,
			name: "trash1.png",
			icon: "/images/image.png",
			kind: "file",
			fileType: "img",
			position: "top-10 left-10",
			imageUrl: "/images/trash-1.png",
		},
		{
			id: 2,
			name: "trash2.png",
			icon: "/images/image.png",
			kind: "file",
			fileType: "img",
			position: "top-40 left-80",
			imageUrl: "/images/trash-2.png",
		},
	],
};

export const locations: Locations = {
	work: WORK_LOCATION,
	about: ABOUT_LOCATION,
	resume: RESUME_LOCATION,
	trash: TRASH_LOCATION,
};

export const INITIAL_Z_INDEX = 1000;

export const WINDOW_CONFIG: WindowsConfig = {
	finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};
