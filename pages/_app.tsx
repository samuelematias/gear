import "the-new-css-reset";
import "@/styles/app.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Banner } from "@/components/Banner";
import { ContentInfo } from "@/components/ContentInfo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Alex Carpenter - Serial Hobbyist</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <Banner />
      <main>
        <Component {...pageProps} />
      </main>
      <ContentInfo />
    </>
  );
}

export default MyApp;
