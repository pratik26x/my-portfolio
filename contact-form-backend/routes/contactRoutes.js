const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

// POST route for /api/contact
router.post("/contact", async (req, res) => {
    try {
        const { name, email, message } = req.body;
        
        if (!name || !email || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newContact = new Contact({ name, email, message });
        await newContact.save();

        res.status(201).json({ message: "Message sent successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});
router.get("/test", (req, res) => {
    res.json({ message: "Test route working!" });
});

module.exports = router;
