import express from "express";
import { allStyles } from "../data/styles.js";


const router = express.Router();
router.get("/", (req, res) => {
    res.render("pages/styles", { styles: allStyles });

});

router.get("/:style", (req, res) => {
    const styleName = req.params.style;
    const style = allStyles.find(s => s.name.toLowerCase() === styleName.toLowerCase());

    if (!style) {
        return res.status(404).send("Dance style not found");
    }

    res.render("pages/styles", {style });
});

export default router;
