import { WindowControls } from "#components";
import { socials } from "#constants";
import { WindowWrapper } from "#hoc";

const renderSocials = () =>
  socials.map(({ id, bg, icon, link, text, disabled }) => (
    <li
      key={id}
      className={`max-w-[150px] ${
        disabled ? "opacity-40 cursor-not-allowed hover:scale-100 hover:translate-y-0" : ""
      }`}
      style={{ backgroundColor: bg }}
    >
      <a
        href={disabled ? undefined : link}
        className={`${disabled ? "cursor-not-allowed pointer-events-none" : ""}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={icon} alt={text} className="size-5" />
        <p>{text}</p>
      </a>
    </li>
  ));

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>
      <div className="p-5 space-y-5">
        <img
          src="/images/lukasz.jpg"
          alt="Lukasz"
          className="w-20 h-20 rounded-full object-cover"
        />

        <h3>Let's Connect</h3>
        <p>konatowskil@gmail.com</p>

        <ul>{renderSocials()}</ul>
      </div>
    </>
  );
};

export const ContactWindow = WindowWrapper({
  Component: Contact,
  windowKey: "contact",
});
