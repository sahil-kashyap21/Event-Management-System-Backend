const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    heading: String,
    date: {
        year: Number,
        month: String,
    },
    location: String,
    description: String,
    img: String,
}, { timestamps: true });

// Pre-save hook to automatically assign incremented id
eventSchema.pre("save", async function (next) {
    if (this.isNew) {
        try {
            // Find the last event by sorting by 'id' in descending order and taking the first result
            const lastEvent = await this.constructor.findOne().sort({ id: -1 }).exec();
            
            // If no event exists, start the id from 1, else increment the last event's id
            this.id = lastEvent ? lastEvent.id + 1 : 1;
            
            next();
        } catch (error) {
            next(error);
        }
    } else {
        next();
    }
});

module.exports = mongoose.model("event", eventSchema);