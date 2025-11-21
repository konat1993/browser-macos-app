import gsap from "gsap";

const animateIcons = ({
	mouseX,
	dock,
	icons,
}: {
	mouseX: number;
	dock: HTMLDivElement;
	icons: NodeListOf<HTMLButtonElement>;
}) => {
	const { left } = dock.getBoundingClientRect();

	icons.forEach((icon) => {
		const { left: iconLeft, width } = icon.getBoundingClientRect();

		const center = iconLeft - left + width / 2;
		const distance = Math.abs(mouseX - center);
		const intensity = Math.exp(-(distance ** 2.5) / 20000);

		gsap.to(icon, {
			scale: 1 + 0.25 * intensity,
			y: -15 * intensity,
			duration: 0.2,
			ease: "power1.out",
		});
	});
};

export const setupDockHover = ({
	container: dock,
}: {
	container: HTMLDivElement | null;
}) => {
	if (!dock) return;

	const icons: NodeListOf<HTMLButtonElement> =
		dock.querySelectorAll(".dock-icon");

	const handleMouseMove = (event: MouseEvent) => {
		const { left } = dock.getBoundingClientRect();
		const mouseX = event.clientX - left;
		animateIcons({ mouseX, dock, icons });
	};

	const resetIcons = () => {
		icons.forEach((icon) => {
			gsap.to(icon, {
				scale: 1,
				y: 0,
				duration: 0.3,
				ease: "power1.out",
			});
		});
	};

	dock.addEventListener("mousemove", handleMouseMove);
	dock.addEventListener("mouseleave", resetIcons);
	return () => {
		dock.removeEventListener("mousemove", handleMouseMove);
		dock.removeEventListener("mouseleave", resetIcons);
	};
};
