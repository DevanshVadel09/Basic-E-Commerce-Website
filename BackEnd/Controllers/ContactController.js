const asyncHandler = require("express-async-handler");


// @desc Get all contacts
// @route GET /api/contact
// @access public

const getContacts = asyncHandler(async(req,res)=>{

    res.status(200).json({
        message:"Get all contacts"
    });

});



// @desc Create contact
// @route POST /api/contact
// @access public

const createContact = asyncHandler(async(req,res)=>{

    const {
        name,
        email,
        phone
    } = req.body;


    if(!name || !email || !phone){

        res.status(400);
        throw new Error("All fields are required");

    }


    res.status(201).json({

        message:"Contact created",

        data:{
            name,
            email,
            phone
        }

    });


});




// @desc Get single contact
// @route GET /api/contact/:id
// @access public

const getContact = asyncHandler(async(req,res)=>{

    res.status(200).json({

        message:`Get contact ${req.params.id}`

    });


});




// @desc Update contact
// @route PUT /api/contact/:id
// @access public

const updateContact = asyncHandler(async(req,res)=>{

    res.status(200).json({

        message:`Update contact ${req.params.id}`

    });


});





// @desc Delete contact
// @route DELETE /api/contact/:id
// @access public

const deleteContact = asyncHandler(async(req,res)=>{

    res.status(200).json({

        message:`Delete contact ${req.params.id}`

    });


});





module.exports = {

    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact

};
