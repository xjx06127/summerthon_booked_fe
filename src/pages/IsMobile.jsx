import React from "react";
import MobilePage from "./MobilePage";
import Home from "./Home";

const App = () => {
  const isMobile = window.innerWidth <= 768; // tablet style에서 max-width: 768px

  return <>{isMobile ? <MobilePage /> : <Home />}</>;
};

export default App;
