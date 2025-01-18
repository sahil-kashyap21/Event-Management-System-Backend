const eventModel = require("../models/eventModel");

const getEvents = async (req, res) => {
    try {
        const events = await eventModel.find();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createEvent = async (req, res) => {
    try {
        const event = await eventModel.create(req.body);
        res.status(201).json(event);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getEvents, createEvent };