import Head from "next/head";
import { site } from "../../data/site";

interface PageMetaProps {
  title: string;
  description: string;
  /** Defaults to `title`; override only when the social card should read differently. */
  ogTitle?: string;
}

/**
 * The <head> every page shares. Pages supply a title and description; the
 * canonical URL, social card, and viewport tags are identical site-wide and are
 * defined once here rather than copied into each page.
 */
const PageMeta: React.FC<PageMetaProps> = ({ title, description, ogTitle }) => (
  <Head>
    <title>{title}</title>
    <link rel="icon" href={site.favicon} />
    <meta property="og:title" content={ogTitle ?? title} />
    <meta name="description" content={description} />
    <link rel="canonical" href={site.url} />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={site.url} />
    <meta property="og:site_name" content={site.name} />
    <meta property="og:image" content={site.ogImage.src} />
    <meta property="og:image:width" content={site.ogImage.width} />
    <meta property="og:image:height" content={site.ogImage.height} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="HandheldFriendly" content="True" />
    <meta name="MobileOptimized" content="320" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="twitter:widgets:csp" content="on" />
  </Head>
);

export default PageMeta;
