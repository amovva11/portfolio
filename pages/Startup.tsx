import { NextPage } from "next";
import PageMeta from "../Components/ui/PageMeta";
import UnderConstruction from "../Components/ui/UnderConstruction";

const Startup: NextPage = () => (
  <>
    <PageMeta title="Startup" description="Startup" />
    <UnderConstruction>
      <h1 className="pl-3 text-4xl font-bold block w-full py-2 lg:inline">
        Under Development
      </h1>
    </UnderConstruction>
  </>
);

export default Startup;
