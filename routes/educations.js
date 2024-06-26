var express = require('express');
var router = express.Router();

const Model = require('../models/Education');

//Post Method
router.post('/', async (req, res) => {
  const data = new Model({
    institution: req.body.institution,
    qualification: req.body.qualification,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
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
router.get('/all', async (req, res) => {
  try{
    const data = await Model.find();
    res.json(data)
  }
  catch(error){
    res.status(500).json({message: error.message})
  }
});

//Get by ID Method
router.get('/:id', async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data)
  }
  catch (error) {
    res.status(500).json({ message: error.message })
  }
});

//Update by ID Method
router.patch('/:id', async (req, res) => {
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
router.delete('/:id', async (req, res) => {
  try {
      const id = req.params.id;
      const data = await Model.findByIdAndDelete(id)
      res.send(`Document ${data.name} has been deleted..`)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
});

module.exports = router;
