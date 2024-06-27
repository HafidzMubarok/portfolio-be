var express = require('express');
var router = express.Router();

//Controller
const profile_controller = require('../controllers/profileController');

//Post Method
router.post('/profile', profile_controller.profile_post);

//Get all Method
router.get('/profile', profile_controller.profile_get_all);

//Update by ID Method
router.patch('/profile/:id', profile_controller.profile_get_by_id);

//Delete by ID Method
router.delete('/profile/:id', profile_controller.profile_delete);

module.exports = router;
