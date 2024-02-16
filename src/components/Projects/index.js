import React from "react";
import Typewriter from "typewriter-effect";
import "./index.css";
import Project from "./project";
import Separator from "../Separator";
import Twilio from "../../assets/Twilio.png";
import Bank from "../../assets/Bank.png";
import ReactLogo from "../../assets/react-logo.svg";

function Projects({ projectsRef }) {
  return (
    <div ref={projectsRef} className="Projects">
      <Project
        projectName={"Value-based Healthcare Product"}
        projectObj={"Revolutionizing healthcare by transitioning from the traditional fee-for-service model to a value-based care approach"}
        projectRole={"React Developer"}
        projectSize={"16"}
        projectStack={"React, TypeScript, Redux, AntDesign, HTML, SASS"}
        projectDescription={
          "This software targets a segment of the USA healthcare system dedicated to providing healthcare access for vulnerable and low-income populations. It aims to transition this segment of healthcare from the traditional fee-for-service model to a Value-based Care approach, emphasizing improved patient outcomes, enhanced healthcare quality, satisfaction, and cost control. With a focus on a patient-centered approach and preventive care, the software aims to create a more efficient and responsive healthcare system designed to meet the needs of vulnerable and low-income populations."
        }
        projectBrowser={
          <img className="project-img" src={Twilio} alt="Twilio"></img>
        }
      />
      <Separator style={{ margin: "1em 0 1em 0" }} />
      <Project
        projectName={"Skill Management Tool"}
        projectObj={"Streamlining employee training, evaluation, and project allocation."}
        projectRole={"Fullstack Developer"}
        projectSize={"4"}
        projectStack={"React.js, Node.js, Express.js, TypeScript, Redux, AntDesign, HTML, CSS"}
        projectDescription={
          "A streamlined platform for Resource Management Team to manage employee trainings across diverse technical and non-technical skills. This tool not only captures training specifics and assessment outcomes but also helps resource team in assigning projects to employees, considering their scores and proficiency in specific domains."
        }
        projectBrowser={
          <img className="project-img" src={Twilio} alt="Twilio"></img>
        }
      />
      <Separator style={{ margin: "1em 0 1em 0" }} />
      <Project
        projectName={"Payments Portal"}
        projectObj={"Payments Portal for a Bank"}
        projectRole={"React Developer"}
        projectSize={"7"}
        projectStack={"Frontend: React | Backend: Java"}
        projectDescription={
          "A payment portal designed specifically for the bank's distinguished clients, managing a substantial volume of transactions. This software replaces the bank's previous offline process, which relied on manual supervision, with an efficient electronic alternative, offering a seamless and time-saving experience."
        }
        projectBrowser={
          <img
            style={{ height: "80vh" }}
            className="project-img"
            src={Bank}
            alt="Bank"
          ></img>
        }
      />
      {/* <Separator style={{ margin: "1em 0 1em 0" }} /> */}
      {/* <Project
        projectName={"Mainframe to React Migration"}
        projectObj={"International Bank Administration website"}
        projectRole={"React Developer"}
        projectSize={"10"}
        projectStack={"Frontend: React | Backend: Java"}
        projectDescription={
          "International bank needed to transform their legacy system coded in COBOL to a user-efficient React website."
        }
        projectBrowser={
          <div
            style={{
              background: "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#2afa05",
              fontSize: "calc(5vw + 2vmin)",
            }}
            className="project-img"
          >
            <Typewriter
              options={{ loop: true }}
              onInit={(typewriter) => {
                typewriter.typeString("Mainframe").start().pauseFor(5000);
              }}
            />
            <span style={{ margin: "0 0 0 5vw", color: "white" }}>-&gt;</span>
            <img
              src={ReactLogo}
              className="react-logo App-logo"
              alt="React logo"
            />
          </div>
        }
      /> */}
    </div>
  );
}

export default Projects;
