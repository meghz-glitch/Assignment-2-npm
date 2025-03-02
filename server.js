import express from 'express';
import stylesRouter from './routes/stylesRouter.js';  // Correct import for the styles router
import eventsRouter from './routes/eventsRouter.js';  // Correct import for the events router
import dotenv from 'dotenv';
import * as path from 'path';

// Load environment variables from a .env file
dotenv.config();

const __dirname = path.resolve();  // Get the absolute path of the current directory
const PORT = process.env.PORT || 3030;  // Get port from environment or default to 3030
const app = express();

// Set the view engine to EJS
app.set("view engine", "ejs");

// Serve static files (CSS, images, JS) from the public folder
app.use(express.static(path.join(__dirname, "public")));

// Set the location of the views (EJS templates)
app.set("views", path.join(__dirname, "views"));

// Home route
app.get("/", (req, res) => {
    res.render("pages/home");  // Render home.ejs in the pages folder
});

// Use the stylesRouter for all routes starting with "/styles"
app.use("/styles", stylesRouter);

// Use the eventsRouter for all routes starting with "/events"
app.use("/events", eventsRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
