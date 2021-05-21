import React from "react";
import { Select } from "antd";

const { Option } = Select;

const ProjectCreateForm = ({
  handleSubmit,
  handleChange,
  setValues,
  values,
  techOptions,
}) => {
  const { title, startDate, description, url, technologies } = values;
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          className="form-control"
          value={title}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        {" "}
        <label>Duration Date</label>
        <input
          type="text"
          name="startDate"
          className="form-control"
          value={startDate}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          name="description"
          className="form-control"
          value={description}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>URL </label>
        <input
          type="text"
          name="url"
          className="form-control"
          value={url}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Technologies</label>

        <Select
          mode="multiple"
          style={{ width: "100%" }}
          placeholder="Please select"
          value={technologies.name}
          onChange={(value) => setValues({ ...values, technologies: value })}
        >
          {techOptions.length &&
            techOptions.map((t) => (
              <Option key={t._id} value={t._id}>
                {t.name}
              </Option>
            ))}
        </Select>
      </div>

      <br />
      <button className="btn btn-outline-info">Save</button>
    </form>
  );
};

export default ProjectCreateForm;
