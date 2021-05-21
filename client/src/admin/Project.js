import React, { useState, useEffect } from "react";
import { getProjects, deleteOneProject } from "./../functions/project";
import { EditOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const Project = () => {
  const [projects, setProjects] = useState([]);
  const [slug, setSlug] = useState("");
  useEffect(() => {
    loadingProjects();
    console.log(projects);
  }, []);

  const loadingProjects = () => {
    getProjects()
      .then((e) => {
        console.log(e.data);
        setProjects(e.data);
      })
      .catch((err) => console.log(err.data));
  };

  const deleteProject = (slug) => {
    deleteOneProject(slug)
      .then((e) => {
        console.log(e.data);
        window.location.reload();
      })
      .catch((err) => console.log(err.data));
  };
  return (
    <div
      className="container-fluid"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="row">
        <div className="col-md-2"></div>

        <div className="col">
          <h4>All Projects</h4>
          <br />
          <hr />
          <Link to={`/project/create/`}>
            <PlusCircleOutlined
              style={{
                fontSize: "25px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="text-warning"
            />{" "}
          </Link>
          <div className="row">
            {projects.map((project) => (
              <div
                key={project._id}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {" "}
                <h4>{project.title}</h4>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  <Link to={`/project/update/${project.slug}`}>
                    <EditOutlined
                      style={{ fontSize: "25px" }}
                      className="text-danger"
                    />{" "}
                    <br /> Edit
                  </Link>
                  <button
                    className="btn btn-secondary"
                    onClick={() => deleteProject(project.slug)}
                  >
                    Delete
                  </button>
                </div>
                <br />
                <br />
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
