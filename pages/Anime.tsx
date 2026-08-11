import { NextPage } from "next";
import AnimeComponent from "../Components/AnimeComponent";

// Note: this page ships without a <title> or meta description, unlike every
// other route. Wrapping it in <PageMeta /> would fix that, but it changes what
// the browser tab shows, so it is left as-is deliberately.
const Anime: NextPage = () => <AnimeComponent />;

export default Anime;
