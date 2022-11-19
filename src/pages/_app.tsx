import Head from "next/head";
import type { AppProps } from "next/app";

import ReactGA from "react-ga4";

import "../styles/globals.css";

const TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string;
ReactGA.initialize(TRACKING_ID);

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Physics Playground</title>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="noindex" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
