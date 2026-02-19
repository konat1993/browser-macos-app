import type { WindowKey } from "#constants/types";
import { useWindowStore } from "#store";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useLayoutEffect, useRef } from "react";

type Props<P> = {
	Component: React.ComponentType<P>;
	windowKey: WindowKey;
};

export const WindowWrapper = <P extends object>({
	Component,
	windowKey,
}: Props<P>) => {
	const Wrapped = (props: P) => {
		const { focusWindow, windows } = useWindowStore();

		const { isOpen, zIndex } = windows[windowKey];
		const ref = useRef<HTMLDivElement | null>(null);

		useGSAP(() => {
			const el = ref.current;

			if (!el || !isOpen) return;
			el.style.display = "block";

			gsap.fromTo(
				el,
				{ scale: 0, opacity: 0, y: 0 },
				{
					scale: 1,
					opacity: 1,
					y: 0,
					duration: 0.4,
					ease: "power3.out",
				},
			);
		}, [isOpen]);

		useGSAP(() => {
			const el = ref.current;

			if (!el) return;

			const [instance] = Draggable.create(el, {
				onPress: () => focusWindow({ windowKey }),
			});

			return () => {
				instance.kill();
			};
		}, []);

		useLayoutEffect(() => {
			const el = ref.current;

			if (!el) return;
			el.style.display = isOpen ? "block" : "none";
		}, [isOpen]);

		return (
			<section
				id={windowKey}
				ref={ref}
				className="absolute"
				style={{ zIndex }}
			>
				<Component {...props} />
			</section>
		);
	};

	Wrapped.displayName = `WindowWrapper(${
		Component.displayName || Component.name || "Component"
	})`;

	return Wrapped;
};
