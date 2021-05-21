import React, { useState, useEffect } from "react";
import { getExperienceOne, updateExperienceOne } from "../functions/experience";
import ExperienceUpdateForm from "./ExperienceUpdateForm";

const ExperienceUpdate = ({ match, history }) => {
  const initialState = {
    company: "",
    title: "",
    years: "",
    mainTech: [],
    technologies: [],
  };
  const { slug } = match.params;

  const [mainTechUpdate, setMainTechUpdate] = useState(false);
  const [technologyUpdate, setTechnologyUpdate] = useState(false);
  const [values, setValues] = useState(initialState);

  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadOneExperience();
  }, [match, history]);

  const loadOneExperience = () => {
    getExperienceOne(slug)
      .then((res) => {
        setValues(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.data);
        history.push("/");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let _mainTech = values.mainTech;
    if (mainTechUpdate) _mainTech = _mainTech.split(",");

    let _technologies = values.technologies;
    if (technologyUpdate) _technologies = _technologies.split(",");

    updateExperienceOne(slug, {
      company: values.company,
      title: values.title,
      years: values.years,
      mainTech: _mainTech,
      technologies: _technologies,
    })
      .then((res) => {
        console.log(res);
        window.alert(`"${res.data.company}" is updated`);
        // window.location.reload();
        history.push("/experience");
      })
      .catch((err) => {
        console.log(err);
      });
    //
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.name, " ----- ", e.target.value);
  };
  const handleTechnologiesChange = (e) => {
    setTechnologyUpdate(true);
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.name, " ----- ", e.target.value);
  };
  const handleMainTechChange = (e) => {
    setMainTechUpdate(true);
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.name, " ----- ", e.target.value);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3"></div>
        <br />

        <div className="col-md-7">
          <h4>Experience Update</h4>

          <hr />

          {/*JSON.stringify(values.images)*/}

          <ExperienceUpdateForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleTechnologiesChange={handleTechnologiesChange}
            handleMainTechChange={handleMainTechChange}
            values={values}
          />
        </div>
      </div>
    </div>
  );
};

export default ExperienceUpdate;
