import About from "@/components/About";
import CookieBanner from "@/components/Cookie/Cookie";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import { BLOG_URL } from "@/data/site";
import Head from "next/head";

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abhijay Movva",
    alternateName: "Abhijay",
    url: "https://abhijaymovva.vercel.app",
    jobTitle: "Software Engineer",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Wisconsin–Madison",
      url: "https://www.wisc.edu",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Madison",
      addressRegion: "WI",
      addressCountry: "US",
    },
    sameAs: [
      "https://www.linkedin.com/in/abhijaymovva/",
      "https://github.com/amovva11",
      // Included only once BLOG_URL is a real URL — "#" is not valid here.
      ...(BLOG_URL.startsWith("http") ? [BLOG_URL] : []),
    ],
    description:
      "Computer Science and Data Science senior at UW–Madison graduating December 2026. Software engineering intern at Medline, SWE benchmark contractor for the Handshake AI Fellowship, and undergraduate researcher at the madAbility accessibility lab. Focused on backend, distributed systems, and machine learning.",
    knowsAbout: [
      "Backend Engineering",
      "Distributed Systems",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Cloud Infrastructure",
      "Python",
      "Java",
      "C",
      "C++",
      "TypeScript",
      "React",
      "Next.js",
      "FastAPI",
      "Spring Boot",
      "PyTorch",
      "Docker",
      "AWS",
      "Azure",
      "PostgreSQL",
      "MongoDB",
      "Kafka",
      "Spark",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Abhijay Movva | Portfolio",
    url: "https://abhijaymovva.vercel.app",
    author: {
      "@type": "Person",
      name: "Abhijay Movva",
    },
  };

  return (
    <div>
      <Head>
        {/* Primary Meta Tags */}
        <title>Abhijay Movva | Software Engineer | CS + Data Science @ UW–Madison</title>
        <meta
          name="description"
          content="CS + Data Science senior at UW–Madison graduating Dec 2026. Software engineering intern at Medline, SWE benchmark contractor for the Handshake AI Fellowship, and undergraduate researcher at the madAbility accessibility lab. Backend, distributed systems, and machine learning."
        />
        <meta
          name="keywords"
          content="Abhijay Movva, Software Engineer, UW-Madison, University of Wisconsin Madison, Computer Science, Data Science, New Grad 2026, Backend Engineer, Distributed Systems, Machine Learning, Medline, Handshake AI Fellowship, madAbility, Python, Java, TypeScript, React, Next.js, FastAPI, PyTorch, Docker, AWS, Azure, Kafka, Spark"
        />
        <meta name="author" content="Abhijay Movva" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Favicons & Manifest */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#12151A" />
        <meta name="msapplication-TileColor" content="#12151A" />
        <meta name="theme-color" content="#12151A" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://abhijaymovva.vercel.app/" />

        {/* OpenGraph / Facebook Meta Tags */}
        <meta property="og:site_name" content="Abhijay Movva Portfolio" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="profile" />
        <meta property="profile:first_name" content="Abhijay" />
        <meta property="profile:last_name" content="Movva" />
        <meta property="profile:username" content="amovva11" />
        <meta property="og:title" content="Abhijay Movva | Software Engineer & CS + Data Science @ UW–Madison" />
        <meta
          property="og:description"
          content="CS + Data Science senior at UW–Madison graduating Dec 2026. Software engineering intern at Medline, SWE benchmark contractor for the Handshake AI Fellowship, and undergraduate researcher at the madAbility accessibility lab. Backend, distributed systems, and machine learning."
        />
        {/* TODO: add og:image (1200x630) once a share card exists, and switch
            twitter:card back to "summary_large_image" */}
        <meta property="og:url" content="https://abhijaymovva.vercel.app/" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Abhijay Movva | Software Engineer & CS + Data Science @ UW–Madison" />
        <meta
          name="twitter:description"
          content="CS + Data Science senior at UW–Madison graduating Dec 2026. Software engineering intern at Medline, SWE benchmark contractor for the Handshake AI Fellowship, and undergraduate researcher at the madAbility accessibility lab. Backend, distributed systems, and machine learning."
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </Head>

      <Header />
      <main>
        <Hero />
        <About />
        <WorkExperience />
        <Projects />
        <CookieBanner />
      </main>
      <Footer />
    </div>
  );
}
