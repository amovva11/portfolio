import ScrollTop from "@/components/ScrollTop";
import "@/styles/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";

// TODO: create a GA4 property at analytics.google.com once the site is live on
// your own domain, then paste the "G-XXXXXXXXXX" measurement ID here.
// Until this is set, GA is skipped entirely and sendGAEvent() calls no-op.
const GA_MEASUREMENT_ID = "";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ScrollTop />
      <Analytics />
      {GA_MEASUREMENT_ID && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
    </>
  );
}
