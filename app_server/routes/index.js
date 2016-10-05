var express = require('express');
var router = express.Router();

var ctrlStatic = require('../controllers/static');

/* Home Page */
router.get('/',ctrlStatic.home);
router.get('/sobre',ctrlStatic.sobre);

module.exports = router;
