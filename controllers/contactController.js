const Contact = require("../models/contactModel");

/*
@desc get all contacts
@route Get /contacts/
@access private
*/
const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find({user_id: req.user.id });
        res.status(200).json(contacts);
    } catch (err) {
        res.status(400).json({ errorMessage: err.message });
    }
};

/*
@desc get contact
@route Get /contacts/:id
@access private
*/
const getContact = async (req,res)=>{
    try {
        const contact = await Contact.findById({_id:req.params.id , user_id:req.user.id});
        res.status(200).json(contact);
    } catch (err) {
        res.status(400).json({ errorMessage: err.message });
    }
};

/*
@desc create contact
@route Post /contacts/
@access private
*/
const createContact = async (req, res) => {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
        return res.status(400).json({ errorMessage: 'All fields are required.' });
    }

    const contact = new Contact({ name, email, phone ,user_id: req.user.id});
    try {
        const savedContact = await contact.save();
        res.status(201).json(savedContact);
    } catch (err) {
        res.status(500).json({ errorMessage: err.message });
    }
};


/*
@desc update contact
@route Put /contacts/:id
@access private
*/
const updateContact = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);

        if (!contact) {
            return res.status(404).json({ errorMessage: 'Contact not found.' });
        }

        // Ensure the current user is authorized to update the contact
        if (contact.user_id.toString() !== req.user.id) {
            return res.status(403).json({ errorMessage: 'User not authorized to update this contact.' });
        }

        const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.status(200).json(updatedContact);
    } catch (err) {
        res.status(500).json({ errorMessage: 'Server error. Please try again later.' });
    }
};



/*
@desc delete contact
@route delete /contacts/:id
@access private
*/
const deleteContact = async (req, res) => {
    try {
        const targetContact = await Contact.findById(req.params.id);

        if (!targetContact) {
            return res.status(404).json({ errorMessage: 'Contact not found.' });
        }

        if (targetContact.user_id.toString() !== req.user.id) {
            return res.status(403).json({ errorMessage: 'User not authorized to update this contact.' });
        }

        const deletedContact = await Contact.findByIdAndDelete(req.params.id)

        res.status(200).json({ message: 'Contact deleted successfully', contact: deletedContact });
    } catch (err) {
        res.status(400).json({ errorMessage: err.message });
    }
};

/*
@desc delete all contacts
@route delete /contacts/
@access private only admins
*/
const deleteAllContacts = async (req,res)=>{
    try {
        const result = await Contact.deleteMany({});
        res.status(200).json({ message: 'All contacts deleted successfully', result });
    } catch (err) {
        res.status(400).json({ errorMessage: err.message });
    }
};

module.exports = {
    getContact,
    getContacts,
    createContact,
    updateContact,
    deleteContact,
    deleteAllContacts
};