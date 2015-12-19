/**
 * Created by Danny on 12/18/15.
 */
var express = require('express');
var controller = require('./pastPayChecks.controller.js');

var router = express.Router();

router.post('/newPayCheck', controller.newPayCheck);

module.exports = router;
