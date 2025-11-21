import { useRef } from "react";
import { renderText, setupTextHover } from "./utils";
import { useGSAP } from "@gsap/react";

export const Welcome = () => {
	const titleRef = useRef<HTMLHeadingElement | null>(null);
	const subtitleRef = useRef<HTMLParagraphElement | null>(null);

	useGSAP(() => {
		const titleCleanup = setupTextHover({
			container: titleRef.current,
			type: "title",
		});
		const subtitleCleanup = setupTextHover({
			container: subtitleRef.current,
			type: "subtitle",
		});

		return () => {
			titleCleanup?.();
			subtitleCleanup?.();
		};
	}, []);

	return (
		<section id="welcome">
			<p ref={subtitleRef}>
				{renderText({
					text: "Hey, I'm Lukasz! Welcome to my",
					className: "text-3xl font-georama",
					baseWeight: 100,
				})}
			</p>
			<h1 ref={titleRef} className="mt-7">
				{renderText({
					text: "portfolio",
					className: "text-9xl italic font-georama",
				})}
			</h1>

			<div className="small-screen">
				<p>
					This portfolio is designed for
					desktop/tablet screens only.
				</p>
			</div>
		</section>
	);
};
