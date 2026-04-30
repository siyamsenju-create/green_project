const Contact = require('../models/Contact');

const getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

const createContact = async (req, res, next) => {
  try {
    const { name, email, phone, service, message } = req.body;
    const contact = await Contact.create({ name, email, phone, service, message });
    res.status(201).json({ success: true, data: contact });
  } catch (error) {
    next(error);
  }
};

module.exports = { getContacts, createContact };
