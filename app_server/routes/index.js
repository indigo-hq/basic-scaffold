var express = require('express');
var router = express.Router();

var ctrlStatic = require('../controllers/static');

/* Home Page */
router.get('/',ctrlStatic.home);

module.exports = router;
