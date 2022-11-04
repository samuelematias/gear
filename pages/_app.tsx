import "the-new-css-reset";
import "styles/app.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import SEO from "next-seo.config";
import { Banner } from "components/Banner";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <Banner />
      <main id="main">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
