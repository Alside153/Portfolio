import * as React from "react";

import "../config/Styles.css";

import NavBar from "../components/NavBar"
import EndOfPage from "../components/EndOfPage";
import WelcomeComp from "../components/WelcomeComp";
import AboutMe from "../components/AboutMe";
import ProjectsComp from "../components/ProjectsComp";

const MainPage = () => {
  return (
    <div className="container">
      <NavBar/>
      <WelcomeComp/>
      <AboutMe/>
      <ProjectsComp/>
      <EndOfPage/>
    </div>
  );
};

export default MainPage;
