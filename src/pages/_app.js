import ScrollTop from "@/components/ScrollTop";
import "@/styles/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";

// GA4 measurement ID (Admin → Data Streams). Set to "" to disable GA entirely;
// the conditional render below means no Google script loads when it is empty.
const GA_MEASUREMENT_ID = "G-3GXNXDN2ZY";

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
