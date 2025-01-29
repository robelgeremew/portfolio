const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Database connection
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "portfolio",
});

conn.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to database");
});

// Comment submission route
// Ensure body-parser is used for JSON parsing
app.use(bodyParser.json());  // Add this line if it's missing

app.post("/comment", (req, res) => {
    console.log("Received request body:", req.body);
  
    const { name, email, subject, message } = req.body;
  
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }
  
    const sql = "INSERT INTO comment (Name, Email, Subject, Message) VALUES (?, ?, ?, ?)";
  
    conn.query(sql, [name, email, subject, message], (err, result) => {
      if (err) {
        console.error("Error inserting data:", err);
        return res.status(500).json({ error: "Database error", details: err });
      }
      console.log("Comment added successfully:", result);
      // Respond with a success message
      res.status(200).send("OK"); // Send a simple text message for success
    });
  });
  


// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
