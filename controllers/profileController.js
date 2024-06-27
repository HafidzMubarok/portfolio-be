const asyncHandler = require("express-async-handler");
const Model = require('../models/Profile');

exports.profile_post = asyncHandler(async (req, res, next) => {
    const data = new Model({
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        professional_motto: req.body.professionalMotto,
        email: req.body.email,
        whatsapp: req.body.whatsapp,
        linkedin: req.body.linkedin,
        github: req.body.github,
        instagram: req.body.instagram,
        x: req.body.x,
        about_me: req.body.aboutMe,
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }catch (error) {
        res.status(400).json({message: error.message})
    }
});

exports.profile_get_all = asyncHandler(async (req, res, next) => {
    try{
        const data = await Model.find();
        res.json(data)
    }catch(error){
        res.status(500).json({message: error.message})
    }
});

exports.profile_get_by_id = asyncHandler(async (req, res, next) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data)
    }catch (error) {
        res.status(500).json({ message: error.message })
    }
});

exports.profile_update = asyncHandler(async (req, res, next) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };
    
        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )
    
        res.send(result)
    }catch (error) {
        res.status(400).json({ message: error.message })
    }
});

exports.profile_delete = asyncHandler(async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document ${data.name} has been deleted..`)
    }catch (error) {
        res.status(400).json({ message: error.message })
    }
});