const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Serve the Angular frontend
app.use(express.static("frontend/dist/frontend"));

// Sample API endpoint
app.get("/api/about", (req, res) => {
    res.json({
        name: "Hema Koteswara Rao",
        title: "Electrical & Electronics Engineer",
        skills: ["HTML", "CSS", "JavaScript", "Angular", "Node.js"],
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
