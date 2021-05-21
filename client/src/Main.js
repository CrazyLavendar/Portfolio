import React, { useState, useEffect } from "react";
import $ from "jquery";
import "./Main.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { getExperience } from "./functions/experience";
import { getProjects } from "./functions/project";
import { getTechs } from "./functions/techs";

const Main = () => {
  const [experience, setExperience] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [resumeData, setResumeData] = useState({});
  const [sharedData, setSharedData] = useState({});
  const [social, setSocial] = useState([]);

  useEffect(() => {
    componentDidMount();
    extractExperience();
    extractProjects();
    extractSkills();
    loadSocialNetwork();
    // console.log(state);
  }, []);

  const extractExperience = () =>
    getExperience()
      .then((e) => setExperience(e.data))
      .catch((err) => console.log(err.data));

  const extractProjects = () =>
    getProjects()
      .then((e) => setProjects(e.data))
      .catch((err) => console.log(err.data));

  const extractSkills = () =>
    getTechs()
      .then((e) => setSkills(e.data))
      .catch((err) => console.log(err.data));

  const applyPickedLanguage = (pickedLanguage) => {
    document.documentElement.lang = pickedLanguage;
    var resumePath = `res_primaryLanguage.json`;
    loadResumeFromPath(resumePath);
  };

  // const swapCurrentlyActiveLanguage = (oppositeLangIconId) => {
  //   var pickedLangIconId =
  //     oppositeLangIconId === window.$primaryLanguageIconId
  //       ? window.$secondaryLanguageIconId
  //       : window.$primaryLanguageIconId;
  //   document
  //     .getElementById(oppositeLangIconId)
  //     .removeAttribute("filter", "brightness(40%)");
  //   document
  //     .getElementById(pickedLangIconId)
  //     .setAttribute("filter", "brightness(40%)");
  // };

  const componentDidMount = () => {
    loadSharedData();
    applyPickedLanguage(window.$primaryLanguage);
  };

  const loadResumeFromPath = (path) => {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function (data) {
        //setState({ setResumeData: data });
        setResumeData(data);
      },
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  };

  const loadSharedData = () => {
    $.ajax({
      url: `portfolio_shared_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        // setState({ setSharedData: data });
        setSharedData(data);
        // document.title = `Document Title`;
      },
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  };

  const loadSocialNetwork = () => {
    setSocial(sharedData.basic_info);
    console.log(social);
  };

  return (
    <>
      <Header sharedData={sharedData.basic_info} />
      <div className="col-md-12 mx-auto text-center language">
        <span key="linkedin" className="m-4">
          <a
            href="https://www.linkedin.com/in/jayamvimal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin" style={{ fontSize: "200%" }}></i>
          </a>
        </span>
      </div>
      <About
        resumeBasicInfo={resumeData.basic_info}
        sharedBasicInfo={sharedData.basic_info}
      />

      <Projects
        resumeProjects={projects}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Skills sharedSkills={skills} resumeBasicInfo={resumeData.basic_info} />

      <Experience
        resumeExperience={experience}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Footer sharedBasicInfo={sharedData.basic_info} />
    </>
  );
};

export default Main;
