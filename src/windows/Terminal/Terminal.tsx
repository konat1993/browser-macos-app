import { WindowControls } from "#components";
import { techStack } from "#constants";
import { WindowWrapper } from "#hoc";
import { Check, Flag } from "lucide-react";

const renderTechStack = (techStackData: typeof techStack) =>
	techStackData.map(({ category, items }) => (
		<li key={category} className="flex items-center">
			<Check className="check" size={20} />
			<h3>{category}</h3>

			<ul>
				{items.map((item, idx) => (
					<li key={`${idx}-${item}`}>
						{item}
						{idx < items.length - 1
							? ", "
							: ""}
					</li>
				))}
			</ul>
		</li>
	));

const Terminal = () => {
	return (
		<>
			<div id="window-header">
				<WindowControls target="terminal" />
				<h2>Tech Stack</h2>
			</div>
			<div className="tech_stack">
				<p>
					<span className="font-bold">
						@lukasz %{" "}
					</span>
					show tech stack
				</p>
				<div className="label">
					<p className="w-32">Category</p>
					<p>Technologies</p>
				</div>
				<ul className="content">
					{renderTechStack(techStack)}
				</ul>
				<div className="footnote">
					<p>
						<Check size={20} /> 5 of 5
						stacks loaded successfully
						(100%)
					</p>
					<p className="text-black">
						<Flag size={15} fill="black" />
						Render time: 6ms
					</p>
				</div>
			</div>
		</>
	);
};

export const TerminalWindow = WindowWrapper({
	Component: Terminal,
	windowKey: "terminal",
});
