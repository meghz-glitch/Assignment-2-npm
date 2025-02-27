const express = require("express");
const router = express.Router();
const events = require("../data/events");

router.get("/", (req, res) => {
    res.render("pages/events", { events });
});

router.get("/:event", (req, res) => {
    const event = events.find(e => e.name.toLowerCase() === req.params.event.toLowerCase());
    if (event) {
        res.render("pages/styles", {item: event });
    } else {
res.status(404).send("Event not found");
    }
});
module.exports = router;