import { LoaderFunctionArgs } from "@remix-run/node";
import { getBlogContent } from "~/utils/mdx.server";
import { useLoaderData } from "@remix-run/react";
import { formatDate } from "~/utils/date";
import Markdoc from "@markdoc/markdoc";
import React from "react";

export const loader = ({ params }: LoaderFunctionArgs) => {
  const { metadata, content } = getBlogContent(
    `${params.year}/${params.slug}.mdx`,
  );

  return { metadata, content };
};

export default function Blog() {
  const { metadata, content } = useLoaderData<typeof loader>();

  return (
    <section className="mt-14 md:mt-10">
      <div className="container py-4 border-y border-dashed border-gray-300">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-center text-4xl font-serif font-black">
            {metadata.title}
          </h1>
          <div className="bg-[#F4BF77] px-2 font-bold w-max">
            <h5 className="text-center text-sm tracking-wider">
              {formatDate(metadata.date)}
            </h5>
          </div>
        </div>
      </div>
      <div className="container py-4">
        {Markdoc.renderers.react(content, React)}
      </div>
    </section>
  );
}
