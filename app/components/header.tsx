import { Link } from "@remix-run/react";
import MenuButton from "app/assets/menu-btn.svg";

const LINKS = [
	{
		to: "/categories",
		label: "Categories",
	},
	{
		to: "/cheat-sheet",
		label: "Cheat Sheet",
	},
	{
		to: "/about",
		label: "About",
	},
	{
		to: "/resume",
		label: "Resume",
	},
];

export default function Header() {
	return (
		<header>
			<div className="container px-3 md:px-0 pt-4 md:pt-10 pb-2 flex flex-row justify-between items-center">
				<h1 className="text-2xl label">
					<Link to="/">Kha Trần</Link>
				</h1>
				<ul className="hidden md:flex flex-row text-sm font-amulya border-collapse tracking-tight font-bold">
					{LINKS.map((link, i) => (
						<li
							key={`link-${link.label}`}
							className="px-3 py-1 hover:underline underline-offset-2 decoration-2"
						>
							<Link to={link.to}>{link.label}</Link>
						</li>
					))}
				</ul>
				<div className="block md:hidden">
					<button type="button" className="p-2">
						<img src={MenuButton} alt="" className="w-6 h-6" />
					</button>
				</div>
			</div>
		</header>
	);
}
