var express = require('express');
var router = express.Router();

const Model = require('../models/profileModel');

//Post Method
router.post('/profile', async (req, res) => {
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
  }
  catch (error) {
    res.status(400).json({message: error.message})
  }
});

//Get all Method
router.get('/profile', async (req, res) => {
  try{
    const data = await Model.find();
    res.json(data)
  }
  catch(error){
    res.status(500).json({message: error.message})
  }
});

//Get by ID Method
// router.get('/work/:id', async (req, res) => {
//   try {
//     const data = await Model.findById(req.params.id);
//     res.json(data)
//   }
//   catch (error) {
//     res.status(500).json({ message: error.message })
//   }
// });

//Update by ID Method
router.patch('/profile/:id', async (req, res) => {
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
router.delete('/profile/:id', async (req, res) => {
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
