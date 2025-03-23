import express from 'express';
import { allData } from "../data/data.js";

const router = express.Router();

// Route to display all styles
router.get("/", (req, res) => {
    res.render("pages/list", { 
        title: "Dance Styles",
        heading: "Explore Dance Styles",
        description: "Learn about different dance styles and their origins!",
        items: allData.styles,
        basePath: "/styles",
        linkText: "Learn More"
    });
});

// Route to display a single style
router.get("/:styleSlug", (req, res) => {
    const styleSlug = req.params.styleSlug.toLowerCase();
    const style = allData.styles.find(s => s.slug === styleSlug);

    if (!style) {
        return res.status(404).render("pages/error", { 
            message: "Dance style not found", 
            backLink: "/styles" 
        });
    }

    res.render("pages/detail", { item: style, itemType: "Dance Style" });
});

export default router;
