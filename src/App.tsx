import { Dock, Navbar, Welcome } from "#components";
import {
	FinderWindow,
	ResumeWindow,
	SafariWindow,
	TerminalWindow,
} from "#windows";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const App = () => {
	return (
		<main>
			<Navbar />
			<Welcome />
			<Dock />

			<TerminalWindow />
			<SafariWindow />
			<ResumeWindow />
			<FinderWindow />
		</main>
	);
};

export default App;
