import express from 'express';
import stylesRouter from "./routes/stylesRouter.js";
import eventsRouter from "./routes/eventsRouter.js";
import dotenv from "dotenv";
import * as path from "path";

dotenv.config();

const __dirname = path.resolve();
const PORT = process.env.PORT || 3030;
const app = express();


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
    res.render("pages/home");
});

app.use("/styles", stylesRouter);
app.use("/events", eventsRouter);


app.listen(PORT, () => 
    console.log(`Server is running on http://localhost:${PORT}`)
);
