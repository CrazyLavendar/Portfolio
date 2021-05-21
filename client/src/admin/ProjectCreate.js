import React, { useState, useEffect } from "react";
import { createProject } from "../functions/project";
import { getTechs } from "../functions/techs";
import ProjectCreateForm from "./ProjectCreateForm";
import FileUpload from "./FileUpload";
import { LoadingOutlined } from "@ant-design/icons";

const ProjectCreate = () => {
  const initialState = {
    title: "Animal Shelter",
    startDate: "2020 - present ",
    description:
      "The most expanded application I had opportunity to work with. I've learned many technologies and my code was reviewed by awesome curator. Application handles all adoption processess and allows to store all evidence on adopting animals from animal shelter.",
    images: [],
    url: "",
    technologies: [],
  };

  const [values, setValues] = useState(initialState);
  const [techOptions, setTechOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadTechs();
  }, []);

  const loadTechs = () =>
    getTechs().then((t) => {
      setValues({ ...values, technologies: t.data });
      setTechOptions(t.data);
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    createProject(values)
      .then((res) => {
        console.log(res);
        window.alert(`"${res.data.title}" is created`);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        // if (err.response.status === 400) toast.error(err.response.data);
      });
  };
  const handleChange = (e) => {
    console.log(values);
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.name, " ----- ", e.target.value);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3"></div>
        <br />

        <div className="col-md-7">
          {loading ? (
            <LoadingOutlined className="text-danger h1" />
          ) : (
            <h4>Project create</h4>
          )}

          <hr />

          <div className="p-3">
            <FileUpload
              values={values}
              setValues={setValues}
              setLoading={setLoading}
            />
          </div>

          <ProjectCreateForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            setValues={setValues}
            values={values}
            techOptions={techOptions}
            setTechOptions={setTechOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCreate;
