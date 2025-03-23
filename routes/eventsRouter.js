import express from 'express';
import { allData } from "../data/data.js";

const router = express.Router();


router.get("/", (req, res) => {
    res.render("pages/list", { 
        title: "Dance Events",
        heading: "Upcoming Dance Events",
        description: "Join the best workshops and competitions!",
        items: allData.events,
        basePath: "/events",
        linkText: "View details"
    });
});


router.get("/:eventSlug", (req, res) => {
    const eventSlug = req.params.eventSlug.toLowerCase();
    const event = allData.events.find(e => e.slug === eventSlug);

    if (!event) {
        return res.status(404).render("pages/error", { 
            message: "Event not found", 
            backLink: "/events" 
        });
    }

    res.render("pages/detail", { item: event, itemType: "Event" });
});

export default router;
