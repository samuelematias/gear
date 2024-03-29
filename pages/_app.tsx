import "the-new-css-reset";
import "styles/app.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { MotionConfig } from "framer-motion";
import { DefaultSeo } from "next-seo";
import SEO from "next-seo.config";
import { Banner } from "components/Banner";
import { ContentInfo } from "components/ContentInfo";
import { Toaster } from "components/Toast";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { ToastProvider } from "@radix-ui/react-toast";

const composeProviders =
  (...providers: any[]) =>
  ({ children }: { children: React.ReactNode }) =>
    providers.reduceRight((acc, provider) => {
      const [Provider, props] = provider;
      return <Provider {...props}>{acc}</Provider>;
    }, children);

const Providers = composeProviders(
  [
    MotionConfig,
    {
      reducedMotion: "user",
      transition: {
        ease: [0.32, 0.72, 0, 1],
        duration: 0.7,
      },
    },
  ],
  [
    ThemeProvider,
    {
      defaultTheme: "system",
      disableTransitionOnChange: true,
    },
  ],
  [TooltipProvider],
  [ToastProvider]
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Providers>
        <DefaultSeo {...SEO} />
        <Banner />
        <main id="main">
          <Component {...pageProps} />
        </main>
        <ContentInfo />
        <Toaster />
        <Analytics />
      </Providers>
    </>
  );
}

export default MyApp;
