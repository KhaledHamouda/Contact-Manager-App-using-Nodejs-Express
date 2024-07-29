const express = require('express');
const router = express.Router();
const {
    getContact,
    getContacts,
    createContact,
    updateContact,
    deleteContact,
    deleteAllContacts
} = require('../controllers/contactController')

router.get("/", getContacts);

router.get("/:id", getContact);

router.post("/", createContact);

router.put("/:id", updateContact);

router.delete("/:id", deleteContact);

router.delete("/", deleteAllContacts);

module.exports = router