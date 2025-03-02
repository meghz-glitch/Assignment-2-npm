// routes/eventsRouter.js
import express from "express";
import { allEvents } from "../data/events.js";  // Import all events data

const router = express.Router();

// Route to display all events
router.get("/", (req, res) => {
    res.render("pages/events", { events: allEvents });  // Pass all events to the view
});

// Route to display a specific event
router.get("/:event", (req, res) => {
    const eventName = req.params.event.toLowerCase();
    const event = allEvents.find(e => e.name.toLowerCase() === eventName);

    if (!event) {
        return res.status(404).send("Event not found");
    }

    res.render("pages/eventDetail", { event });  // Render a detailed event page
});

export default router;
