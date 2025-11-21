import { dockApps } from "#constants";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Tooltip } from "react-tooltip";
import { setupDockHover } from "./utils";

export const Dock = () => {
	const dockRef = useRef<HTMLDivElement | null>(null);

	useGSAP(() => {
		const dockCleanup = setupDockHover({
			container: dockRef.current,
		});

		return () => {
			dockCleanup?.();
		};
	}, []);

	const toggleApp = (
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		_app: Pick<(typeof dockApps)[number], "id" | "canOpen">
	) => {
		// TODO: Implement window logic
	};

	return (
		<section id="dock">
			<div ref={dockRef} className="dock-container">
				{dockApps.map(({ id, name, icon, canOpen }) => (
					<div
						key={id}
						className="relative flex justify-center"
					>
						<button
							type="button"
							className="dock-icon"
							aria-label={name}
							data-tooltip-id="dock-tooltip"
							data-tooltip-content={
								name
							}
							data-tooltip-delay-show={
								150
							}
							disabled={!canOpen}
							onClick={() =>
								toggleApp({
									id,
									canOpen,
								})
							}
						>
							<img
								src={`/images/${icon}`}
								alt={name}
								loading="lazy"
								{...(!canOpen && {
									className: "opacity-60",
								})}
							/>
						</button>
					</div>
				))}
				<Tooltip
					id="dock-tooltip"
					place="top"
					className="tooltip"
				/>
			</div>
		</section>
	);
};
