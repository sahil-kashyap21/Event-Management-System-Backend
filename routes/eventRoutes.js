const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.post('/create-event', eventController.createEvent);
router.get('/', eventController.getEvents);
router.delete("/delete-event/:id", eventController.deleteEvent);

module.exports = router;