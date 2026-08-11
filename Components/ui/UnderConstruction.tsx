import PageScroll from "./PageScroll";

/**
 * Shell shared by the placeholder pages. The heading differs per page and is
 * passed in; everything around it is identical.
 */
const UnderConstruction: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => (
  <PageScroll>
    <article className="ml-3 scrollbar text-left">
      <section className="pr-5 mt-5 mb-12">
        <div className="flex flex-row justify-center items-center h-full rounded-lg bg-applearn bg-center bg-no-repeat bg-cover">
          <main className="flex flex-col lg:flex-row backdrop-filter backdrop-blur-md bg-opacity-20 rounded-xl overflow-hidden w-full max-w-5xl shadow-lg m-4 lg:m-6">
            <div className="flex-1 p-4 lg:p-6">
              <div className="text-lg text-white mb-4 flex items-center">
                <div className="md:flex items-cente text0">{children}</div>
              </div>
            </div>
          </main>
        </div>
      </section>{" "}
    </article>
  </PageScroll>
);

export default UnderConstruction;
