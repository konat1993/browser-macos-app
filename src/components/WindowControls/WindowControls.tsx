import { useWindowStore } from "#store";
import type { WindowActionArgsType } from "#store/types";

export const WindowControls = ({
	target,
}: {
	target: WindowActionArgsType["windowKey"];
}) => {
	const { closeWindow } = useWindowStore();
	return (
		<div id="window-controls">
			<div
				className="close"
				onClick={() =>
					closeWindow({ windowKey: target })
				}
			/>
			<div className="minimize" />
			<div className="maximize" />
		</div>
	);
};
