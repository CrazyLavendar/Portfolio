import React, { useState, useEffect } from "react";
import { getExperience, deleteExperienceOne } from "./../functions/experience";
import { EditOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const Experience = () => {
  const [experiences, setExperience] = useState([]);
  const [slug, setSlug] = useState("");
  useEffect(() => {
    loadingAllExperience();
    console.log(experiences);
  }, []);

  const loadingAllExperience = () => {
    getExperience()
      .then((e) => {
        console.log(e.data);
        setExperience(e.data);
      })
      .catch((err) => console.log(err.data));
  };

  const deleteExp = (slug) => {
    deleteExperienceOne(slug)
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
          <h4>All Experiences</h4>
          <br />
          <hr />
          <Link to={`/experience/create/`}>
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
            {experiences.map((experience) => (
              <div
                key={experience._id}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {" "}
                <h4>{experience.company}</h4>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  <Link to={`/experience/update/${experience.slug}`}>
                    <EditOutlined
                      style={{ fontSize: "25px" }}
                      className="text-danger"
                    />{" "}
                    <br /> Edit
                  </Link>
                  <button
                    className="btn btn-secondary"
                    onClick={() => deleteExp(experience.slug)}
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

export default Experience;
