import express from "express";
import { allStyles } from "../data/events.js";

const router = express.Router();


router.get("/", (req, res) => {
    res.render("pages/events", { events: allStyles });
});


router.get("/:style", (req, res) => {
    const styleName = req.params.style.toLowerCase();
    const style = allStyles.find(s => s.name.toLowerCase() === styleName);

    if (!style) {
        return res.status(404).send("Event style not found");
    }

    
    res.render("pages/events", { events: [style] });
});

export default router;
