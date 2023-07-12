import React from "react";
import MobilePage from "./MobilePage";
import Intro from "./Intro";

const App = () => {
  const isMobile = window.innerWidth <= 768; // tablet style에서 max-width: 768px

  return <>{isMobile ? <MobilePage /> : <Intro />}</>;
};

export default App;
