import axios from "axios";

export const createExperience = async (experience) =>
  await axios.post(`${process.env.REACT_APP_API}/experience`, experience);

export const getExperience = async () =>
  await axios.get(`${process.env.REACT_APP_API}/experience`);

export const getExperienceOne = async (slug) =>
  await axios.get(`${process.env.REACT_APP_API}/experience/${slug}`);

export const updateExperienceOne = async (slug, experience) =>
  await axios.put(
    `${process.env.REACT_APP_API}/experience/${slug}`,
    experience
  );

export const deleteExperienceOne = async (slug) =>
  await axios.delete(`${process.env.REACT_APP_API}/experience/${slug}`);
