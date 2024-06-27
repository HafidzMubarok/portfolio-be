var express = require('express');
var router = express.Router();

//Controller
const article_controller = require('../controllers/articleController');

//Post Method
router.post('/', article_controller.article_post);

//Get all Method
router.get('/all', article_controller.article_get_all);

//Get by ID Method
router.get('/:id', article_controller.article_get_by_id);

//Update by ID Method
router.patch('/:id', article_controller.article_update);

//Delete by ID Method
router.delete('/:id', article_controller.article_delete);

module.exports = router;
