import express from 'express';
import stylesRouter from "./routes/stylesRouter.js";
import eventsRouter from "./routes/eventsRouter.js";
import dotenv from "dotenv";
import * as path from "path";
import { allStyles } from "./data/styles.js"

dotenv.config();

const __dirname = path.resolve();
const PORT = process.env.PORT || 3030;
const app = express();

app.get("/", (req, res) => {
    res.render("pages/home", {
        allStyles: allStyles
    });
});

app.use("/styles", stylesRouter);
app.use("/events", eventsRouter);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.set("views",path.join(__dirname, "views"));

app.listen(PORT, () =>
    console.log(`Starting server, listening on http://localhost:${PORT}`)
);