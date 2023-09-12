import { Hero } from "@/Components";
import Head from "next/head";

export default function Home() {
  return (
    <main
      className={`text-gray-900 flex flex-col min-h-screen container gap-4 md:gap-8 lg:gap-12 mx-auto px-4 md:px-12 lg:px-24 py-6`}
    >
      <Head>
        <title>AsapFeed</title>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2642908073199820"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Hero />
    </main>
  );
}
