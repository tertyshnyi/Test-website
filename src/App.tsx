import React from "react";
import "./App.css";
import Navbar from "./sections/navbar/Navbar";
import About from "./sections/about/About";
import Careers from "./sections/careers/Careers";
import CTA from "./sections/cta/CTA";
import Menu from "./sections/menu/Menu";
import Requirements from "./sections/requirements/Requirements";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
	    <Menu />
      <About />
      <Careers />
      <Requirements />
      <CTA />
    </div>
  );
};

export default App;
