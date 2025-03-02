// routes/stylesRouter.js

import express from 'express';
import { allStyles } from "../data/events.js";  // Import all styles data

const router = express.Router();

// Route for all styles
router.get("/", (req, res) => {
    res.render("pages/styles", { styles: allStyles });
});

// Route for a specific style
router.get("/:style", (req, res) => {
    const styleName = req.params.style;
    const style = allStyles.find(s => s.name.toLowerCase() === styleName.toLowerCase());

    if (!style) {
        return res.status(404).send("Dance style not found");
    }

    res.render("pages/styleDetail", { style }); // Assuming you have a styleDetail.ejs for displaying style details
});

export default router;
