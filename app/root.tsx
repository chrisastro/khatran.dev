import type { ReactNode } from "react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";

import "./styles/tailwind.css";
import { NavLink } from "react-router-dom";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Kha Trần",
    },
    {
      name: "description",
      content: "Software Engineer who likes to build things",
    },
  ];
};

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap",
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
      <header>
        <div className="container pt-3 pb-5">
          <div className="w-full flex flex-col items-center">
            <div className="mt-4 flex flex-col gap-1 text-center">
              <NavLink to={"/"}>
                <h1 className="font-serif text-4xl font-black">
                  Kha Quang Trần
                </h1>
              </NavLink>
              <div className="bg-[#F4BF77] px-2 font-bold">
                <p className="text-sm tracking-wider uppercase">
                  Software Engineer
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}
