import { WindowControls } from "#components";
import { locations } from "#constants";
import type { ExplorerNode, Locations } from "#constants/types";
import { WindowWrapper } from "#hoc";
import { useLocationStore, useWindowStore } from "#store";
import clsx from "clsx";
import { Search } from "lucide-react";

const Finder = () => {
	const { openWindow } = useWindowStore();
	const { activeLocation, setActiveLocation } = useLocationStore();

	const renderItemsList = ({
		name,
		items,
	}: {
		name: string;
		items: Locations[keyof Locations][] | ExplorerNode[];
	}) => (
		<div>
			<h3>{name}</h3>
			<ul>
				{items.map((location) => (
					<li
						key={location.id}
						onClick={() => {
							setActiveLocation(
								location
							);
						}}
						className={clsx(
							location.id ===
								activeLocation?.id
								? "active"
								: "not-active"
						)}
					>
						<img
							src={location.icon}
							alt={location.name}
							className="w-4"
						/>
						<p className="text-sm font-medium truncate">
							{location.name}
						</p>
					</li>
				))}
			</ul>
		</div>
	);

	const openItem = (item: ExplorerNode) => {
		if (item.kind === "folder") {
			return setActiveLocation(item);
		}

		if (item.fileType === "pdf") {
			return openWindow({ windowKey: "resume" });
		}

		if (["fig", "url"].includes(item.fileType) && item.href) {
			return window.open(item.href, "_blank");
		}

		openWindow({
			windowKey: `${item.fileType}${item.kind}`,
			data: item,
		});
	};

	const renderFinderContentView = () => {
		if (activeLocation && "children" in activeLocation) {
			return activeLocation?.children.map((item) => (
				<li
					key={item.id}
					className={item.position}
					onClick={() => openItem(item)}
				>
					<img src={item.icon} alt={item.name} />
					<p>{item.name}</p>
				</li>
			));
		}
	};

	return (
		<>
			<div id="window-header">
				<WindowControls target="finder" />
				<Search className="icon" />
			</div>

			<div className="bg-white flex h-full">
				<div className="sidebar">
					{renderItemsList({
						name: "Favorites",
						items: Object.values(locations),
					})}

					{renderItemsList({
						name: "Work",
						items: locations.work.children,
					})}
				</div>
				<ul className="content">
					{renderFinderContentView()}
				</ul>
			</div>
		</>
	);
};

export const FinderWindow = WindowWrapper({
	Component: Finder,
	windowKey: "finder",
});
