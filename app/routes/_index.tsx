import { useLoaderData } from "@remix-run/react";
import { getBlogsMetadata } from "~/utils/mdx.server";
import { formatDate } from "~/utils/date";
import { NavLink } from "react-router-dom";

export const loader = async () => {
  const blogsMetadata = getBlogsMetadata();
  return { blogsMetadata };
};

export default function Index() {
  const { blogsMetadata } = useLoaderData<typeof loader>();

  return (
    <>
      <section className="mt-14 md:mt-10">
        <div className="container">
          {blogsMetadata.map(({ year, files }, i) => (
            <div key={i}>
              <div className="border-t border-dashed  border-gray-300 relative">
                <div className="absolute -top-10 bg-[#F4BF77] px-2 pt-3 w-max">
                  <h1 className="font-serif text-4xl md:text-5xl font-black">
                    {year}
                  </h1>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-5 mt-5">
                {files.map((file, i) => (
                  <div key={i}>
                    <NavLink
                      to={`/blog/${file.slug}`}
                      className="flex md:justify-between md:items-center md:flex-row flex-col gap-4"
                    >
                      <span className="font-serif text- md:text-xl font-semibold">
                        {file.title}
                      </span>
                      <span className="text-xs">{formatDate(file.date)}</span>
                    </NavLink>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
