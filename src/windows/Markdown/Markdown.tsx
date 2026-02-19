import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { WindowControls } from "#components";
import { WindowWrapper } from "#hoc";
import { useWindowStore } from "#store";

export const Markdown = () => {
  const { windows } = useWindowStore();
  const data = windows.md.data;
  const [content, setContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!data?.markDownUrlFile) return;
    let cancelled = false;
    fetch(data.markDownUrlFile)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load: ${res.status}`);
        return res.text();
      })
      .then((text) => {
        if (!cancelled) {
          setError(null);
          setContent(text);
        }
      })
      .catch((err) => {
        if (!cancelled) setError(err instanceof Error ? err.message : "Failed to load file");
      });
    return () => {
      cancelled = true;
    };
  }, [data?.markDownUrlFile]);

  if (!data) return null;

  const { name, markDownUrlFile } = data;

  if (!markDownUrlFile) return null;

  return (
    <>
      <div id="window-header">
        <WindowControls target="md" />
        <h2>{name}</h2>
      </div>

      <div className="markdown-body p-5 space-y-6 bg-white overflow-auto min-h-0">
        {error && <p className="text-red-600 text-sm">{error}</p>}
        {content === null && !error && <p className="text-gray-500 text-sm">Loading…</p>}
        {content && (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  {children}
                </a>
              ),
              code: ({ className, children }) => {
                const isBlock = className?.startsWith("language-");
                return isBlock ? (
                  <code
                    className={`block p-3 rounded bg-gray-100 text-sm overflow-x-auto ${className ?? ""}`}
                  >
                    {children}
                  </code>
                ) : (
                  <code className="px-1.5 py-0.5 rounded bg-gray-100 text-sm font-mono">
                    {children}
                  </code>
                );
              },
              pre: ({ children }) => <pre className="my-2">{children}</pre>,
              h1: ({ children }) => <h1 className="text-2xl font-bold mt-4 mb-2">{children}</h1>,
              h2: ({ children }) => <h2 className="text-xl font-bold mt-4 mb-2">{children}</h2>,
              h3: ({ children }) => <h3 className="text-lg font-semibold mt-3 mb-1">{children}</h3>,
              ul: ({ children }) => (
                <ul className="list-disc list-inside space-y-1 my-2">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside space-y-1 my-2">{children}</ol>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-gray-300 pl-4 my-2 text-gray-700">
                  {children}
                </blockquote>
              ),
              table: ({ children }) => (
                <div className="overflow-x-auto my-3">
                  <table className="min-w-full border border-gray-200">{children}</table>
                </div>
              ),
              th: ({ children }) => (
                <th className="border border-gray-200 px-3 py-2 bg-gray-50 font-semibold text-left">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="border border-gray-200 px-3 py-2">{children}</td>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        )}
      </div>
    </>
  );
};

export const MarkdownWindow = WindowWrapper({
  Component: Markdown,
  windowKey: "md",
});
