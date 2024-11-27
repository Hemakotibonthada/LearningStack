const express = require('express');
const app = express();
const port = 3000;

const data = {
    name: "Hema Koteswara Rao",
    email: "Hemakotibonthada@gmail.com",
    phone: "+91 9966123105",
    education: [
        {
            degree: "Bachelor of Technology",
            institution: "GIET Engineering College",
            location: "Rajahmundry",
            year: "2023",
            projects: [
                "Women Safety Device",
                "Fault Detection System",
                "Home Automation"
            ]
        },
        {
            degree: "Diploma in Engineering",
            institution: "Sri Shiridi Sai Diploma in Engineering & Technology",
            location: "Maripivalasa",
            year: "2020",
            projects: [
                "Small Load Inverter",
                "Smart Street Light Controlling System"
            ]
        }
    ],
    skills: [
        "HTML, CSS, JavaScript",
        "Angular, React",
        "Node.js, Express.js",
        "Arduino, ESP32, PCB Design",
        "C, Python, SQL"
    ]
};

// Serve static files
app.use(express.static('public'));

// Serve Hemaportfolio.html as the main page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/Hemaportfolio.html');
});

// API endpoint
app.get('/portfolio-data', (req, res) => {
    res.json(data);
});

// Start the server
app.listen(port, () => {
    console.log(`Portfolio server running at http://localhost:${port}`);
});
