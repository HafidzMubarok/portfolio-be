var express = require('express');
var router = express.Router();

//Controller
const feedback_controller = require('../controllers/feedbackController')

//Post Method
router.post('/', feedback_controller.feedback_post);

module.exports = router;