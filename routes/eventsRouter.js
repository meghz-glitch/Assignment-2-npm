
import express from 'express';
import { allEvents } from "../data/events.js";  

const router = express.Router();


router.get("/", (req, res) => {
    res.render("pages/events", { events: allEvents });
});


router.get("/:event", (req, res) => {
    const eventName = req.params.event;
    const event = allEvents.find(e => e.name.toLowerCase() === eventName.toLowerCase());

    if (!event) {
        return res.status(404).send("Event not found");
    }

    res.render("pages/eventDetail", { event }); 
});

export default router;
    