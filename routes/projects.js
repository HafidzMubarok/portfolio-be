var express = require('express');
var router = express.Router();

//Controller
const project_controller = require('../controllers/projectController');

//Post Method
router.post('/project', project_controller.project_post);

//Get all Method
router.get('/projects', project_controller.project_get_all);

//Get by ID Method
router.get('/project/:id', project_controller.project_get_by_id);

//Update by ID Method
router.patch('/project/:id', project_controller.project_update);

//Delete by ID Method
router.delete('/project/:id', project_controller.project_delete);

module.exports = router;
