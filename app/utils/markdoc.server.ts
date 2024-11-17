import * as fs from "node:fs";
import path from "node:path";
import Markdoc from "@markdoc/markdoc";
import type { BlogMetadata } from "../../types";

const BLOG_PATH = "blogs";

export function getBlogsMetadata() {
	const fileNames = fs.readdirSync(BLOG_PATH);

	const blogs = fileNames.map((fileName) =>
		fs.readFileSync(path.resolve(BLOG_PATH, fileName), "utf-8"),
	);

	return blogs.map((blog) => {
		const ast = Markdoc.parse(blog);
		return JSON.parse(ast.attributes.frontmatter) as BlogMetadata;
	});
}
