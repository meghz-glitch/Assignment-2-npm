const express = require("express");
const router = express.Router();
const styles = require("../data/styles");

router.get("/", (req, res) => {
    res.render("pages/styles", { styles });

});

router.get("/:style", (req, res) => {
    const style = styles.find(s => s.name.toLowerCase() === req.params.style.toLowerCase());
    if (style) {
        res.render("pages/styles", { item: event });
    } else {
        res.status(404).send("Event not found");
    }
});

module.exports = router;