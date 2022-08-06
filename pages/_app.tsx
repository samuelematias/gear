import "the-new-css-reset";
import "@/styles/app.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <h1>Alex Carpenter</h1>
        <p>Serial hobbyist</p>
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
