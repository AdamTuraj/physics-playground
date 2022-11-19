import ReactGA from "react-ga4";

import Canvas from "../components/Canvas";

const Index = () => {
  ReactGA.pageview("/");

  return <Canvas />;
};

export default Index;
