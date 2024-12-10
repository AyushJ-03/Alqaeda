const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'smart_campus',
});

db.connect((err) => {
    if (err) throw err;
    console.log('Database connected!');
});

// Helper function: Verify JWT
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).send('No token provided');
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(500).send('Failed to authenticate token');
        req.userId = decoded.id;
        next();
    });
};

// Routes
// 1. User Registration
app.post('/register', async (req, res) => {
    const { username, password, email, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = 'INSERT INTO users (username, password, email, role) VALUES (?, ?, ?, ?)';
    db.query(sql, [username, hashedPassword, email, role], (err) => {
        if (err) return res.status(500).send('Error registering user');
        res.status(201).send('User registered successfully');
    });
});

// 2. User Login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const sql = 'SELECT * FROM users WHERE username = ?';
    db.query(sql, [username], async (err, results) => {
        if (err) return res.status(500).send('Error logging in');
        if (results.length === 0) return res.status(404).send('User not found');

        const user = results[0];
        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(401).send('Invalid password');

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token, role: user.role });
    });
});

// 3. Add Announcement
app.post('/announcements', verifyToken, (req, res) => {
    const { title, content } = req.body;
    const sql = 'INSERT INTO announcements (title, content, author_id) VALUES (?, ?, ?)';
    db.query(sql, [title, content, req.userId], (err) => {
        if (err) return res.status(500).send('Error adding announcement');
        res.status(201).send('Announcement added successfully');
    });
});

// 4. Get Announcements
app.get('/announcements', (req, res) => {
    const sql = 'SELECT * FROM announcements';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).send('Error fetching announcements');
        res.status(200).json(results);
    });
});

// 5. User Profile
app.get('/profile', verifyToken, (req, res) => {
    const sql = 'SELECT * FROM users WHERE id = ?';
    db.query(sql, [req.userId], (err, results) => {
        if (err) return res.status(500).send('Error fetching profile');
        res.status(200).json(results[0]);
    });
});

// Start the Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
