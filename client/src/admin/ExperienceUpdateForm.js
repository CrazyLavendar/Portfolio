import React from "react";
import { Select } from "antd";

const { Option } = Select;

const ExperienceUpdateForm = ({
  handleSubmit,
  handleChange,
  values,
  handleMainTechChange,
  handleTechnologiesChange,
}) => {
  // destructure
  const { company, title, years, mainTech, technologies } = values;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Company Name</label>
        <input
          type="text"
          name="company"
          className="form-control"
          display="inline-block"
          value={company}
          onChange={(value) => handleChange(value)}
        />
      </div>

      <div className="form-group">
        <label>Title </label>
        <input
          type="text"
          name="title"
          className="form-control"
          value={title}
          onChange={(value) => handleChange(value)}
        />
      </div>

      <div className="form-group">
        <label>Years </label>
        <input
          type="text"
          name="years"
          className="form-control"
          value={years}
          onChange={(value) => handleChange(value)}
        />
      </div>

      <div className="form-group">
        <label>MainTech -separate with comma-</label>
        <input
          type="text"
          name="mainTech"
          className="form-control"
          value={mainTech}
          onChange={(value) => handleMainTechChange(value)}
        />
      </div>

      <div className="form-group">
        <label>Technologies -separate with comma- </label>
        <input
          type="text"
          name="technologies"
          className="form-control"
          value={technologies}
          onChange={(value) => handleTechnologiesChange(value)}
        />
      </div>

      <br />
      <button className="btn btn-outline-info">Save</button>
    </form>
  );
};

export default ExperienceUpdateForm;
