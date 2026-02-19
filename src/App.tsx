import { Dock, Navbar, Welcome } from "#components";
import {
	ContactWindow,
	FinderWindow,
	ImageWindow,
	MarkdownWindow,
	ResumeWindow,
	SafariWindow,
	TerminalWindow,
	TextWindow,
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
			<TextWindow />
			<ImageWindow />
			<MarkdownWindow />
			<ContactWindow />
		</main>
	);
};

export default App;
