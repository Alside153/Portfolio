import { useState, useRef } from "react";

import FirstProject from "./FirstProject";
import SecondProject from "./SecondProject";
import ThirdProject from "./ThirdProject";
import FirstProjectExplanation from "./FirstProjectExplanation";
import SecondProjectExplanation from "./SecondProjectExplanation";
import ThirdProjectExplanation from "./ThirdProjectExplanation";


const ProjectsComp = () => {
  const [firstProjectVis, setFirstProjectVis] = useState(false);
  const [secondProjectVis, setSecondProjectVis] = useState(false);
  const [thirdProjectVis, setThirdProjectVis] = useState(false);
  const myRef = useRef(null);



  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: "smooth" });


  const handleClick = (project) => {
    setFirstProjectVis(false);
    setSecondProjectVis(false);
    setThirdProjectVis(false);

    if (project === "firstProject" && firstProjectVis === false) {
      setFirstProjectVis(true);
      setTimeout(executeScroll, 100);
      return;
    }
    if (project === "secondProject" && secondProjectVis === false) {
      setSecondProjectVis(true);
      setTimeout(executeScroll, 100);
      return;
    }
    if (project === "thirdProject" && thirdProjectVis === false) {
      setThirdProjectVis(true);
      setTimeout(executeScroll, 100);
      return;
    }
  };
  let firstProjectStyles = firstProjectVis
    ? "projects-description-project-one isVisible"
    : "projects-description-project-one isHidden";
  let secondProjectStyles = secondProjectVis
    ? "projects-description-project-two isVisible"
    : "projects-description-project-two isHidden";
  let thirdProjectStyles = thirdProjectVis
    ? "projects-description-project-three isVisible"
    : "projects-description-project-three isHidden";
  return (
    <div className="ProjectsContainer">
      <div className="Projects">
        <span className="project-main-title">My Projects</span>
        <div className="ProjectsSeperatingDiv">
          <div
            className="project-container"
            onClick={() => handleClick("firstProject")}
          >
            <FirstProject />
          </div>
          <div
            className="project-container"
            onClick={() => handleClick("secondProject")}
          >
            <SecondProject />
          </div>
          <div
            className="project-container"
            onClick={() => handleClick("thirdProject")}
          >
            <ThirdProject />
          </div>
        </div>
        <div className="project-explain-container" ref={myRef}>
          <div className={firstProjectStyles}>
            <FirstProjectExplanation />
          </div>
          <div className={secondProjectStyles}>
            <SecondProjectExplanation />
          </div>
          <div className={thirdProjectStyles}>
            <ThirdProjectExplanation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsComp;
