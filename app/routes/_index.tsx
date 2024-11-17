import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Blogs from "~/components/blogs";
import CategoryHero from "~/components/category-hero";
import { getBlogsMetadata } from "~/utils/markdoc.server";

export const meta: MetaFunction = () => {
	return [
		{ title: "Kha Trần | Software Engineer Tech Blog" },
		{
			name: "description",
			content: "Hi welcome to my tech blog. Feel free to stroll around here!",
		},
	];
};

export function loader() {
	const blogsMetadata = getBlogsMetadata();
	return { blogsMetadata };
}

export default function Index() {
	const { blogsMetadata } = useLoaderData<typeof loader>();
	return (
		<>
			{/*<CategoryHero />*/}
			<Blogs blogsMetadata={blogsMetadata} />
		</>
	);
}
