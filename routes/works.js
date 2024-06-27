var express = require('express');
var router = express.Router();

//Controller
const work_history_controller = require('../controllers/workHistoryController');;

//Post Method
router.post('/work', work_history_controller.work_post);

//Get all Method
router.get('/works', work_history_controller.work_get_all);

//Get by ID Method
router.get('/work/:id', work_history_controller.work_get_by_id);

//Update by ID Method
router.patch('/work/:id', work_history_controller.work_update);

//Delete by ID Method
router.delete('/work/:id', work_history_controller.work_delete);

module.exports = router;
