import { useState } from "react";
import type { PDFDocumentProxy } from "pdfjs-dist";
import { WindowControls } from "#components";
import { WindowWrapper } from "#hoc";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

const Resume = () => {
  const [numPages, setNumPages] = useState<number | null>(null);

  const onDocumentLoadSuccess = ({ numPages: pages }: PDFDocumentProxy) => {
    setNumPages(pages);
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>

        <a href="files/resume.pdf" title="Download resume" download className="cursor-pointer">
          <Download className="icon" />
        </a>
      </div>
      <div className="overflow-auto min-h-0 max-h-[70vh]">
        <Document
          file="/files/resume.pdf"
          className="resume-pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {numPages !== null &&
            Array.from({ length: numPages }, (_, i) => (
              <Page key={i + 1} pageNumber={i + 1} renderTextLayer renderAnnotationLayer />
            ))}
        </Document>
      </div>
    </>
  );
};

export const ResumeWindow = WindowWrapper({
  Component: Resume,
  windowKey: "resume",
});
