var express = require('express');
var router = express.Router();

//Controller
const user_controller = require('../controllers/userController');

//Post Method
router.post('/', user_controller.user_post);

// Handling post request
router.post("/signup", user_controller.user_signup);

// Handling post request
router.post("/login", user_controller.user_login);

router.get('/accessResource', user_controller.access_resource);

//Get all Method
router.get('/all', user_controller.user_get_all);

//Get by ID Method
router.get('/:id', user_controller.user_get_by_id);

//Update by ID Method
router.patch('/:id', user_controller.user_update);

//Delete by ID Method
router.delete('/:id', user_controller.user_delete);

module.exports = router;
