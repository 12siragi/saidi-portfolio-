// pages/api/projects.js

import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const filePath = path.join(process.cwd(), 'server/data/projects.json');
    
    // Read the file synchronously
    try {
      const data = fs.readFileSync(filePath, 'utf-8');
      res.status(200).json(JSON.parse(data)); // Send the JSON response
    } catch (err) {
      console.error("Error reading projects data:", err);
      res.status(500).json({ message: 'Error loading projects data' }); // Return error
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' }); // Handle unsupported HTTP methods
  }
}
