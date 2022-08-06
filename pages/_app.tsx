import "the-new-css-reset";
import "@/styles/app.css";
import type { AppProps } from "next/app";
import { Banner } from "@/components/Banner";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <Banner />
      <main>
        <Component {...pageProps} />
      </main>
      <footer></footer>
    </div>
  );
}

export default MyApp;
