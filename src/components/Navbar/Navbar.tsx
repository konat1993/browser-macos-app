import { navIcons, navLinks } from "#constants";
import { useWindowStore } from "#store";
import dayjs from "dayjs";

export const Navbar = () => {
	const { openWindow } = useWindowStore();
	return (
		<nav>
			<div>
				<img src="/images/logo.svg" alt="apple logo" />
				<p className="font-bold">
					Lukasz&#39;s Portfolio
				</p>

				<ul>
					{navLinks.map(({ id, name, type }) => (
						<li
							key={id}
							onClick={() =>
								openWindow({
									windowKey: type,
								})
							}
						>
							<p>{name}</p>
						</li>
					))}
				</ul>
			</div>
			<div>
				<ul>
					{navIcons.map(({ id, img }) => (
						<li key={id}>
							<img
								src={img}
								alt={`icon-${id}`}
								className="icon-hover"
							/>
						</li>
					))}
				</ul>
				<time>
					{dayjs().format("ddd MMM d h:mm A")}
				</time>
			</div>
		</nav>
	);
};
