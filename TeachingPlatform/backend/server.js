const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 5000;
const USERS_FILE = './backend/users.json';

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());



// Helper function to read users from JSON
const getUsers = () => {
    try {
        return JSON.parse(fs.readFileSync(USERS_FILE));
    } catch (err) {
        console.error('Error reading users.json:', err);
        return [];
    }
};

// Helper function to save users back to the JSON file
const saveUsers = (users) => {
    try {
        fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
    } catch (err) {
        console.error('Error saving users.json:', err);
    }
};

// Signup Route
app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;

    try {
        const users = getUsers();

        // Check if user already exists
        const existingUser = users.find(user => user.username === username);

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const newUser = { username, email, password };
        users.push(newUser);

        saveUsers(users);

        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        console.error('Signup Error:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Login Route
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    try {
        const users = getUsers();
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(400).json({ message: 'Invalid username or password' });
        }
    } catch (err) {
        console.error('Login Error:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});
// In server.js
const corsOptions = {
    origin: 'http://localhost:3000',
    methods: ['POST'],
    credentials: true
};

app.use(cors(corsOptions));


// Backend - server.js or profile.js

// Sample user database (use MongoDB in production)
const users = [
    {
      id: "1",
      name: "John Doe",
      email: "johndoe@example.com",
      education: "Bachelor of Science in Computer Science",
      location: "San Francisco, CA",
      skills: ["JavaScript", "React", "Node.js"],
      experience: "5 years of experience as a Full Stack Developer",
      profileImage: "https://example.com/image.jpg",
    },
  ];
  
  app.get('/api/profile/:id', (req, res) => {
    const userId = req.params.id;
    const user = users.find(user => user.id === userId);
  
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  });

  
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
