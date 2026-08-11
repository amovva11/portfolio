import { NextPage } from "next";
import PageMeta from "../Components/ui/PageMeta";
import PageScroll from "../Components/ui/PageScroll";
import { blogs, BlogPost } from "../data/blogs";
import { useIsTabletOrMobile } from "../hooks/useIsTabletOrMobile";

const BlogCard: React.FC<{ blog: BlogPost; isTabletOrMobile: boolean }> = ({
  blog,
  isTabletOrMobile,
}) => (
  <a
    href={blog.link}
    className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl ${
      isTabletOrMobile ? "mb-5" : "group relative transform duration-200"
    }`}
    target="_blank"
    rel="noreferrer"
  >
    <div className={isTabletOrMobile ? "w-full" : "relative w-full"}>
      <img
        src={blog.image}
        alt={blog.title}
        className={`object-center object-cover${
          isTabletOrMobile ? "" : " w-full h-full"
        }`}
        width={isTabletOrMobile ? "100%" : undefined}
        style={{ height: isTabletOrMobile ? "35vw" : "12vw" }}
      />
    </div>
    <div className="px-3 py-4">
      <h3 className="text-sm text-gray-500 pb-2">
        <span className="bg-gray-900 py-1 px-2 text-white rounded-lg">
          <span className="absolute inset-0"></span>
          {blog.tag}
        </span>
      </h3>
      <p className="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
        {blog.title}
      </p>
    </div>
  </a>
);

const Blogs: NextPage<{ blogs: BlogPost[] }> = (props) => {
  const isTabletOrMobile = useIsTabletOrMobile();

  return (
    <PageScroll>
      <PageMeta title="Blogs " description="Blogs" ogTitle="Blogs" />
      <article
        className={`scrollbar text-left pb-40 ${
          isTabletOrMobile ? "p-2 pl-3" : "pl-7 mb-16 pt-6"
        }`}
      >
        {/* The wide layout nests the heading one level deeper so the outer row
            can flex; mobile renders it flat. */}
        {isTabletOrMobile ? (
          <div className="items-cente text0">
            <h1 className="lg:text-5xl text-indigo-500 font-bold leading-tight text-3xl">
              Blogs
            </h1>
          </div>
        ) : (
          <div className="md:flex md:mr-0">
            <div className="md:flex items-cente text0">
              <h1 className="lg:text-5xl text-indigo-500 font-bold leading-tight text-3xl">
                Blogs
              </h1>
            </div>
          </div>
        )}
        <div
          className={`pt-3 text-gray-300 font-medium dark:text-gray-400${
            isTabletOrMobile ? " text-sm" : ""
          }`}
        >
          Blogs Written by me, Collaborated Blogs and some of my favorite and
          interesting blogs written by others.
        </div>
        <section className={isTabletOrMobile ? "mt-2 mb-12" : "pr-5 mt-7 mb-12"}>
          <article>
            <section
              className={
                isTabletOrMobile
                  ? "mt-6 grid grid-1"
                  : "mt-6 grid grid-cols-1s xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-x-6 gap-y-8"
              }
            >
              {props.blogs.map((blog) => (
                <BlogCard
                  key={blog.title}
                  blog={blog}
                  isTabletOrMobile={isTabletOrMobile}
                />
              ))}
            </section>
          </article>
        </section>
      </article>
    </PageScroll>
  );
};

export function getStaticProps() {
  return { props: { blogs } };
}

export default Blogs;
