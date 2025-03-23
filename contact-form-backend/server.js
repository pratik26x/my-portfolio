require('dotenv').config();  // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: "https://pratiks-portfolioin.vercel.app" // Allow requests from your frontend
}));
app.use(express.json()); // Ensure JSON parsing is enabled

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully!'))
  .catch(err => console.error('MongoDB connection error:', err));

// Import Routes
const contactRoutes = require("./routes/contactRoutes");
app.use("/api", contactRoutes);  // Ensure this line is present

// Default Route
app.get("/", (req, res) => {
  res.send("Contact Form Backend is Running!");
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});