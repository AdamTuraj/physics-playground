import Head from "next/head";
import type { AppProps } from "next/app";

import ReactGA from "react-ga";

import "../styles/globals.css";

const TRACKING_ID = "G-JZWWY2DCYE";

const App = ({ Component, pageProps }: AppProps) => {
  ReactGA.initialize(TRACKING_ID);

  ReactGA.pageview("/");

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
