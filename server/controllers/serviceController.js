const Service = require('../models/Service');

const getServices = async (req, res, next) => {
  try {
    const services = await Service.find().sort({ order: 1 });
    res.status(200).json(services);
  } catch (error) {
    next(error);
  }
};

const createService = async (req, res, next) => {
  try {
    const service = await Service.create(req.body);
    res.status(201).json(service);
  } catch (error) {
    next(error);
  }
};

const updateService = async (req, res, next) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!service) return res.status(404).json({ message: 'Service not found' });
    res.status(200).json(service);
  } catch (error) {
    next(error);
  }
};

const deleteService = async (req, res, next) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    if (!service) return res.status(404).json({ message: 'Service not found' });
    res.status(200).json({ message: 'Service removed' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getServices, createService, updateService, deleteService };
