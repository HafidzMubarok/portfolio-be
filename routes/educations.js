var express = require('express');
var router = express.Router();

//Controller
const education_controller = require('../controllers/educationController');

//Post Method
router.post('/', education_controller.education_post);

//Get all Method
router.get('/all', education_controller.education_get_all);

//Get by ID Method
router.get('/:id', education_controller.education_get_by_id);

//Update by ID Method
router.patch('/:id', education_controller.education_update);

//Delete by ID Method
router.delete('/:id', education_controller.education_delete);

module.exports = router;
