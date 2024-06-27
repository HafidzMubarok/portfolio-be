var express = require('express');
var router = express.Router();

//Controller
const skill_controller = require('../controllers/skillController');

//Post Method
router.post('/', skill_controller.skill_post);

//Get all Method
router.get('/all', skill_controller.skill_get_all);

//Get by ID Method
router.get('/:id', skill_controller.skill_get_by_id);

//Update by ID Method
router.patch('/:id', skill_controller.skill_update);

//Delete by ID Method
router.delete('/:id', skill_controller.skill_delete);

module.exports = router;
