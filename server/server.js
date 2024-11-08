const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // Add this line

const app = express();
const PORT = 5000;

// Enable CORS for all routes
app.use(cors());

app.get('/api/projects', (req, res) => {
  fs.readFile(path.join(__dirname, 'data', 'projects.json'), 'utf-8', (err, data) => {
    if (err) {
      console.error("Error reading projects data:", err);
      return res.status(500).json({ message: 'Error loading projects data' });
    }
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
