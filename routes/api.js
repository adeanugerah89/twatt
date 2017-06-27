'use strict'
const express = require('express');
const router = express.Router();
const controller = require('../controllers/twatt_controller');

/* GET main endpoint. */
router.get('/search/:twitSearch', controller.search);
router.get('/timeline/:twitTimeline', controller.timeline);

module.exports = router;
