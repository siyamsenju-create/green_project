const Project = require('../models/Project');

const getProjects = async (req, res, next) => {
  try {
    const projects = await Project.find().sort({ completedDate: -1 });
    res.status(200).json(projects);
  } catch (error) {
    next(error);
  }
};

const getProjectById = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.status(200).json(project);
  } catch (error) {
    next(error);
  }
};

const createProject = async (req, res, next) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (error) {
    next(error);
  }
};

const updateProject = async (req, res, next) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.status(200).json(project);
  } catch (error) {
    next(error);
  }
};

const deleteProject = async (req, res, next) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.status(200).json({ message: 'Project removed' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getProjects, getProjectById, createProject, updateProject, deleteProject };
