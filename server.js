const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Data storage in memory (will be lost on restart, but persists during session)
let dataStore = {};

// Try to load from file on startup
const dataFile = path.join(__dirname, 'data.json');
try {
  if (fs.existsSync(dataFile)) {
    dataStore = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
    console.log('Loaded data from file');
  }
} catch (err) {
  console.error('Error loading data file:', err);
}

// Save data to file periodically
function saveDataToFile() {
  try {
    fs.writeFileSync(dataFile, JSON.stringify(dataStore, null, 2));
  } catch (err) {
    console.error('Error saving data file:', err);
  }
}

// Save every 5 seconds
setInterval(saveDataToFile, 5000);

// Get all entries for a user
app.get('/api/entries/:userId', (req, res) => {
  try {
    const userId = req.params.userId;
    res.json(dataStore[userId] || {});
  } catch (err) {
    console.error('Error reading data:', err);
    res.json({});
  }
});

// Save entries for a user
app.post('/api/entries/:userId', (req, res) => {
  try {
    const userId = req.params.userId;
    dataStore[userId] = req.body;
    saveDataToFile(); // Save immediately
    res.json({ success: true });
  } catch (err) {
    console.error('Error saving data:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
