import "../styles/globals.css";
import "react-medium-image-zoom/dist/styles.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { Analytics } from "@vercel/analytics/react";
import Layout from "../Components/Layouts/Layout";

// The progress bar reads from the window on import, so it is client-only.
const NextNProgress = dynamic(() => import("nextjs-progressbar"), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress
        height={5}
        color="linear-gradient(to right, #00c6ff, #0072ff)"
        options={{ easing: "ease", speed: 500, showSpinner: false }}
      />
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </>
  );
}

export default MyApp;
