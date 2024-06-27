const asyncHandler = require("express-async-handler");
const Model = require('../models/WorkHistory');

exports.work_post = asyncHandler(async (req, res, next) => {
    const data = new Model({
        company: req.body.company,
        position: req.body.position,
        entry_date: req.body.entryDate,
        out_date: req.body.outDate,
        description: req.body.description,
    }); 

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }catch (error) {
        res.status(400).json({message: error.message})
    }
});

exports.work_get_all = asyncHandler(async (req, res, next) => {
    try{
        const data = await Model.find();
        res.json(data)
    }catch(error){
        res.status(500).json({message: error.message})
    }
});

exports.work_get_by_id = asyncHandler(async (req, res, next) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data)
    }catch (error) {
        res.status(500).json({ message: error.message })
    }
});

exports.work_update = asyncHandler(async (req, res, next) => {
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

exports.work_delete = asyncHandler(async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document ${data.name} has been deleted..`)
    }catch (error) {
        res.status(400).json({ message: error.message })
    }
});