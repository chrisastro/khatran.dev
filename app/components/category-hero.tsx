import { Link } from "@remix-run/react";
import loadingTime from "app/assets/Loading-Time.svg";

export default function CategoryHero() {
	return (
		<section className="container py-10 border-b border-dashed border-gray-300">
			<header className="px-3">
				<h1 className="text-3xl font-amulya font-medium">
					<Link to="/">Engineering</Link>
				</h1>
				<p className="mt-5 text-sm text-gray-800 max-w-full md:max-w-[50%] font-medium">
					I like to research & hands-on the engineering stuff that I found
					interesting on, I'm in love with any technologies relating with
					Network, On-Premise & Backend.
				</p>
			</header>
		</section>
	);
}
