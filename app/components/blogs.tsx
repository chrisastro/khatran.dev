import { Link } from "@remix-run/react";
import { formatDate } from "~/utils/date";
import type { BlogMetadata } from "../../types";

export default function Blogs({
	blogsMetadata,
}: { blogsMetadata: BlogMetadata[] }) {
	return (
		<section className="container py-20 px-3 md:px-0">
			<div className="flex flex-col gap-10">
				{blogsMetadata.map((blogMetadata) => (
					<article
						key={`article-${blogMetadata.slug}`}
						className="grid grid-cols-1 md:grid-cols-3 gap-y-4 py-5"
					>
						<figure className="block md:hidden">
							<img
								src={blogMetadata.preview}
								alt={blogMetadata.slug}
								className="w-[2160px] aspect-[1.72]"
							/>
						</figure>
						<div className="hidden md:block">
							<div className="flex flex-row">
								<div className="text-xs text-gray-800 uppercase">
									{formatDate(blogMetadata.date)}
								</div>
								<div
									id="min-read"
									className="text-xs text-gray-800 uppercase flex items-center"
								>
									{blogMetadata.minRead} MIN READ
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-4 col-span-2">
							<div className="hidden md:block">
								{blogMetadata.categories.map((category) => (
									<h6
										key={category}
										className="font-amulya font-bold text-indigo-900"
									>
										{category}
									</h6>
								))}
							</div>
							<Link to={blogMetadata.slug}>
								<h1 className="font-amulya text-4xl font-bold tracking-tighter">
									{blogMetadata.title}
								</h1>
								<p className="text-gray-800 tracking-tight mt-4">
									{blogMetadata.description}
								</p>
							</Link>
						</div>
						<div className="block md:hidden mt-10">
							<div className="flex flex-row">
								<div className="text-xs text-gray-800 uppercase">
									{formatDate(blogMetadata.date)}
								</div>
								<div
									id="min-read"
									className="text-xs text-gray-800 uppercase flex items-center"
								>
									{blogMetadata.minRead} MIN READ
								</div>
							</div>
							<div className="block md:hidden mt-2">
								{blogMetadata.categories.map((category) => (
									<h6
										key={category}
										className="font-amulya font-bold text-indigo-900"
									>
										{category}
									</h6>
								))}
							</div>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
