// routes/eventsRouter.js

import express from 'express';
import { allEvents } from "../data/events.js";  // Import all events data

const router = express.Router();

// Route for all events
router.get("/", (req, res) => {
    res.render("pages/events", { events: allEvents });
});

// Route for a specific event
router.get("/:event", (req, res) => {
    const eventName = req.params.event;
    const event = allEvents.find(e => e.name.toLowerCase() === eventName.toLowerCase());

    if (!event) {
        return res.status(404).send("Event not found");
    }

    res.render("pages/eventDetail", { event }); // Assuming you have an eventDetail.ejs for displaying event details
});

export default router;
    