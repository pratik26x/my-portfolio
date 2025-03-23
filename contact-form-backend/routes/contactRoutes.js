const express = require("express");
const Contact = require("../models/Contact"); // Ensure the path to the Contact model is correct

const router = express.Router();

// POST route for /api/contact
router.post("/contact", async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Validate required fields
        if (!name || !email || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: "Invalid email address" });
        }

        // Save the contact form submission to the database
        const newContact = new Contact({ name, email, message });
        await newContact.save();

        // Send success response
        res.status(201).json({ message: "Message sent successfully!" });
    } catch (error) {
        console.error("Error saving contact form submission:", error);
        res.status(500).json({ error: "Server error. Please try again later." });
    }
});

// GET route for /api/test
router.get("/test", (req, res) => {
    res.json({ message: "Test route working!" });
});

module.exports = router;