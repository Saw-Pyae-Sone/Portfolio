const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");
require("dotenv").config();
const corsOptions = {
    origin: ['http://localhost:5173', 'https://localhost:5173'],
};

app.use(cors(corsOptions));

app.get("/api/education", async (req, res) => {

    const binId = "6757eb49ad19ca34f8d8949b";
    console.log('API_KEY:', process.env.API_KEY);

    try{
        const response = await axios.get(`https://api.jsonbin.io/v3/b/${binId}`, {
            headers: {
                "X-Master-Key": process.env.API_KEY,
            },
        });
        console.log(response.data);
        const data = response.data;

        res.status(200).json(data);
    }catch(error){
        console.error('Detailed error:', error); 
        res.status(500).json({message: "Error fetching data:", error: error.message})
    }
});

app.get("/api/experience", async (req, res) => {

    const binId = "6757eb5ae41b4d34e462d9ca";
    console.log(process.env.API_KEY);
    
    try{
        const response = await axios.get(`https://api.jsonbin.io/v3/b/${binId}`, {
            headers: {
                "X-Master-Key": process.env.API_KEY,
            },
        });
        console.log(response.data);
        const data = response.data;

        res.status(200).json(data);
    }catch(error){
        console.error('Detailed error:', error); 
        res.status(500).json({message: "Error fetching data:", error: error.message})
    }
});

app.get("/api/fruits", async (req, res) => {
    res.json({fruits: ["apple", "orange", "pineapple"]})
});

app.get("/api/skills", async (req, res) => {
    res.json({skills: ['Node.js', 'Django', 'HTML', 'CSS', 'React', 'Tailwind css', 'TypeScript', 'Express.js', 'PHP', 'jQuery']})
});

app.listen(8080, () => {
    console.log("Server started on port 8080")
}); 