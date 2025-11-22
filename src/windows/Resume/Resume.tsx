import { WindowControls } from "#components";
import { WindowWrapper } from "#hoc";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	"pdfjs-dist/build/pdf.worker.min.mjs",
	import.meta.url
).toString();

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

const Resume = () => {
	return (
		<>
			<div id="window-header">
				<WindowControls target="resume" />
				<h2>Resume.pdf</h2>

				<a
					href="files/resume.pdf"
					title="Download resume"
					download
					className="cursor-pointer"
				>
					<Download className="icon" />
				</a>
			</div>
			<Document
				file="/files/resume.pdf"
				className="resume-pdf"
			>
				<Page
					pageNumber={1}
					renderTextLayer
					renderAnnotationLayer
				/>
			</Document>
		</>
	);
};

export const ResumeWindow = WindowWrapper({
	Component: Resume,
	windowKey: "resume",
});
