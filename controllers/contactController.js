/*
@desc get all contacts
@route Get /contacts/
@access public
*/
const getContacts = async (req,res)=>{
    try{
        res.status(200).json({message:"Get all contacts"})
    }catch(err){
        res.status(400).json({errorMessage:err.message})
    }
};

/*
@desc get contact
@route Get /contacts/:id
@access public
*/
const getContact = async (req,res)=>{
    try{
        res.status(200).json({message:`we are going to get a contact with id ${req.params.id}`})
    }catch(err){
        res.status(400).json({errorMessage:err.message})
    }
};

/*
@desc create contact
@route Post /contacts/
@access public
*/
const createContact = async (req,res)=>{
    try{
        res.status(200).json({message:"create contact."})
    }catch(err){
        res.status(400).json({errorMessage:err.message})
    }
};


/*
@desc update contact
@route Put /contacts/:id
@access public
*/
const updateContact = async (req,res)=>{
    try{
        res.status(200).json({message:`we are going to update a contact with id ${req.params.id}`})
    }catch(err){
        res.status(400).json({errorMessage:err.message})
    }
};


/*
@desc delete contact
@route delete /contacts/:id
@access public
*/
const deleteContact = async (req,res)=>{
    try{
        res.status(200).json({message:`we are going to delete a contact with id ${req.params.id}`})
    }catch(err){
        res.status(400).json({errorMessage:err.message})
    }
};

/*
@desc delete all contacts
@route delete /contacts/
@access public
*/
const deleteAllContacts = async (req,res)=>{
    try{
        res.status(200).json({message:`Delete all contacts.`})
    }catch(err){
        res.status(400).json({errorMessage:err.message})
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