import type {
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
    canOpen: false,
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
    logo: "/images/ad-web-logo.png",
    stack: ["TypeScript", "React", "AntD", "styled-components", "Redux"],
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
    logo: "/images/ad-logo.png",
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
    stack: ["TypeScript", "React", "Material UI", "styled-components", "React Query"],
    logo: "/images/cookie-logo.png",
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
    items: ["Tailwind CSS", "Sass", "CSS", "Material UI", "Ant Design", "Styled Components"],
  },
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

const WORK_LOCATION: WorkLocation = {
  id: 1,
  type: "work",
  name: "Projects",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "React Native Todo App",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "README.md",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "md",
          position: "top-5 left-10",
          markDownUrlFile: "/files/react-native-readme.md",
        },
        {
          id: 2,
          name: "app-github",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/konat1993/react-native-todo-app",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "app-shots.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          images: [
            "/images/react-native-shot-1.jpg",
            "/images/react-native-shot-2.jpg",
            "/images/react-native-shot-3.jpg",
            "/images/react-native-shot-4.jpg",
            "/images/react-native-shot-5.jpg",
          ],
        },
        {
          id: 4,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://www.figma.com/",
          position: "top-60 right-20",
        },
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
  md: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};
