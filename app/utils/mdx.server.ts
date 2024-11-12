import * as fs from "node:fs";
import * as path from "node:path";
import type { Markdowns, Metadata } from "../../types/utils";
import Markdoc, { RenderableTreeNode } from "@markdoc/markdoc";
import { heading } from "~/schema/heading.markdoc";

const BLOG_PATH = "blog";

/** @type {import('@markdoc/markdoc').Config} */
const CONFIGS = {
  nodes: {
    heading,
  },
};

export const getMarkdowns = (): Markdowns => {
  const dirs = fs.readdirSync(BLOG_PATH);

  const markdowns: Markdowns = [];

  for (const dir of dirs) {
    const fileNames = fs.readdirSync(path.resolve(BLOG_PATH, dir));
    const files = fileNames.map((fileName) =>
      fs.readFileSync(path.resolve(BLOG_PATH, dir, fileName), "utf8"),
    );

    markdowns.push({ year: dir, files });
  }

  return markdowns;
};

export const getMarkdown = (filePath: string): string => {
  return fs.readFileSync(path.resolve(BLOG_PATH, filePath), "utf-8");
};

export const parseMarkdown = (markdown: string) => {
  return Markdoc.parse(markdown);
};

export const getMetadata = (markdown: string): Metadata => {
  const ast = Markdoc.parse(markdown);
  return JSON.parse(ast.attributes.frontmatter) as Metadata;
};

export const getBlogsMetadata = () => {
  const markdowns = getMarkdowns();
  return markdowns.map((markdown) => ({
    year: markdown.year,
    files: markdown.files.map((file) => getMetadata(file)),
  }));
};

export const getBlogContent = (
  path: string,
): { metadata: Metadata; content: RenderableTreeNode } => {
  const markdown = getMarkdown(path);

  const ast = Markdoc.parse(markdown);

  const metadata = JSON.parse(ast.attributes.frontmatter) as Metadata;
  const content = Markdoc.transform(ast, CONFIGS);

  return { metadata, content };
};
