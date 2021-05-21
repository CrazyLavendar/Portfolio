import axios from "axios";

export const createProject = async (project) =>
  await axios.post(`${process.env.REACT_APP_API}/project`, project);

export const getProjects = async () =>
  await axios.get(`${process.env.REACT_APP_API}/project`);

export const getOneProject = async (slug) =>
  await axios.get(`${process.env.REACT_APP_API}/project/${slug}`);

export const updateOneProject = async (slug, project) =>
  await axios.put(`${process.env.REACT_APP_API}/project/${slug}`, project);

export const deleteOneProject = async (slug) =>
  await axios.delete(`${process.env.REACT_APP_API}/project/${slug}`);
