const express = require('express');
const router = express.Router();
const { getContacts, createContact } = require('../controllers/contactController');

router.route('/').get(getContacts).post(createContact);

module.exports = router;
