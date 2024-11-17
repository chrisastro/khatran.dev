import type { LinksFunction } from "@remix-run/node";
import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import type { ReactNode } from "react";

import "./tailwind.css";
import Header from "~/components/header";

export const links: LinksFunction = () => [
	{
		rel: "stylesheet",
		href: "https://api.fontshare.com/v2/css?f[]=synonym@1&f[]=amulya@1&display=swap",
	},
];

export function Layout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}
