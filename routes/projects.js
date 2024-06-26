var express = require('express');
var router = express.Router();

const Model = require('../models/Project');

//Post Method
router.post('/project', async (req, res) => {
  const data = new Model({
    title: req.body.title,
    subtitle: req.body.subtitle,
    start_date: req.body.startDate,
    end_date: req.body.endDate,
    description: req.body.description,
  })

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave)
  }
  catch (error) {
    res.status(400).json({message: error.message})
  }
});

//Get all Method
router.get('/projects', async (req, res) => {
  try{
    const data = await Model.find();
    res.json(data)
  }
  catch(error){
    res.status(500).json({message: error.message})
  }
});

//Get by ID Method
router.get('/project/:id', async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data)
  }
  catch (error) {
    res.status(500).json({ message: error.message })
  }
});

//Update by ID Method
router.patch('/project/:id', async (req, res) => {
  try {
      const id = req.params.id;
      const updatedData = req.body;
      const options = { new: true };

      const result = await Model.findByIdAndUpdate(
          id, updatedData, options
      )

      res.send(result)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
});

//Delete by ID Method
router.delete('/project/:id', async (req, res) => {
  try {
      const id = req.params.id;
      const data = await Model.findByIdAndDelete(id)
      res.send(`Document with ${data.name} has been deleted..`)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
});

module.exports = router;
