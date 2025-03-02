// routes/stylesRouter.js
import express from "express";
import { allStyles } from "../data/styles.js";  // Import all styles data

const router = express.Router();

// Route to display all styles
router.get("/", (req, res) => {
    res.render("pages/styles", { styles: allStyles });  // Pass all styles to the view
});

// Route to display a specific style (e.g., Hip-Hop, Ballet)
router.get("/:style", (req, res) => {
    const styleName = req.params.style.toLowerCase();
    const style = allStyles.find(s => s.name.toLowerCase() === styleName);

    if (!style) {
        return res.status(404).send("Style not found");
    }

    res.render("pages/styleDetail", { style });  // Render a detailed style page
});

export default router;
