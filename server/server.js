const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
    origin: ['http://localhost:5173', 'https://localhost:5173'],
};

app.use(cors(corsOptions));

app.get("/api/fruits", (req, res) => {
    res.json({fruits: ["apple", "orange", "pineapple"]})
});

app.get("/api/skills", (req, res) => {
    res.json({skills: ['Node.js', 'Django', 'HTML', 'CSS', 'React', 'Tailwind css', 'TypeScript', 'Express.js', 'PHP', 'jQuery']})
});

app.listen(8080, () => {
    console.log("Server started on port 8080")
}); 