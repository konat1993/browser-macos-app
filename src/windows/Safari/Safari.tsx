import { WindowControls } from "#components";
import { experiences } from "#constants";
import type { Experience } from "#constants/types";
import { WindowWrapper } from "#hoc";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  PanelLeft,
  Plus,
  Search,
  Share,
  ShieldHalf,
} from "lucide-react";

const renderExperience = (experiencesData: Experience[]) => {
  return experiencesData.map(({ id, title, stack, contributions, logo }) => (
    <article key={id} className="experience-post">
      <header className="experience-post__header">
        <div className="experience-post__thumb">
          <img src={logo} alt="" />
        </div>
        <div className="experience-post__header-content">
          <h3 className="experience-post__title">{title}</h3>
          <div className="experience-post__stack">
            {stack.map((tech) => (
              <span key={tech} className="experience-post__tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </header>
      <section className="experience-post__body">
        <h4 className="experience-post__subtitle">Key contributions</h4>
        <ul className="experience-post__list">
          {contributions.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>
    </article>
  ));
};

const Safari = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="safari" />
        <PanelLeft className="ml-10 icon" />

        <div className="flex items-center gap-1 ml-5">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>
        <div className="flex-1 flex-center gap-3">
          <ShieldHalf className="icon" />
          <div className="search">
            <Search className="icon" />

            <input type="text" placeholder="Search or enter phrase..." className="flex-1" />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Share className="icon" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div>
      </div>

      <div className="blog overflow-y-auto max-h-[calc(70vh-50px)]">
        <h2>My Developer Experience</h2>
        <div className="blog-experience-list">{renderExperience(experiences)}</div>
      </div>
    </>
  );
};

export const SafariWindow = WindowWrapper({
  Component: Safari,
  windowKey: "safari",
});
