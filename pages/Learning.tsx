import { NextPage } from "next";
import PageMeta from "../Components/ui/PageMeta";
import UnderConstruction from "../Components/ui/UnderConstruction";

const Learning: NextPage = () => (
  <>
    <PageMeta
      title="Learnings "
      description="Learnings"
      ogTitle="Learnings"
    />
    <UnderConstruction>
      <h1 className="lg:text-5xl text-gray-100 font-bold leading-tight text-3xl">
        Page is Under Development...
      </h1>
    </UnderConstruction>
  </>
);

export default Learning;
