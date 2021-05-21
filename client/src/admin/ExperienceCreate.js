import React, { useState } from "react";
import { createExperience } from "../functions/experience";
import ExperienceCreateForm from "./ExperienceCreateForm";

const ExperienceCreate = ({ history }) => {
  const initialState = {
    company: "Front End Kumar edited Org",
    title: "React-End Developer",
    years: "10.2019 - present",
    mainTech: "",
    technologies: "",
  };

  const [values, setValues] = useState(initialState);
  // const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let _mainTech = values.mainTech;
    _mainTech = _mainTech.split(",");

    let _technologies = values.technologies;
    _technologies = _technologies.split(",");

    createExperience({
      company: values.company,
      title: values.title,
      years: values.years,
      mainTech: _mainTech,
      technologies: _technologies,
    })
      .then((res) => {
        console.log(res);
        window.alert(`"${res.data.company}" is added`);
        // window.location.reload();
        history.push("/experience");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    console.log(values);
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.name, " ----- ", e.target.value);
  };

  // const handleTechnologies = (e) => {
  //   console.log(technologies);
  //   setTechnologies({ ...technologies, [e.target.name]: e.target.value });
  //   // console.log(e.target.name, " ----- ", e.target.value);
  // };
  // const handleMainTech = (e) => {
  //   console.log(values);
  //   setValues({ ...values, [e.target.name]: e.target.value });
  //   // console.log(e.target.name, " ----- ", e.target.value);
  // };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3"></div>
        <br />

        <div className="col-md-7">
          <h4>Experience create</h4>

          {/*JSON.stringify(values.images)*/}

          <ExperienceCreateForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            // handleTechnologies={handleTechnologies}
            // handleMainTech={handleMainTech}
            setValues={setValues}
            values={values}
          />
        </div>
      </div>
    </div>
  );
};

export default ExperienceCreate;
